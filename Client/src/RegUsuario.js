import React, { useState } from "react";
import Axios from 'axios'
import {useNavigate} from "react-router-dom";



function Registro(){

    const [Correo, setCorreo] = useState("");
    const [Contrasena, setContrasena] = useState("");
    const [Rol, setRol] = useState("");

    const register = () => {
        Axios.post('http://localhost:3001/Registro', {
            Correo: Correo, 
            Contrasena: 
            Contrasena, 
            Rol: Rol
        }).then((response)=> {
            console.log(response);
        });
    };

   return (
    <div className="App">
        <div className="registro">
            <h1>Crear Cuenta</h1>
            <label>email</label>
            <input type="text" 
                onChange={(e) => 
                {setCorreo(e.target.value);}}
                />
            <label>Contrasena</label>
            <input type="text" 
                onChange={(e) => 
                {setContrasena(e.target.value);}}
                />
            <label>Rol</label>
            <input type="text"  
                onChange={(e) => 
                {setRol(e.target.value);}}/>
            <button onClick={register}>registrarte </button>
        </div>
    </div>
   ); 
}

export default Registro;