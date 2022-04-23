// Archivo de menú de cliente (sólo para propósitos de presentación)

import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";

function MenuCliente () {
  const history = useNavigate();


    return(
        <div className="main">
          <div className = "titulo"><h1>Menú de Cliente</h1></div>
          <div className = "centeredContainer">
          <button onClick={()=> history("/")}>Regresar a Home</button>
            <button className="button">Visualizar Datos</button>

          </div>
          </div>
    );
} 

export default MenuCliente;