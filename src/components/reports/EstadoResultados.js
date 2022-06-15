import {useNavigate} from "react-router-dom";
import Select from 'react-select';
import { useRef, useState, useEffect } from "react";
import axios from '../../api/axios';
import { AgGridReact } from 'ag-grid-react';
import useAuth from "../../hooks/useAuth";

const USER_COMPANIES_URL = 'companies/accessCompanies';
const ESTADO_RESULTDOS_URL = 'EstadoResultados';


const EstadoResultados = () => {

  const history = useNavigate();
  
  const[listaEgresos, setListaEgresos] = useState([]);

  //const [gridApi, setGridApi] = useState()
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFinal, setFechaFinal] = useState('');
  const sectionName = [' '];
  const [fechaInicioComp, setFechaInicioComp] = useState('');
  const [fechaFinalComp, setFechaFinalComp] = useState('');

  const colNames = [' ','Periodo', '%', 'Acomulado', '%'];

  // Select Company
  const [companies, setCompanies] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  // Variables respecto a los ids de la sesiÃ³n para su manejo dentro de las funciones
  const userLoginInfo = useAuth();
  const userInfo = userLoginInfo.auth;
  const idEmpresa = selectedOption.ID_Empresa;

  
  const getData = async (e) => {

      const fechaI = fechaInicio
      const fechaF = fechaFinal
      
      try{

          const response = await axios.post(ESTADO_RESULTDOS_URL, {fechaI, fechaF, idEmpresa});
            console.log(fechaI);
            console.log(fechaF);
            return setListaEgresos(response.data);
        }

         catch (err) {
          console.log(err);

      }
  }

  useEffect(() => {
    const fetchCompanies = async () => {
      try {

        const response = await axios.post(USER_COMPANIES_URL, userInfo);
        setCompanies(response.data);

      } catch (err) {
        if (err.response) {

          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }

    }
    fetchCompanies();

  }, [])

  const handleOnChange = Obj => {
    setSelectedOption(Obj);

  }

  const handleOnChangeFechaInicio = Obj => {
    setFechaInicio(Obj.target.value);
    setFechaInicioComp(true);
  }

  const handleOnChangeFechaFinal = Obj => {
    setFechaFinal(Obj.target.value);
    setFechaFinalComp(true);
  }



  return(

    <div className="main">
          <div className = "titulo"><h1>Ver Estado de Resultados</h1></div>
          <div className = "centeredContainer">
                <button onClick={()=> history("/menu")}>Regresar al menu</button>        
          </div>

          <div className="Table">

          <Select defaultInputValue={selectedOption}
            onChange={handleOnChange}
            options={companies}
            getOptionLabel={option => option.Nombre} />

          <div className="ag-theme-alpine" style={{ height: 400 }}>
            From : <input type="date" value={fechaInicio} onChange={handleOnChangeFechaInicio} />
            To : <input type="date" value={fechaFinal} onChange={handleOnChangeFechaFinal} />
            </div>
            
          <div className="ReporteResultados">

          <button onClick={getData} 
              disabled={selectedOption === '' ? true : false
              || fechaInicioComp !== true
              || fechaFinalComp !== true}> Generar Estado de Resultados </button>

          
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
                  <td>{listaEgresos[0].Abono_Total1} {listaEgresos[0].Abono_Total1 ? '' : '0'}</td>
                  <td>{listaEgresos[0].PorcentajePi}</td>
                  <td>{listaEgresos[0].Saldo_Total1} {listaEgresos[0].Saldo_Total1 ? '' : '0'}</td>
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
          
    </div>

)


}


export default EstadoResultados;