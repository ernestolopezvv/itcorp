import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";

function SubirReporte () {
  const history = useNavigate();


    return(
        <div className="main">
          <div className = "titulo"><h1>Subir Reporte</h1></div>
            <div className = "centeredContainer">
              <button onClick={()=> history("/SeleccionarEmpresa")}>Regresar a Seleccionar empresa</button>
              <button className="button">Subir Reporte</button>
            </div>
          </div>
    );
} 

export default SubirReporte;