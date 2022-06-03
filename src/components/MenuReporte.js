import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";

function MenuReporte () {
  const history = useNavigate();


    return(
        <div className="mainReportes">
          <div className = "titulo"><h1>Seleccionar reporte</h1></div>
            <div className = "centeredContainer">
              <button onClick={()=> history("/Menu")}>Regresar a Home</button>
              <button className="button"onClick={()=> history("/BalanceGeneral")}>Balance General</button>
              <button className="button"onClick={()=> history("/EstadoResultados")}>Estado de Resultados</button>
              <button className="button"onClick={()=> history("/BalanzaComprobacion")}>Balanza ComprobaciÃ³n</button>
            </div>
          </div>
    );
} 

export default MenuReporte;