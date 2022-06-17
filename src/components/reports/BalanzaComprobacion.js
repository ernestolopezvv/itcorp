import { useNavigate } from "react-router-dom";
import { useState, Component, useEffect } from "react";
import axios from "../../api/axios";
import Select from "react-select";
import useAuth from "../../hooks/useAuth";
//import '/Users/ernestolopezvv/Documents/itcorp/itcorp/src/Reporte.css';

const USER_COMPANIES_URL = "/companies/accessCompanies";
const BALANZA_DE_COMPROBACION_URL = "/balanzaComprobacion";

const BalanzaComprobacion = () => {
  const history = useNavigate();

  const [listCuentas, setListCuentas] = useState([]);
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const sectionName = [" "];
  const [fechaInicioComp, setFechaInicioComp] = useState("");
  const [fechaFinalComp, setFechaFinalComp] = useState("");

  const colNames = [
    "Codigo",
    "Nombre",
    "Saldos Iniciales",
    "Cargo",
    "Abono",
    "Saldos Actuales",
  ];
  const subNames = [
    " ",
    "  ",
    "Deudor \xa0\xa0\xa0 Acreedor",
    " ",
    " ",
    "Deudor \xa0\xa0\xa0 Acreedor",
  ];

  // Select Company
  const [companies, setCompanies] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  // Variables respecto a los ids de la sesión para su manejo dentro de las funciones
  const userLoginInfo = useAuth();
  const userInfo = userLoginInfo.auth;
  const idEmpresa = selectedOption.ID_Empresa;

  const getData = async (e) => {
    const fechaI = fechaInicio;
    const fechaF = fechaFinal;

    try {
      const response = await axios.post(BALANZA_DE_COMPROBACION_URL, {
        fechaI,
        fechaF,
        idEmpresa,
      });
      console.log(fechaI);
      console.log(fechaF);
      setListCuentas(response.data);
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
          <h1>Balanza de comprobación</h1>
          <div className="menu-button>">
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
              Generar Balanza
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
        {listCuentas.length > 0 && (
          <table>
            <thead>
              <tr>
                {colNames.map((headerItem, index) => (
                  <th key={index}>{headerItem.toUpperCase()}</th>
                ))}
              </tr>
              <tr>
                {subNames.map((headerItem, index) => (
                  <th key={index}>{headerItem.toUpperCase()}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {Object.values(listCuentas).map((val, index) => (
                <tr key={index}>
                  <td> {val.Codigo} </td>
                  <td> {val.Nombre} </td>
                  <td>
                    <div className="left">{val.DeudoraInicial} </div>
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
                <td> </td>
                <td>Total cuentas no impresas </td>
                <td>
                  <div className="left">0 </div>
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
                <td> </td>
                <td> Sumas iguales </td>
                <td>
                  <div className="left">1629749.75 </div>
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

export default BalanzaComprobacion;
