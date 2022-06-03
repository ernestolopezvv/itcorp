import {useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from '../api/axios';
 
const BALANCE_GENERAL_URL = '/balancegeneral';


const BalanceGeneral = () => {

  const history = useNavigate();

  const[listTotales, setListTotales] = useState([]);
  const getData = async (e) => {
    try{
          const response = await axios.get(BALANCE_GENERAL_URL);
                console.log(response.data);
                setListTotales(response.data);
    
            }
    catch (err) {
                console.log(err);
    
            }
}
    return(
        <div className="mainReportes">
          <div className = "titulo"><h1>BalanceGeneral</h1></div>
            <div className = "centeredContainer">
                <button onClick={()=> history("/MenuReporte")}>Regresar a Menú Reporte</button> 
            </div>
            <div className="Balance">
                <button onClick={getData}> Generar Balance </button>
                    {listTotales.length > 0 && (
                        <table className="table">
                        <tr>

                            <td>
                                <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTIVO</b>
                                <tr><td>
                                &nbsp;&nbsp;&nbsp;&nbsp;Circulante
                                        <tr><td width={370}>Bancos</td>
                                        <td className= "right">6181.41</td></tr>

                                        <tr><td>Clientes</td>
                                        <td className= "right">176780.11</td></tr>

                                        <tr><td>Deudores Diversos</td>
                                        <td className= "right">95334.37</td></tr>

                                        <tr><td><p>IVA Acreditable</p></td>
                                        <td className= "right"><p>42540.61</p></td></tr>

                                        <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;Total CIRCULANTE</td> 
                                        <td className= "right">320836.50</td></tr>
                                </td></tr>
                                <br></br> <br></br> <br></br> 

                                <tr><td>
                                &nbsp;&nbsp;&nbsp;&nbsp;Fijo
                                    <tr><td width={382}>Mobiliario y Equipo de oficina</td>
                                        <td className= "right" >14212.06</td></tr>

                                        <tr><td><p>Depreciación Acumulada de Mob y Equipo de oficina</p></td>
                                        <td className= "right"><p>-2025.00</p></td></tr>

                                        <tr><td> &nbsp;&nbsp;&nbsp;&nbsp;Total FIJO</td> 
                                        <td className= "right" border="">12187.06</td></tr>
                                </td> </tr>
                                <br></br> <br></br> <br></br>

                                <tr><td>
                                &nbsp;&nbsp;&nbsp;&nbsp; Diferido
                                        <tr ><td width={382}><p>Impuestos anticipados</p></td>
                                        <td className= "right"><p>14434.00</p></td></tr>

                                        <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;Total DIFERIDO</td> 
                                        <td className= "right">14434.00</td></tr>
                                </td> </tr>
                                <br></br> <br></br> <br></br>
                        
                                <tr>
                                    <td className="right" width={360}><b> SUMA DEL ACTIVO </b></td> 
                                    <td className= "right" > 347457.56</td>
                                </tr>
                              
                            </td>
                            
                            <td> 
                                <tr>
                                    <td width={460}>
                                    <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PASIVO</b>
                                    <tr><td>
                                &nbsp;&nbsp;&nbsp;&nbsp;Circulante
                                        <tr><td width={382}>ACREEDORES DIVERSOS</td>
                                        <td className= "right">-343.21</td></tr>

                                        <tr><td>IMPUESTOS POR PAGAR</td>
                                        <td className= "right">78376.81</td></tr>

                                        <tr><td><p>DOCUMENTOS POR PAGAR</p></td>
                                        <td className= "right"><p>95162.67</p></td></tr>

                                        <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;Total CIRCULANTE</td> 
                                        <td className= "right">173196.27</td></tr>
                                </td></tr>
                                <br></br> 

                                <tr><td>
                                &nbsp;&nbsp;&nbsp;&nbsp;Fijo 
                                        <tr><td width={382}> &nbsp;&nbsp;&nbsp;&nbsp;Total FIJO</td> 
                                        <td className= "right" >0.00</td></tr>
                                </td> </tr>
                                <br></br> 

                                <tr><td>
                                &nbsp;&nbsp;&nbsp;&nbsp; Diferido

                                        <tr><td width={382}>&nbsp;&nbsp;&nbsp;&nbsp;Total DIFERIDO</td> 
                                        <td className= "right">0.00</td></tr>
                                </td> </tr>
                                <br></br> 
                        
                                <tr>
                                    <td className="right" width={360}><b> SUMA DEL PASIVO </b></td> 
                                    <td className= "right" > 173196.27</td>
                                </tr>
                                    </td> 
                                </tr>
                                <br></br>
                                <tr>
                                    <td >
                                    <b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CAPITAL</b>
                                    <tr><td>
                                &nbsp;&nbsp;&nbsp;&nbsp;CAPITAL
                                        <tr><td width={382}>Capital Social</td>
                                        <td className= "right">100000.00</td></tr>

                                        <tr><td>Resultado Ejercicios Anteriores</td>
                                        <td className= "right">-41370.48</td></tr>

                                        <tr><td>&nbsp;&nbsp;&nbsp;&nbsp;Total CAPITAL</td> 
                                        <td className= "right">58629.52</td></tr>

                                        <tr><td>Utilidad o Pérdida del Ejercicio</td>
                                        <td className= "right">115631.77</td></tr>
                                </td></tr>
                                <br></br> 
                                <tr>
                                    <td className="right" width={360}><b> SUMA DEL CAPITAL </b></td> 
                                    <td className= "right" > 174261.29</td>
                                </tr>
                                    </td> 
                                </tr>
                                <br></br> <br></br> 
                                <tr>
                                    <td width={360}><b>SUMA DEL PASIVO Y CAPITAL</b></td>
                                    <td className= "right" > 347457.56</td>
                                </tr>
                            </td>
                        </tr>
                        
                    </table>
                    )}
                    


            </div>
          </div>
    );
} 

export default BalanceGeneral;