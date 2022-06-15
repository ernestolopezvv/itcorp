import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "../api/axios";
const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/menu";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      const id = response?.data?.id;

      setAuth({ id, user, pwd, roles, accessToken });

      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response.status) {
        setErrMsg("El servidor no responde");
      } else if (err.response?.status === 400) {
        setErrMsg("Falta usuario o contraseña");
      } else if (err.response?.status === 401) {
        setErrMsg("Inicio de sesión no autorizado");
      } else {
        setErrMsg("Inicio de sesión fallido");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="loginbox2">
      <div className="sub-logingbox2">
        <div>
          <h1>Iniciar Sesión</h1>

          <form onSubmit={handleSubmit}>
            <div className="user-input">
              <input
                className="login-input"
                type="text"
                placeholder="Usuario"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>
            <div className="password-input">
              <input
                className="login-input"
                type="password"
                placeholder="Contraseña"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>
            <div className="login-button">
              <button className="button2">Ingresar</button>
            </div>
          </form>

          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div className="link">
            <p>
              ¿No tienes cuenta?
              <br />
              <span className="line">
                <a>Solicita un usuario al correo </a>
                <a>admin@financh.com</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
