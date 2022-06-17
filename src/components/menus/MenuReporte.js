import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

function MenuReporte() {
  const history = useNavigate();

  return (
    <div className="menubox">
      <div className="sub-menubox">
        <div>
          <h1>Seleccionar reporte</h1>

          <div className="menu-button>">
            <button className="button3" onClick={() => history("/menu")}>
              Regresar a Menú Principal
            </button>
          </div>
          <div className="menu-button">
            <button
              className="button3"
              onClick={() => history("/reportes/balance-general")}
            >
              Balance General
            </button>
          </div>

          <div className="menu-button">
            <button
              className="button3"
              onClick={() => history("/reportes/estado-de-resultados")}
            >
              Estado de Resultados
            </button>
          </div>
          <div className="menu-button">
            <button
              className="button3"
              onClick={() => history("/reportes/balanza-de-comprobacion")}
            >
              Balanza de Comprobación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuReporte;
