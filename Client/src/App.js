import React, { useEffect, useState } from "react";
import {Route, Routes, BrowserRouter, NavLink} from "react-router-dom";
import Axios from "axios";
import './index.css';
import FlexLogo from './images/FLEXBPO.jfif';
import Home from './Home';
import MenuAdmin from './MenuAdmin';
import SeleccionarEmpresa from './SeleccionarEmpresa';
import SubirReporte from './SubirReporte';
import RegistrarEmpresa from "./RegistrarEmpresa";
import Registro from './RegUsuario';


function App() {

  // Axios.defaults.withCredentials = true;
  
  // useEffect(()=> {
  //   Axios.get("http://localhost:3001/login").then((response) => {
  //     if (response.data.loggedIn){
  //       // setLoginStatus(response.data.user[0].Usuario);
  //       // setId(response.data.user[0].idCuenta);
  //       // setIdTipoCuenta(response.data.user[0].idTipoCuenta);
  //     }
  //   });
  // }, []);

  return (
    <BrowserRouter>

      <div className="content">
        <div className="header">
          <NavLink to='/'>
            <img className="logo" src={FlexLogo} alt="No se pudo cargar el logo"/> 
            </NavLink>
            <div className ="coronanalysTitle">Financh</div>
        </div>


        <article className="main">
          {/* {loginStatus && <h3>Bienvenido {loginStatus} </h3>}
          <LoginContext.Provider value={{ loginStatus, setLoginStatus }} > */}
            
            <div className="conexiones">
              <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/MenuAdmin" element={<MenuAdmin />}/>
              <Route path="/Registro" element={<Registro />}/>
              <Route path="/SeleccionarEmpresa" element={<SeleccionarEmpresa />}/>
              <Route path="/SubirReporte" element={<SubirReporte />}/>
              <Route path="/RegistrarEmpresa" element={<RegistrarEmpresa />}/>
              

              {/*<idTipoCuentaContext.Provider value = {{idTipoCuenta, setIdTipoCuenta}} >
              <idContext.Provider value = {{id, setId}} >
                <Route path="/login" component={Login}/>
                <Route path="/registro" component={Registro}/>

                <Route path="/menu_usuario" component={MenuUsuario}/>
                <Route path="/menu_cliente" component={MenuCliente}/>
                <Route path="/menu_admin" component={MenuAdmin}/>
                
                <Route path="/datos_personales" component={DatosPersonales}/> 
                <Route path="/encuesta" component={Encuesta}/>
                
                <Route path="/datos" component={Datos}/>
                <Route path="/cuentas_admin" component={CuentasAdmin}/> 
              </ idContext.Provider>
              </ idTipoCuentaContext.Provider> */}

              </Routes>
            </div>

          {/* </ LoginContext.Provider> */}
        </article>

        <footer className="footer">
          <div>Aviso de privacidad</div>
          <p>
            La oficina IT. Corp...
          </p>
        </footer>

      </div> 

    </BrowserRouter>

  );
};

export default App;
