import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";

function MenuReporte () {
  const history = useNavigate();


    return(
        <div className="mainReportes">
          <div className = "titulo"><h1>Seleccionar reporte</h1></div>
            <div className = "centeredContainer">
              <button onClick={()=> history("/Menu")}>Regresar a Menu Principal</button>
              <button className="button"onClick={()=> history("/reportes/balance-general")}>Balance General</button>
              <button className="button"onClick={()=> history("/reportes/estado-de-resultados")}>Estado de Resultados</button>
              <button className="button"onClick={()=> history("/reportes/balanza-de-comprobacion")}>Balanza de Comprobación</button>
            </div>
          </div>
    );
} 

export default MenuReporte;