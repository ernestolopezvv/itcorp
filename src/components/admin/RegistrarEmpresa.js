import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../../api/axios";

const REGISTRAR_EMPRESA_URL = "/registrarEmpresa";

const RegistrarEmpresa = () => {
  const history = useNavigate();

  const [Nombre, setNombre] = useState("");
  const [Sucursal, setSucursal] = useState("");
  const [listaEmpresas, setListaEmpresas] = useState([]);

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        REGISTRAR_EMPRESA_URL,
        JSON.stringify({ Nombre, Sucursal, listaEmpresas }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getEmpresas = async (e) => {
    try {
      const response = await axios.get(REGISTRAR_EMPRESA_URL);
      setListaEmpresas(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="menubox">
      <div className="sub-menubox3">
        <div>
          <h1>Agregar Nueva Empresa</h1>
          <div className="menu-button">
            <button
              className="button3"
              onClick={() => history("/administracion")}
            >
              Regresar a Menú Administración
            </button>
          </div>
          <div className="user-input">
            <input
              className="login-input"
              placeholder="Nombre de la Empresa"
              type="text"
              onChange={(event) => {
                setNombre(event.target.value);
              }}
              title="nombre"
            />
          </div>
          <div className="user-input">
            <input
              className="login-input"
              placeholder="Sucursal"
              type="text"
              onChange={(event) => {
                setSucursal(event.target.value);
              }}
              title="sucursal"
            />
          </div>
          <div className="menu-button">
            <button
              className="button3"
              onClick={handleSubmit}
              title="registrar"
            >
              Agregar nueva empresa
            </button>
          </div>

          <div className="menu-button">
            <button
              className="button3"
              onClick={getEmpresas}
              title="verEmpresas"
            >
              Ver empresas
            </button>
          </div>

          <div className="menu-button">
            <div className="scroll-list">
              {listaEmpresas.map((val, key) => {
                return (
                  <div className="empresa">
                    {" "}
                    {val.Nombre} {val.Sucursal} {val.Sucursal ? "" : ""}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrarEmpresa;
