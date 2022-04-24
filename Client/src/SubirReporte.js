import Axios  from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

function SubirReporte () {

  const [archivo, setArchivo] = useState("");

  const subirArchivo = () => {
    console.log(archivo);
    Axios.post("http://localhost:3001/api/xlsx", {
  })
};

  // handleFile(e) 
  // {
  //   console.log(e.target.files, "$$$$");

  // };
 
    // a local state to store the currently selected file.
    const [selectedFile, setSelectedFile] = React.useState(null);
  
    const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData();
      formData.append("selectedFile", selectedFile);
      console.log(selectedFile);
      console.log(selectedFile.data);
      console.log(formData);
      try {
        const response = Axios({
          method: "post",
          url: "http://localhost:3001/api/xlsx",
          data: selectedFile,
          headers: { "Content-Type": "multipart/form-data" },
          // headers: { "Nivel": "", "  C ó d i g o": "", "N o m b r e": "", "T i p o": "" },

        });
      } catch(error) {
        console.log(error)
      }
    }
  
    const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0])
    }

  const history = useNavigate();


    return(
        // <div className="main">
        //   <div className = "titulo"><h1>Subir Reporte</h1></div>
        //     <div className = "centeredContainer">
        //       <button onClick={()=> history("/SeleccionarEmpresa")}>Regresar a Seleccionar empresa</button>
        //       <input type="file" name="file" onChange={(event)=> {setArchivo(event.target.value)}} />
        //       <script> 
        //         function log_console() {
        //           console.log(archivo)
        //         }
        //       </script>
        //       {/* <input type="file" name="file" onChange={(e)=>this.onChange(e)} /> */}
        //       {/* <input type="file" name="file" onChange={(e)=>this.handleFile(e)} /> */}
        //       <button className="button" onClick={subirArchivo}>Subir Reporte</button>
        //     </div>
        //   </div>

        <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileSelect}/>
        <input type="submit" value="Upload File" />
      </form>
    );
} 

export default SubirReporte;