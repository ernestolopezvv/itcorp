import Axios  from "axios";
import React, { useState } from "react";
// import FormData from "form-data";
import {useNavigate} from "react-router-dom";


function SubirReporte () {

  const [archivo, setArchivo] = useState("");


//   const subirArchivo = () => {
//     console.log(archivo);
//     Axios.post("http://localhost:3001/api/xlsx", {
//   })
// };

  // handleFile(e) 
  // {
  //   console.log(e.target.files, "$$$$");

  // };
 
    // a local state to store the currently selected file.
    const [selectedFile, setSelectedFile] = React.useState(null);

  
    const handleSubmit = (event) => {
      event.preventDefault()

      const form = new FormData();
      form.append("file", selectedFile);
      
      console.log(selectedFile);
      try {
        const response = Axios.post( "http://localhost:3001/api/xlsx", form, {
      //     // data: selectedFile,
      //     headers: { "Content-Type": "multipart/form-data" },
      //     // headers: { "Nivel": "", "  C ó d i g o": "", "N o m b r e": "", "T i p o": "" },

        });
      } catch(error) {
        console.log(error)
      };
    }
  
    const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0])
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
              <input type="submit" value="Subir Reporte" />
              </form>

            </div>
          </div>

    );
} 

export default SubirReporte;