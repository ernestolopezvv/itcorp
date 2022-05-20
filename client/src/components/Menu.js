import React, { useContext } from "react";
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";

/* la funcion useAuth(), regresa un objeto que contiene la sesion del usuario. Ese objeto se encuentra en todas las rutas. Esto es lo que regresa: {id: 1, user: 'A00904052@itesm.mx', pwd: '!aA12345', roles: 5150, accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mb…0MjJ9.ZSQKHOjmaQZcU6SXRDPefqd4xzx_UePjEkJtyvkF2rM'}.

lo que tu quieres es el id, del usuario logeado, dentro de la funcion de cada componente que requieras la informacion tienes de declarar una constante para poder acceder a el, abajo esta el caso de const userLoginInfo = useAuth(), nos regresa el objeto que te comente arriba. 

para accedder al id de usuario seria userLoginInfo.auth.id.
para acceder al usuario seria id.auth.id

*/



function Menu () {
  const history = useNavigate();
  const userLoginInfo = useAuth();
  
  

    return(
        <div className="main">
          <h3>Usuario: {userLoginInfo.auth.user}</h3>
          <h3>id: {userLoginInfo.auth.id}</h3>
          <div className = "titulo"><h1>Menu Principal</h1></div>
          
            <div className = "centeredContainer">
              <button onClick={()=> history("/home")}>Regresar a Home</button>
              <button className="button"onClick={()=> history("/SeleccionarEmpresa")}>Registrar Información</button>
              <button className="button">Generar Reporte</button>
              <button className="button">Administrar usuarios</button>
              <button className="button"onClick={()=> history("/RegistrarEmpresa")}>Agregar Empresa</button>
              <button className="button"onClick={()=> history("/register")}>Registrar Usuario</button>
            </div>
          </div>
    );
} 

export default Menu;