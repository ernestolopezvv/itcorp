import Axios  from "axios";
import React, { useState } from "react";
// import FormData from "form-data";
import {useNavigate} from "react-router-dom";


function SubirReporte () {

    // a local state to store the currently selected file.
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [selectedFileMov, setSelectedFileMov] = React.useState(null);

  
    const handleSubmit = (event) => {
      event.preventDefault()

      const form = new FormData();
      form.append("file", selectedFile);
      
      console.log(selectedFile);
      try {
        const response = Axios.post( "http://localhost:3001/api/xlsx", form, {
        });
      } catch(error) {
        console.log(error)
      };
    }
  
    const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0])
    }

    // Movimientos

    const handleSubmitMov = (event) => {
      event.preventDefault()

      const form = new FormData();
      form.append("file", selectedFileMov);
      
      console.log(selectedFileMov);
      try {
        const response = Axios.post( "http://localhost:3001/api/movimientos", form, {
        });
      } catch(error) {
        console.log(error)
      };
    }
  
    const handleFileSelectMov = (event) => {
      setSelectedFileMov(event.target.files[0])
    }

  const history = useNavigate();

    return(
        <div className="main">
          <div className = "titulo"><h1>Subir Reporte</h1></div>
            <div className = "centeredContainer">
              <button onClick={()=> history("/SeleccionarEmpresa")}>Regresar a Seleccionar empresa</button>
              <br/>
              <input type="file" onChange={handleFileSelect}/>

              
              <form onSubmit={handleSubmit}> <br/>
              <input type="submit" value="Subir Cuentas" />
              </form>
              <br/>
              <input type="file" onChange={handleFileSelectMov}/>

              
              <form onSubmit={handleSubmitMov}> <br/>
              <input type="submit" value="Subir Movimientos" />
              </form>

            </div>
          </div>

    );
} 

export default SubirReporte;