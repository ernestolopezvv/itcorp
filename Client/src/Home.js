import React from "react";
// import { useHistory} from "react-router-dom";
import { useNavigate} from "react-router-dom";



function Home() {
  const history = useNavigate();

  return(
      <div className="main">
        <div className = "titulo"></div>
            <div className = "centered-container">
              <button onClick={()=> history("/MenuAdmin")}>Login</button>
              <button> Solicitar Registro?</button>
              <br></br><br></br>
            </div>
            <div className = "main__text">
            <h1>Bienvenido a Financh, tu información financiera al momento</h1>
            <p> Ya no hay tiempos de espera ni problemas en acceder a la información que necesitas al momento. No dependas de tu computadora, oficina ni contador. </p>
            <p> FlexBPO, te facilita la vida. </p>
            </div>
             
      </div>

  );
  }
 
export default Home;