import axios from '../api/axios';
import Select from 'react-select';
import Axios from '../api/axios';
import React, { useState, useEffect } from "react";
// import FormData from "form-data";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const USER_COMPANIES_URL = '/companies/accessCompanies';


function SubirReporte() {

  // a local state to store the currently selected file.
  const [selectedAccountFile, setSelectedAccountFile] = React.useState(null);
  const [selectedMoveFile, setSelectedMoveFile] = React.useState(null);

  // Variable para verificar la extensión del archivo en caso de cambio antes de publicar
  const [selectedAccountFileExt, setSelectedAccountFileExt] = React.useState(null);
  const [selectedMoveFileExt, setSelectedMoveFileExt] = React.useState(null);



  // Select Company
  const [companies, setCompanies] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  //console.log(selectedOption);

  // Variables respecto a los ids de la sesión para su manejo dentro de las funciones
  const userLoginInfo = useAuth();
  const userInfo = userLoginInfo.auth;
  const idUsuario = userLoginInfo.auth.id;
  const idEmpresa = selectedOption.ID_Empresa;
  //console.log(`Id Usuario : ${idUsuario} Id Empresa ${idEmpresa}`);



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

  // Cuentas
  const handleAccountFile = (event) => {

    var file = event.target.files[0];
    //Verificación de si se canceló la operación
    if ( file === undefined)
    {
      setSelectedAccountFileExt(false);
      alert("Por favor seleccione un archivo");
    }
    else
    {
      var validExts = [".xlsx", ".csv"];
      var fileName = file.name;
      fileName = fileName.substring(fileName.lastIndexOf('.'));

      // Verificación por si el archivo no coindice con las extensiones permitidas
      if (validExts.indexOf(fileName) < 0) 
      {
        setSelectedAccountFileExt(false);
        alert("El archivo seleccionado es inválido, inserte un archivo de tipo " + validExts.toString());
      }
      // Operación exitosa en caso de que el archivo cumpla con las condiciones
      else
      {
        setSelectedAccountFile(file);
        setSelectedAccountFileExt(true);
      }
    }
  }

  const handleAccountSubmit = (event) => {
    event.preventDefault()

    const form = new FormData();
    form.append("file", selectedAccountFile);
    form.append('idUsuario', idUsuario);
    form.append('idEmpresa', idEmpresa);

    console.log(selectedAccountFile);
    try {
      const response = Axios.post("http://localhost:3001/subirCuentas", form, {
      });
    } catch (error) {
      console.log(error)
    };
  }



  // Movimientos
  const handleMoveFile = (event) => {

    var file = event.target.files[0];
    //Verificación de si se canceló la operación
    if ( file === undefined)
    {
      setSelectedMoveFileExt(false);
      alert("Por favor seleccione un archivo");
    }
    else
    {
      var validExts = [".xlsx", ".csv"];
      var fileName = file.name;
      fileName = fileName.substring(fileName.lastIndexOf('.'));

      // Verificación por si el archivo no coindice con las extensiones permitidas
      if (validExts.indexOf(fileName) < 0) 
      {
        setSelectedMoveFileExt(false);
        alert("El archivo seleccionado es inválido, inserte un archivo de tipo " + validExts.toString());
      }
      // Operación exitosa en caso de que el archivo cumpla con las condiciones
      else
      {
        setSelectedMoveFile(file);
        setSelectedMoveFileExt(true);
      }
    }
  }

  const handleMoveSubmit = (event) => {

    event.preventDefault()
    const form = new FormData();
    form.append("file", selectedMoveFile);
    form.append('idEmpresa', idEmpresa);

    console.log(selectedMoveFile);
    try {
      const response = Axios.post("http://localhost:3001/subirMovimientos", form, {
      });
    } catch (error) {
      console.log(error)
    };
  }


  const history = useNavigate();

  return (
    <div className="main">
      <div className="titulo"><h1>Subir Reporte</h1></div>
      <h3> Seleccionar Empresa</h3>
      <Select defaultInputValue={selectedOption}
        onChange={handleOnChange}
        options={companies}
        getOptionLabel={option => option.Nombre}


      />

      <div className="centeredContainer">

      <input type="file" accept=".xlsx,.csv"  onChange={handleAccountFile} />
        <form onSubmit={handleAccountSubmit}> <br />
          <button disabled={selectedOption === '' ? true : false || selectedAccountFileExt !== true} >Subir Cuentas</button>
        </form>
        <br />

        <input type="file" accept=".xlsx,.csv" onChange={handleMoveFile} />
        <form onSubmit={handleMoveSubmit}> <br />
          <button disabled={selectedOption === '' ? true : false || selectedMoveFileExt !== true} >Subir Movimientos</button>

        </form>
      </div>
    </div>

  );
}

export default SubirReporte;