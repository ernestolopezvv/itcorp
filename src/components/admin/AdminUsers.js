import React, { useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import Select from "react-select";
import ReadOnlyRow from "../support/ReadOnlyRow";

const REGISTER_USER_COMPANY_URL = "/adminUsers";
const RELATION_USER_COMPANY_URL = "/companies/relationUserCompanyData";
const DELETE_RELATION_URL = "/deleteRelation";

const AdminUsers = ({
  titleA,
  titleB,
  users = [],
  companies = [],
  multiSelect = false,
}) => {
  const history = useNavigate();
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [relationUserCompanyData, setRelationUserCompanyData] = useState([]);

  //

  const [userSelectedOption, setUserSelectedOption] = useState("");
  const [companySelectedOption, setCompanySelectedOption] = useState("");
  const [deletRow, setDeleteRow] = useState([]);
  console.log(deletRow);

  const handleSendInfo = async (event) => {
    event.preventDefault();

    console.log("Teste forceUpdate");

    console.log(
      `Test ${userSelectedOption.UserId} y ${companySelectedOption.ID_Empresa}`
    );
    const userId = userSelectedOption.UserId;
    const companyId = companySelectedOption.ID_Empresa;
    // // Back End!
    try {
      const response = await axios.post(REGISTER_USER_COMPANY_URL, {
        userId,
        companyId,
      });

      setSuccess(true);
    } catch (err) {
      console.log(err);
      if (!err.response.status) {
        setErrMsg("No server Response");
      } else if (err.response.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };

  useEffect(() => {
    const handleRelationUserCompanyData = async () => {
      try {
        const response = await axios.get(RELATION_USER_COMPANY_URL);
        setRelationUserCompanyData(response.data.recordset);
        console.log(response.data.recordset);
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
    handleRelationUserCompanyData();
  }, []);

  const userHandleOnChange = (Obj) => {
    setUserSelectedOption(Obj);
  };

  const companyHandleOnChange = (Obj) => {
    setCompanySelectedOption(Obj);
  };

  const handleDeleteClick = async (event, object) => {
    event.preventDefault();

    try {
      setDeleteRow([object.UserId, object.ID_Empresa]);
      const userId = object.UserId;
      const companyId = object.ID_Empresa;
      console.log(userId, companyId);

      const response = await axios.post(DELETE_RELATION_URL, {
        userId,
        companyId,
      });
    } catch (err) {
      console.log(err);
      if (!err.response.status) {
        setErrMsg("No server Response");
      } else if (err.response.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  };

  return (
    <div className="menubox">
      <div className="sub-menubox3">
        <div>
          <h2> Agregar Acceso </h2>

          <div className="menu-button>">
            <button
              className="button3"
              onClick={() => history("/administracion")}
            >
              Regresar a Menú Administracion
            </button>
          </div>

          <div className="menu-button">
            <Select
              defaultInputValue={userSelectedOption}
              placeholder="Seleccionar Usuario"
              isClearable={true}
              onChange={userHandleOnChange}
              options={users}
              getOptionLabel={(option) => option.User}
            />
          </div>

          <div className="menu-button">
            <Select
              defaultInputValue={companySelectedOption}
              placeholder="Seleccionar Empresa"
              isClearable={true}
              onChange={companyHandleOnChange}
              options={companies}
              getOptionLabel={(option) => option.Nombre}
            />
          </div>
          <div className="menu-button">
            <button className="button3" onClick={handleSendInfo}>
              Agregar
            </button>
          </div>
          <div className="menu-button">
            <div className="scroll-list2">
              <table>
                <thead>
                  <tr>
                    <th>Usuario</th>
                    <th>Empresa</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {relationUserCompanyData.map((object) => (
                    <ReadOnlyRow
                      object={object}
                      handleDeleteClick={handleDeleteClick}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
