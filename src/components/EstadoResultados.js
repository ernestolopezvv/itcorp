import {useNavigate} from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from '../api/axios';

const ESTADO_RESULTDOS_URL = '/EstadoResultados';

const EstadoResultados = () => {

  const history = useNavigate();
  
  const[listaEgresos, setListaEgresos] = useState([]);

  const colNames = [' ','Periodo', '%', 'Acomulado', '%'];


  const getData = async (e) => {

      try{
          const response = await axios.get(ESTADO_RESULTDOS_URL);
            console.log(response.data);
            setListaEgresos(response.data);
        }

         catch (err) {
          console.log(err);

      }
  }

  return(

    <div className="main">
          <div className = "titulo"><h1>Ver Estado de Resultados</h1></div>
          <div className = "centeredContainer">
                <button onClick={()=> history("/menu")}>Regresar a MenÃº Admin</button>        
          </div>

          <div className="Table">
         
          <button onClick={getData} title = "verCuentas"> Generar Estado de Resultados</button>
          {listaEgresos.length > 0 && (
          <table className="table ">
                <thead>
                <tr>
                      {colNames.map((headerItem, uno) => (
                            <th key={uno}>
                            {headerItem.toUpperCase()}
                                </th>
                            ))}
                </tr>
                </thead>
                
                <tbody>
                <td>Ingresos </td>
                <tr>
                  <td>{listaEgresos[0].Nombre1}</td>
                  <td>{listaEgresos[0].Abono_Total1}</td>
                  <td>{listaEgresos[0].PorcentajePi}</td>
                  <td>{listaEgresos[0].Saldo_Total1}</td>
                  <td>{listaEgresos[0].PorcentajeAi}</td>
                </tr>
                </tbody>

                <tbody>
                <td>Egresos </td>
                {Object.values(listaEgresos).map((val, tres) =>(
                      <tr key={tres}>
                            <td> {val.Nombre} </td>
                            <td> {val.Cargo_Cuenta} </td>
                            <td> {val.PorcentajeP} </td>
                            <td> {val.Saldo_Cuenta} </td>
                            <td> {val.PorcentajeA} </td>
                      </tr>
                 ))} </tbody>

                <tbody>
                <td>Total Egresos </td>
                <tr>
                  <td></td>
                  <td>{listaEgresos[0].Saldo_TotalE}</td>
                  <td></td>
                  <td>{listaEgresos[0].Saldo_Totali}</td>
                  <td></td>
                </tr>
                 </tbody>

                <tbody>
                <td>Utilidad </td>
                <tr>
                  <td></td>
                  <td>{listaEgresos[listaEgresos.length-1][0]}</td>
                  <td></td>
                  <td>{listaEgresos[listaEgresos.length-1][1]}</td>
                  <td></td>
                </tr>
                </tbody>
                
          </table>
          
          )}
          

          </div>
    </div>
)


}

export default EstadoResultados;