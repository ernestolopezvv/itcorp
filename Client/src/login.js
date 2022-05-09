//import './App.css';
import React, { useEffect, useState } from "react";
import Axios from 'axios';



function Login() {

  const [Correo, setCorreo] = useState("");
  const [Contrasena, setContrasena] = useState("");

  const agregarUsuario = () => {
    Axios.post("http://localhost:3001/login", {
      Correo: Correo,
      Contrasena: Contrasena 
    });
  };

  return (
    <div className="App">
     <div className="agregar">
      <label>Correo:</label>
      <input type="text" onChange={(event)=> {setCorreo(event.target.value)}}></input>
      <label>Contrasena:</label>
      <input type="text" onChange={(event)=> {setContrasena(event.target.value)}}></input>
      <button onClick={agregarUsuario}>Login</button>
     </div>
    </div>
  );
}

export default Login;