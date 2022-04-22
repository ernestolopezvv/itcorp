import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";

function RegistrarEmpresa () {
  const history = useNavigate();


    return(
        <div className="main">
          <div className = "titulo"><h1>Agregar Nueva Empresa</h1></div>
            <div className = "centeredContainer">
              <button onClick={()=> history("/MenuAdmin")}>Regresar a Menú Admin</button>        
            </div>
            <div className= "inputInformation">
                <label>Nombre de la empresa: </label> 
                <input type="text" />  
                <label>Tipo de moneda:</label> 
                <input type="text" />   
            </div> 
            <div className = "centeredContainer">
              <button>Agregar nueva empresa</button>        
            </div>
          </div>
    );
} 

export default RegistrarEmpresa;