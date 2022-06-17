import React from "react";
import { useNavigate } from "react-router-dom";

const MenuAdministracion = () => {
  const history = useNavigate();
  return (
    <div className="menubox">
      <div className="sub-menubox2">
        <div>
          <h1>Menu Administración</h1>
          <div className="menu-button">
            <button className="button3" onClick={() => history("/menu")}>
              Regresar a Menú Principal
            </button>
          </div>

          <div className="menu-button">
            <button
              className="button3"
              onClick={() => history("/administracion/empresas")}
            >
              Gestionar Empresas
            </button>
          </div>

          <div className="menu-button">
            <button
              className="button3"
              onClick={() => history("/administracion/usuarios")}
            >
              Gestionar Usuarios
            </button>
          </div>
          <div className="menu-button">
            <button
              className="button3"
              onClick={() => history("/administracion/usuarios-y-empresas")}
            >
              Gestionar Acceso de Usuarios a Empresas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuAdministracion;
