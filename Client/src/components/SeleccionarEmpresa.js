import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";

function SeleccionarEmpresa () {
  const history = useNavigate();


    return(
        <div className="main">
          <div className = "titulo"><h1>Seleccionar Empresa</h1></div>
            <div className = "centeredContainer">
              <button onClick={()=> history("/menu")}>Regresar a Menú Admin</button>
              <button className="button" onClick={()=> history("/SubirReporte")}>Empresa #1</button>
            </div>
          </div>
    );
} 

export default SeleccionarEmpresa;