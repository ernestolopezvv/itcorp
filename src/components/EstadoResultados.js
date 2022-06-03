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
                <button onClick={()=> history("/menu")}>Regresar a Menú Admin</button>
          </div>

          <div className="Table">

          <button onClick={getData} title = "verCuentas"> Generar Estado de Resultados</button>
          {listaEgresos.length > 0 && (
          <table className="table ">
                <thead>
                <tr>
                      {colNames.map((headerItem, index) => (
                            <th key={index}>
                            {headerItem.toUpperCase()}
                                </th>
                            ))}
                </tr>
                </thead>

                <tbody>
                {Object.values(listaEgresos).map((val, index) =>(
                      <tr key={index}>
                            <td> {val.Nombre1} </td>
                            <td> {val.Abono_Total1} </td>
                            <td> {val.PorcentajePi} </td>
                            <td> {val.Saldo_Total1} </td>
                            <td> {val.PorcentajeAi} </td>
                      </tr>
                 ))} </tbody>

                <tbody>
                {Object.values(listaEgresos).map((val, index) =>(
                      <tr key={index}>
                            <td> {val.Nombre} </td>
                            <td> {val.Cargo_Cuenta} </td>
                            <td> {val.PorcentajeP} </td>
                            <td> {val.Saldo_Cuenta} </td>
                            <td> {val.PorcentajeA} </td>
                      </tr>
                 ))} </tbody>

                <tbody>
                <td>Total Egresos </td>
                {Object.values(listaEgresos).map((val, index) =>(
                      <tr key={index}>
                            <td> {val.Saldo_TotalE} </td>
                            <td> {val.Saldo_Totali} </td>
                      </tr>
                 ))} </tbody>

                <tbody>
                <td>Utilidad </td>
                {Object.values(listaEgresos).map((val, index) =>(
                      <tr key={index}>
                            <td> {val[0]} </td>
                            <td> {val[1]} </td>
                      </tr>
                 ))} </tbody>

          </table>

          )}


          </div>
    </div>
)


}

export default EstadoResultados;