import React from "react";
// import { useHistory} from "react-router-dom";
import { useNavigate} from "react-router-dom";



function Home() {
  const history = useNavigate();

  return(
      <div className="main">
        <div className = "titulo"></div>
            <div className = "centered-container">
              <button onClick={()=> history("/MenuCliente")}>Menu Cliente</button>
              <button>Registro</button>
              <br></br><br></br>
            </div>
            <div className = "main__text">
            <h1>Bienvenido a coronanalyst, donde tú serás el protagonista de una nueva investigación</h1>
            <p> La pandemia del COVID-19 nos ha afectado nuestras vidas de maneras inimaginables, poniendonos en situaciones difíciles en cada día de nuestras vidas. Sabemos lo mucho que nos ha afectado a todos como personas obligándonos a actuar y ser parte de un nuevo cambio. </p>
            <p> Por eso mismo PKGlobal, una empresa de renombre internacional, junto con alumnos del Tecnológico de Monterrey nos hemos unido para realizar una investigación en terminos de Salud, Financiero y Económico para entender mejor los efectos de la pandemia en el ciudadano común y ayudar a empresas a actuar sobre la pandemia de COVID-19 y ofrecer un mejor servicio para usted. </p>
            <p> Lo único que tiene que hacer es participar en nuestra pequeña encuesta y ser parte de las millones de personas siendo parte del cambio y como agradecimiento por su esfuerzo le mostraremos los resultados recopilados hasta la fecha.</p>
            <p> Esperamos con ansias su importantísima atribución a este proyecto y ayudarnos a mejorar la vida de millones de personas. </p></div>
             
      </div>

  );
  }
 
export default Home;