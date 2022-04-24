import React, { useState } from "react";
import Axios from 'axios'
import {useNavigate} from "react-router-dom";
import "./App.css";
import App from "./Login";

const register = () => {
    Axios.post('http://localhost3001/registro', {
        usuario: usuarioReg,
        contrasena: contrasenaReg,
        rol: rolReg
    }).then ((response) => {
        console.log(response);
    });
}

function app(){

    const [usuarioReg, setUsuarioReg] = useState("");
    const [contrasenaReg, setContrasenaReg] = useState("");
    const [rolReg, setRolReg] = useState("");


   return (
    <div className="App">
        <div className="registro">
            <h1>Crear Cuenta</h1>
            <label>email</label>
            <input type="text" 
                onChange={(e) => 
                {setUsuarioReg(e.target.value);}}
                />
            <label>Contrasena</label>
            <input type="text" 
                onChange={(e) => 
                {setContrasenaReg(e.target.value);}}
                />
            <label>Rol</label>
            <input type="text"  
                onChange={(e) => 
                {setRolReg(e.target.value);}}/>
            <button>registrarte </button>
        </div>
    </div>
   ); 
}

export default App;