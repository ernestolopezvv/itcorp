
import {useNavigate} from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from '../api/axios';

const REGISTRAR_EMPRESA_URL = '/registrarEmpresa';



const RegistrarEmpresa = () => {

    const history = useNavigate();

    const[Nombre, setNombre] = useState("");
    const [listaEmpresas, setListaEmpresas] = useState([]);

    const handleSubmit = async (e) => {

        try{
            const response = await axios.post(REGISTRAR_EMPRESA_URL,
                JSON.stringify({Nombre, listaEmpresas}),
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

    return(
        <div className="main">
         <div className = "titulo"><h1>Agregar Nueva Empresa</h1></div>
          <div className = "centeredContainer">
                <button onClick={()=> history("/menu")}>Regresar a Menú Admin</button>        
           </div>
           <div className= "agregarEmpresa">
                   <label>Nombre de la empresa: </label> 
                   <input type="text" onChange={ (event) => {
                       setNombre(event.target.value);
                   }} />   
                 <button onClick={handleSubmit}>Agregar nueva empresa</button>        
               
               </div>
               <div className="verEmpresas">
                   <button onClick={handleSubmit}> Ver empresas</button>
                   {listaEmpresas.map((val, key) =>{
                     return <div className="empresa"> {val.Nombre} </div>
                   })}
  
               </div>
            </div>
       );


}
















// function RegistrarEmpresa () {
//   const history = useNavigate();
//     const[Nombre, setNombre] = useState("");

//     const [listaEmpresas, setListaEmpresas] = useState([]);

//     const registrar = () => {
     
//       Axios.post('http://localhost:3001/crear-empresa', {Nombre: Nombre}).then(() =>{
//         setListaEmpresas([...listaEmpresas, {Nombre: Nombre}]);
//       });
//     };

//     const getEmpresas = () => {
//       Axios.get('http://localhost:3001/empresas').then((response) =>{
//         setListaEmpresas(response.data);

//       });
//     }
  
//     return(
//         <div className="main">
//           <div className = "titulo"><h1>Agregar Nueva Empresa</h1></div>
//             <div className = "centeredContainer">
//               <button onClick={()=> history("/MenuAdmin")}>Regresar a Menú Admin</button>        
//             </div>
//             <div className= "agregarEmpresa">
//                 <label>Nombre de la empresa: </label> 
//                 <input type="text" onChange={ (event) => {
//                     setNombre(event.target.value);
//                 }} />   
//               <button onClick={registrar}>Agregar nueva empresa</button>        
             
//             </div>
//             <div className="verEmpresas">
//                 <button onClick={getEmpresas}> Ver empresas</button>
//                 {listaEmpresas.map((val, key) =>{
//                   return <div className="empresa"> {val.Nombre} </div>
//                 })}

//             </div>
//           </div>
//     );
// } 

export default RegistrarEmpresa;