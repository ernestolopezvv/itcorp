import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from '../api/axios';
const LOGIN_URL = '/auth';


const Login = () => {
  
  const { setAuth } = useAuth();
 

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/menu";


  const userRef = useRef();
  const errRef = useRef();
  
  
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
 

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(()=> {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(LOGIN_URL, 
        JSON.stringify({user, pwd}),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
        );
         
        
      
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        const id = response?.data?.id;
        
        setAuth({id, user, pwd, roles, accessToken });

        setUser("");
        setPwd("");
        navigate(from, {replace: true});
    
        

    } catch (err) {
        if(!err?.response.status) {
          setErrMsg('No Server Response');
        } else if (err.response?.status === 400) {
          setErrMsg('Missing Username or Password');
        } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized');
        } else {
          setErrMsg('Login Failed');
        }
        errRef.current.focus();

    }
    
  }

  return (

              <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="username">Usuario</label>
                  <input 
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete = "off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                  />

                  <label htmlFor="password">Contraseña</label>
                  <input 
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                  />
                  <button>Ingresar</button>
                </form>
                <p>
                  ¿No tienes cuenta?<br/>
                  <span className="line">
                    {/*put router link here*/}
                    <a>Solicita un usuario al administrador</a>
                    <a>admin@financh.com</a>

                  </span>
                </p>
              
              </section>
         
  
  )
}

export default Login