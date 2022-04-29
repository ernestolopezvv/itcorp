import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom";
import Axios from 'axios';

function RegistrarEmpresa () {
  const history = useNavigate();
    const[Nombre, setNombre] = useState("");

    const [listaEmpresas, setListaEmpresas] = useState([]);

    const registrar = () => {
     
      Axios.post('http://localhost:3001/crear-empresa', {Nombre: Nombre}).then(() =>{
        setListaEmpresas([...listaEmpresas, {Nombre: Nombre}]);
      });
    };

    const getEmpresas = () => {
      Axios.get('http://localhost:3001/empresas').then((response) =>{
        setListaEmpresas(response.data);

      });
    }
  
    return(
        <div className="main">
          <div className = "titulo"><h1>Agregar Nueva Empresa</h1></div>
            <div className = "centeredContainer">
              <button onClick={()=> history("/MenuAdmin")}>Regresar a Menú Admin</button>        
            </div>
            <div className= "agregarEmpresa">
                <label>Nombre de la empresa: </label> 
                <input type="text" onChange={ (event) => {
                    setNombre(event.target.value);
                }} />   
              <button onClick={registrar}>Agregar nueva empresa</button>        
             
            </div>
            <div className="verEmpresas">
                <button onClick={getEmpresas}> Ver empresas</button>
                {listaEmpresas.map((val, key) =>{
                  return <div className="empresa"> {val.Nombre} </div>
                })}

            </div>
          </div>
    );
} 

export default RegistrarEmpresa;