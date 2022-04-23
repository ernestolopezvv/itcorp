import React, { useEffect, useState } from "react";
import {Route, Routes, BrowserRouter, NavLink} from "react-router-dom";
import Axios from "axios";
//import './App.css';
import './index.css';
import Home from "./Home";
import MenuCliente from "./MenuCliente";


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
          <NavLink exact to="/">
            {/* <img className="logo" src={pkglobal} alt="No se pudo cargar el logo"/>  */}</NavLink>
            <div className ="coronanalysTitle">Financh</div>
        </div>


        <article className="main">
          {/* {loginStatus && <h3>Bienvenido {loginStatus} </h3>}
          <LoginContext.Provider value={{ loginStatus, setLoginStatus }} > */}
            
            <div className="conexiones">
              <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/MenuCliente" element={<MenuCliente />}/>

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
            La oficina IT. Corp recopila datos como correo electrónico... 
          </p>
        </footer>

      </div> 

    </BrowserRouter>

  );
};

export default App;
