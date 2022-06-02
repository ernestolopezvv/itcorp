import {useNavigate} from "react-router-dom";
import { useState, Component } from "react";
import axios from '../api/axios';
 
const BALANZA_DE_COMPROBACION_URL = '/balanzaComprobacion';


const BalanzaComprobacion = () => {
      
      const history = useNavigate();

      const[listCuentas, setListCuentas] = useState([]);

      const colNames = ['Codigo','Nombre' , 'Saldos Iniciales', 'Cargo', 'Abono', 'SaldosActuales'];
      const subNames = [' ', '  ', 'Deudor Acreedor', ' ', ' ', 'Deudor Acreedor'];

 

      const getData = async (e) => {
            try{
                  const response = await axios.get(BALANZA_DE_COMPROBACION_URL);
                        console.log(response.data);
                        setListCuentas(response.data);
            
                    }
            catch (err) {
                        console.log(err);
            
                    }
       }

      return(

            <div className="main">
                  <div className = "titulo"><h1>Balanza de comprobación</h1></div>
                  <div className = "centeredContainer">
                        <button onClick={()=> history("/MenuReporte")}>Regresar a Menú Reporte</button>        
                  </div>

                  <div className="Table">
                 
                  <button onClick={getData} title = "verCuentas"> Generar Balanza</button>
                  {listCuentas.length > 0 && (
                  <table className="table ">
                        <thead>
                        <tr>
                              {colNames.map((headerItem, index) => (
                                    <th key={index}>
                                    {headerItem.toUpperCase()}
                                        </th>
                                    ))}
                        </tr>
                        <tr>
                              {subNames.map((headerItem, index) => (
                                    <th key={index}>
                                    {headerItem.toUpperCase()}
                                    </th>
                              ))}
                         </tr>
                        </thead>

                        <tbody>
                        {Object.values(listCuentas).map((val, index) =>(
                              
                              <tr key={index}>
                                    
                                    <td> {val.Codigo} </td>
                                    <td> {val.Nombre} </td>
                                    <td> 
                                          <div  className="left">{val.DeudoraInicial} </div> 
                                          <div className="right">{val.AcreedoraInicial} </div>
                                     </td>
                                    <td> {val.Cargo_Cuenta} </td>
                                    <td> {val.Abono_Cuenta} </td>
                                    <td>
                                          <div className="left">{val.DeudoraActual} </div> 
                                          <div className="right">{val.AcreedoraActual}</div>
                                     </td>
                              </tr>
                         ))}
                        </tbody>
                        <tbody>
                              <tr>
                                    
                                    <td>  </td>
                                    <td>Total cuentas no impresas </td>
                                    <td> 
                                          <div  className="left">0 </div> 
                                          <div className="right">0 </div>
                                     </td>
                                    <td> 0 </td>
                                    <td> 0 </td>
                                    <td>
                                          <div className="left"> 0 </div> 
                                          <div className="right"> 0</div>
                                     </td>
                                     
                              </tr>

                              <tr>
                                    
                                    <td>  </td>
                                    <td> Sumas iguales </td>
                                    <td> 
                                          <div  className="left">1629749.75 </div> 
                                          <div className="right">1629749.75 </div>
                                     </td>
                                    <td> 869714.04 </td>
                                    <td>869714.04 </td>
                                    <td>
                                          <div className="left"> 1812783.64 </div> 
                                          <div className="right"> 1812783.64</div>
                                     </td>
                                     
                              </tr>
                         
                        </tbody>
                  </table>
                  
                  )}
                  

                  </div>
            </div>
      )
}

export default BalanzaComprobacion

/*{listCuentas.map((val, key) =>{
      return <div className="balanza">

                        <td> {val.Codigo} </td>
                        <td> {val.Nombre} </td>
                        <td> {val.DeudoraInicial} </td>
                        <td> {val.AcreedoraInicial}  </td>
                        <td> {val.Cargo_Cuenta} </td>
                        <td> {val.Abono_Cuenta} </td>
                        <td> {val.DeudoraActual} </td>
                        <td> {val.AcreedoraActual}  </td>
                  
      </div>
      })}*/