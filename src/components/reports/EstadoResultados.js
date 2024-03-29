import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useRef, useState, useEffect } from "react";
import axios from "../../api/axios";
import { AgGridReact } from "ag-grid-react";
import useAuth from "../../hooks/useAuth";

const USER_COMPANIES_URL = "companies/accessCompanies";
const ESTADO_RESULTDOS_URL = "EstadoResultados";

const EstadoResultados = () => {
  const history = useNavigate();

  const [listaEgresos, setListaEgresos] = useState([]);

  //const [gridApi, setGridApi] = useState()
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const sectionName = [" "];
  const [fechaInicioComp, setFechaInicioComp] = useState("");
  const [fechaFinalComp, setFechaFinalComp] = useState("");

  const colNames = [" ", "Periodo", "%", "Acomulado", "%"];

  // Select Company
  const [companies, setCompanies] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  // Variables respecto a los ids de la sesiÃ³n para su manejo dentro de las funciones
  const userLoginInfo = useAuth();
  const userInfo = userLoginInfo.auth;
  const idEmpresa = selectedOption.ID_Empresa;

  const getData = async (e) => {
    const fechaI = fechaInicio;
    const fechaF = fechaFinal;

    try {
      const response = await axios.post(ESTADO_RESULTDOS_URL, {
        fechaI,
        fechaF,
        idEmpresa,
      });
      console.log(fechaI);
      console.log(fechaF);
      return setListaEgresos(response.data);
    } catch (err) {
      console.log(err);
    }
  };

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
    };
    fetchCompanies();
  }, []);

  const handleOnChange = (Obj) => {
    setSelectedOption(Obj);
  };

  const handleOnChangeFechaInicio = (Obj) => {
    setFechaInicio(Obj.target.value);
    setFechaInicioComp(true);
  };

  const handleOnChangeFechaFinal = (Obj) => {
    setFechaFinal(Obj.target.value);
    setFechaFinalComp(true);
  };

  return (
    <div className="menubox">
      <div className="sub-menubox2">
        <div>
          <h1>Ver Estado de Resultados</h1>

          <div className="menu-button">
            <button className="button3" onClick={() => history("/reportes")}>
              Regresar a Menú Reporte
            </button>
          </div>

          <div className="menu-button">
            <Select
              defaultInputValue={selectedOption}
              onChange={handleOnChange}
              options={companies}
              getOptionLabel={(option) => option.Nombre}
            />
          </div>

          <div className="menu-button">
            From :{" "}
            <input
              type="date"
              value={fechaInicio}
              onChange={handleOnChangeFechaInicio}
            />
            To :{" "}
            <input
              type="date"
              value={fechaFinal}
              onChange={handleOnChangeFechaFinal}
            />
          </div>

          <div className="menu-button">
            <button
              className="button3"
              onClick={getData}
              disabled={
                selectedOption === ""
                  ? true
                  : false || fechaInicioComp !== true || fechaFinalComp !== true
              }
            >
              Generar Estado de Resultados
            </button>
          </div>

          <div className="menu-button">
            <button className="button3" onClick={createPDF}>
              Descargar en PDF
            </button>
          </div>
        </div>
      </div>
      <div id="Table">
        {listaEgresos.length > 0 && (
          <table>
            <thead>
              <tr>
                {colNames.map((headerItem, uno) => (
                  <th key={uno}>{headerItem.toUpperCase()}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              <td>Ingresos </td>
              <tr>
                <td>{listaEgresos[0].Nombre1}</td>
                <td>
                  {listaEgresos[0].Abono_Total1}{" "}
                  {listaEgresos[0].Abono_Total1 ? "" : "0"}
                </td>
                <td>{listaEgresos[0].PorcentajePi}</td>
                <td>
                  {listaEgresos[0].Saldo_Total1}{" "}
                  {listaEgresos[0].Saldo_Total1 ? "" : "0"}
                </td>
                <td>{listaEgresos[0].PorcentajeAi}</td>
              </tr>
            </tbody>

            <tbody>
              <td>Egresos </td>
              {Object.values(listaEgresos).map((val, tres) => (
                <tr key={tres}>
                  <td> {val.Nombre} </td>
                  <td> {val.Cargo_Cuenta} </td>
                  <td> {val.PorcentajeP} </td>
                  <td> {val.Saldo_Cuenta} </td>
                  <td> {val.PorcentajeA} </td>
                </tr>
              ))}{" "}
            </tbody>

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
                <td>{listaEgresos[listaEgresos.length - 1][0]}</td>
                <td></td>
                <td>{listaEgresos[listaEgresos.length - 1][1]}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );

  function createPDF() {
    var sTable = document.getElementById("Table").innerHTML;

    var style = "<style>";
    style = style + "table {width: 100%;font: 10px Calibri;}";
    style =
      style +
      "table, th, td {border: solid 2px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + ".left{text-align:left};.right{text-align:right};";
    style = style + "</style>";

    // CREATE A WINDOW OBJECT.
    var win = window.open("", "", "height=700,width=700");

    win.document.write(style); // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write("</head>");
    win.document.write(sTable); // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write("</body></html>");

    win.document.close(); // CLOSE THE CURRENT WINDOW.

    win.print(); // PRINT THE CONTENTS.
  }
};

export default EstadoResultados;
