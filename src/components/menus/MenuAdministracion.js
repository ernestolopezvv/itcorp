import React from 'react'
import {useNavigate} from "react-router-dom";

const MenuAdministracion = () => {
    const history = useNavigate();
  return (
    <div className="main">
          <div className = "titulo"><h1>Menu Administración</h1></div>

        <div className = "centeredContainer">
        <button className="button"onClick={()=> history("/administracion/empresas")}>Gestionar Empresas</button>
        <button className="button"onClick={()=> history("/administracion/usuarios")}>Gestionar Usuarios</button>
        <button className="button"onClick={()=> history("/administracion/usuarios-y-empresas")}>Gestionar Acceso de Usuarios a Empresas</button>
        </div>
    </div>
  )
}

export default MenuAdministracion
