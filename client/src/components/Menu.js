import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";


function Menu () {
  const history = useNavigate();
  

    return(
        <div className="main">
          <div className = "titulo"><h1>Menu Principal</h1></div>
          
            <div className = "centeredContainer">
              <button onClick={()=> history("/home")}>Regresar a Home</button>
              <button className="button"onClick={()=> history("/SeleccionarEmpresa")}>Registrar Información</button>
              <button className="button">Generar Reporte</button>
              <button className="button">Administrar usuarios</button>
              <button className="button"onClick={()=> history("/RegistrarEmpresa")}>Agregar Empresa</button>
              <button className="button"onClick={()=> history("/register")}>Registrar Usuario</button>
            </div>
          </div>
    );
} 

export default Menu;