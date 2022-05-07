//import './App.css';
import React, { useEffect, useState } from "react";
import Axios from 'axios';

function App() {

  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");

  const [listaUsuarios, setListaUsuarios] = useState([]);

  const agregarUsuario = () => {
    Axios.post("http://localhost:3001/prueba", {
      nombre: nombre,
      contrasena: contrasena 
    });
  };

  const verUsuarios = () => {
    Axios.get("http://localhost:3001/usuarios").then((response) => {
      console.log(response);
      console.log(response.data);
      console.log(nombre);
      
      const questions = [];
      var nombre = "";
      var contrasena = "";

      nombre = (response.data[0].nombre);
      contrasena = (response.data[1].contrasena);


      questions.push(<h3 key = {1}> {nombre + contrasena} </h3>);
      console.log(questions)
      setListaUsuarios(questions);
    });
  };

  return (
    <div className="App">
     <div className="agregar">
      <label>Nombre:</label>
      <input type="text" onChange={(event)=> {setNombre(event.target.value)}}></input>
      <label>Contrasena:</label>
      <input type="text" onChange={(event)=> {setContrasena(event.target.value)}}></input>
      <button onClick={agregarUsuario}>Login</button>
     </div>

     <div className="recibir">
       <button onClick={verUsuarios}>Ver usuarios</button>
     </div>
      {listaUsuarios}
    </div>
  );
}

export default App;