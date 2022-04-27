import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom";
import Axios from 'axios';

function RegistrarEmpresa () {
  const history = useNavigate();
    const[Nombre, setNombre] = useState("");

    const registrar = () => {
      
      
      Axios.post('http://localhost:3001/crear-empresa', {Nombre: Nombre}).then(() =>{
        console.log("Listo");
      });
    };

  
    return(
        <div className="main">
          <div className = "titulo"><h1>Agregar Nueva Empresa</h1></div>
            <div className = "centeredContainer">
              <button onClick={()=> history("/MenuAdmin")}>Regresar a Menú Admin</button>        
            </div>
            <div className= "inputInformation">
                <label>Nombre de la empresa: </label> 
                <input type="text" onChange={ (event) => {
                    setNombre(event.target.value);
                }} />   
            </div> 
            <div className = "centeredContainer">
              <button onClick={registrar}>Agregar nueva empresa</button>        
            </div>
          </div>
    );
} 

export default RegistrarEmpresa;