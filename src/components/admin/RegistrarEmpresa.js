import {useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from '../../api/axios';

const REGISTRAR_EMPRESA_URL = '/registrarEmpresa';
 
const RegistrarEmpresa = () => {

    const history = useNavigate();

    const[Nombre, setNombre] = useState("");
    const[Sucursal, setSucursal] = useState("");
    const [listaEmpresas, setListaEmpresas] = useState([]);

    const handleSubmit = async (e) => {

        try{
            const response = await axios.post(REGISTRAR_EMPRESA_URL,
                JSON.stringify({Nombre, Sucursal, listaEmpresas}),
                {
                    headers: { 'Content-Type' : 'application/json' },
                    withCredentials : true
                }
            );

            console.log(response.data);

        } catch (err) {
            console.log(err);

        }
    }

    const getEmpresas = async (e) => {
        try{
            const response = await axios.get(REGISTRAR_EMPRESA_URL );
            setListaEmpresas(response.data);

        } catch (err) {
            console.log(err);

        }
    }

    return(
        <div className="main">
         <div className = "titulo"><h1>Agregar Nueva Empresa</h1></div>
          <div className = "centeredContainer">
                <button onClick={()=> history("/administracion")}>Regresar a Menú Administración</button>        
           </div>
           <div className= "agregarEmpresa">
                   <label>Nombre de la empresa: </label> 
                   <input type="text" onChange={ (event) => {
                       setNombre(event.target.value);
                   }} title = "nombre"/>   

                    <label>Sucursal: </label> 
                    <input type="text" onChange={ (event) => {
                        setSucursal(event.target.value);
                    }}  title = "sucursal"/>

                 <button onClick={handleSubmit} title = "registrar">Agregar nueva empresa</button>        
               
               </div>
               <div className="verEmpresas">
                   <button onClick={getEmpresas} title = "verEmpresas"> Ver empresas</button>
                   {listaEmpresas.map((val, key) =>{

                     return <div className="empresa">  {val.Nombre} {val.Sucursal} {val.Sucursal ? '' : ''}
                      </div>
                   })}
  
               </div>
            </div>
       );


}


export default RegistrarEmpresa;
