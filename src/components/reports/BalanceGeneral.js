import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "../../api/axios";
import Select from "react-select";
import useAuth from "../../hooks/useAuth";

const USER_COMPANIES_URL = "/companies/accessCompanies";
const BALANCE_GENERAL_URL = "/balancegeneral";

const BalanceGeneral = () => {
  const history = useNavigate();

  const [listTotales, setListTotales] = useState([]);
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const sectionName = [" "];
  const [fechaInicioComp, setFechaInicioComp] = useState("");
  const [fechaFinalComp, setFechaFinalComp] = useState("");

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
      const response = await axios.post(BALANCE_GENERAL_URL, {
        fechaI,
        fechaF,
        idEmpresa,
      });
      console.log(fechaI);
      console.log(fechaF);
      setListTotales(response.data);
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
          <h1>Balance General</h1>
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
              Generar Balance
            </button>
          </div>

          <div className="menu-button">
            <button className="button3" onClick={createPDF}>
              Descargar en PDF
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="Balance">
          {listTotales.map((aux, cont) => {
            return (
              <table align="center" id="Table">
                <tr height={700}>
                  <td>
                    <table>
                      {" "}
                      <div>
                        <thead>
                          <th width={250}>{aux.balance[0].seccion} </th>
                        </thead>
                        {aux.balance[0].contenido.map((val, i) => {
                          return (
                            <div key={i}>
                              <thead>
                                {" "}
                                <tr>
                                  <td align="left">
                                    {" "}
                                    {"\xa0\xa0\xa0"}
                                    {val.tipo}{" "}
                                  </td>
                                  <td> </td>
                                </tr>
                              </thead>
                              <tbody>
                                {Object.values(val.datos).map((value, j) => {
                                  return (
                                    <tr key={j}>
                                      <td align="left" width={300}>
                                        {value.nombre}{" "}
                                      </td>
                                      <td align="right" width={100}>
                                        {" "}
                                        {Intl.NumberFormat("en-US").format(
                                          value.saldo.toFixed(2)
                                        )}{" "}
                                      </td>
                                    </tr>
                                  );
                                })}
                                <br></br>
                                <tr>
                                  <td width={300} align="left">
                                    {" "}
                                    {"\xa0\xa0\xa0 Total"} {val.tipo}
                                  </td>
                                  <td align="right" width={100}>
                                    {" "}
                                    {Intl.NumberFormat("en-US").format(
                                      val.totalTipo.toFixed(2)
                                    )}
                                  </td>
                                </tr>
                                <br></br> <br></br> <br></br>
                              </tbody>
                            </div>
                          );
                        })}
                        <tbody>
                          <tr>
                            <th width={300}>
                              {" "}
                              SUMA DEL {aux.balance[0].seccion}
                            </th>
                            <td align="right" width={100}>
                              {" "}
                              {Intl.NumberFormat("en-US").format(
                                listTotales[0].balance[0].total.toFixed(2)
                              )}{" "}
                            </td>
                          </tr>
                        </tbody>
                      </div>
                    </table>
                  </td>

                  <td>
                    <tr height={400}>
                      {" "}
                      <td>
                        <table>
                          {" "}
                          <div>
                            <thead>
                              <th width={250}>{aux.balance[1].seccion} </th>
                            </thead>
                            {aux.balance[1].contenido.map((val, i) => {
                              return (
                                <div key={i}>
                                  <thead>
                                    {" "}
                                    <tr>
                                      <td align="left">
                                        {" "}
                                        {"\xa0\xa0\xa0"}
                                        {val.tipo}{" "}
                                      </td>
                                      <td> </td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {Object.values(val.datos).map(
                                      (value, j) => {
                                        return (
                                          <tr key={j}>
                                            <td align="left" width={300}>
                                              {value.nombre}{" "}
                                            </td>
                                            <td align="right" width={100}>
                                              {" "}
                                              {Intl.NumberFormat(
                                                "en-US"
                                              ).format(
                                                value.saldo.toFixed(2)
                                              )}{" "}
                                            </td>
                                          </tr>
                                        );
                                      }
                                    )}
                                    <br></br>
                                    <tr>
                                      <td width={300} align="left">
                                        {" "}
                                        {"\xa0\xa0\xa0 Total"} {val.tipo}
                                      </td>
                                      <td align="right" width={100}>
                                        {" "}
                                        {Intl.NumberFormat("en-US").format(
                                          val.totalTipo.toFixed(2)
                                        )}
                                      </td>
                                    </tr>
                                    <br></br>
                                  </tbody>
                                </div>
                              );
                            })}
                            <tbody>
                              <tr height>
                                <th width={300}>
                                  {" "}
                                  SUMA DEL {aux.balance[1].seccion}
                                </th>
                                <td align="right" width={100}>
                                  {" "}
                                  {Intl.NumberFormat("en-US").format(
                                    aux.balance[1].total.toFixed(2)
                                  )}{" "}
                                </td>
                              </tr>
                            </tbody>
                          </div>
                        </table>
                      </td>{" "}
                    </tr>

                    <tr height={300}>
                      {" "}
                      <td>
                        <table>
                          {" "}
                          <div>
                            <thead>
                              <th width={250}>{aux.balance[2].seccion} </th>
                            </thead>
                            {aux.balance[2].contenido.map((val, i) => {
                              return (
                                <div key={i}>
                                  <thead>
                                    {" "}
                                    <tr>
                                      <td align="left">
                                        {" "}
                                        {"\xa0\xa0\xa0"}
                                        {val.tipo}{" "}
                                      </td>
                                      <td> </td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {Object.values(val.datos).map(
                                      (value, j) => {
                                        return (
                                          <tr key={j}>
                                            <td align="left" width={300}>
                                              {value.nombre}{" "}
                                            </td>
                                            <td align="right" width={100}>
                                              {" "}
                                              {Intl.NumberFormat(
                                                "en-US"
                                              ).format(value.saldo)}{" "}
                                            </td>
                                          </tr>
                                        );
                                      }
                                    )}
                                    <br></br>
                                    <tr>
                                      <td width={300} align="left">
                                        {" "}
                                        {"\xa0\xa0\xa0 Total"} {val.tipo}
                                      </td>
                                      <td align="right" width={100}>
                                        {" "}
                                        {Intl.NumberFormat("en-US").format(
                                          val.totalTipo.toFixed(2)
                                        )}
                                      </td>
                                    </tr>
                                    <br></br>
                                    <tr>
                                      <td align="left">
                                        {" "}
                                        Utilidad o Pérdida del Ejercicio
                                      </td>
                                      <td align="right">
                                        {" "}
                                        {Intl.NumberFormat("en-US").format(
                                          aux.balance[2].resultados
                                        )}{" "}
                                      </td>
                                    </tr>
                                    <br></br>
                                  </tbody>
                                </div>
                              );
                            })}
                            <tbody>
                              <tr>
                                <th width={300}>
                                  {" "}
                                  SUMA DEL {aux.balance[2].seccion}
                                </th>
                                <td align="right" width={100}>
                                  {" "}
                                  {Intl.NumberFormat("en-US").format(
                                    aux.balance[2].total +
                                      aux.balance[2].resultados
                                  )}{" "}
                                </td>
                              </tr>
                              <br></br>
                              <tr>
                                <th width={200}>
                                  {" "}
                                  SUMA DEL {aux.balance[1].seccion} y{" "}
                                  {aux.balance[2].seccion}
                                </th>
                                <td align="right" width={50}>
                                  {" "}
                                  {Intl.NumberFormat("en-US").format(
                                    (
                                      aux.balance[1].total +
                                      aux.balance[2].total +
                                      aux.balance[2].resultados
                                    ).toFixed(2)
                                  )}{" "}
                                </td>
                              </tr>
                            </tbody>
                          </div>
                        </table>
                      </td>{" "}
                    </tr>
                  </td>
                </tr>
              </table>
            );
          })}
        </div>
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

export default BalanceGeneral;
