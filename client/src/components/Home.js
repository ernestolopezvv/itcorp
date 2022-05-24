import React from "react";
import { useNavigate } from "react-router-dom";
import Typed from "react-typed";



function Home() {
  const history = useNavigate();

  return (
    <div className="home-warper">
      <div className="main-info">
        <h1>Bienvenido a Financh, tu información financiera al momento</h1>
        <Typed
          className="typed-text"
          strings={["Contabilidad", "Reportes", "Estados Financieros", "Estados de resultados", "Balance General"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="/login" className="btn-main-offer"> Iniciar Sesión</a>
      </div>
    </div>





    // <div className="main">
    //   <div className = "titulo"></div>
    //       <div className = "centered-container">
    //         <button onClick={()=> history("/Login")}>Login</button>

    //         <br></br><br></br>
    //       </div>
    //       <div className = "main__text">
    //       <h1>Bienvenido a Financh, tu información financiera al momento</h1>
    //       <p> Ya no hay tiempos de espera ni problemas en acceder a la información que necesitas al momento. No dependas de tu computadora, oficina ni contador. </p>
    //       <p> FlexBPO, te facilita la vida. </p>
    //       </div>
    // </div>
  );
}

export default Home;