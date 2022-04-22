import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom";

function RegistrarEmpresa () {
  const history = useNavigate();
    const[nombreEmpresa, setNombreEmpresa] = useState("");

    /*const displayInfo = () => {
        console.log(nombreEmpresa);
    };*/
    return(
        <div className="main">
          <div className = "titulo"><h1>Agregar Nueva Empresa</h1></div>
            <div className = "centeredContainer">
              <button onClick={()=> history("/MenuAdmin")}>Regresar a Menú Admin</button>        
            </div>
            <div className= "inputInformation">
                <label>Nombre de la empresa: </label> 
                <input type="text" onChange={ (event) => {
                    setNombreEmpresa(event.target.value);
                }} />  
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