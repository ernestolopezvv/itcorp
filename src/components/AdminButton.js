import React from 'react'
import {useNavigate} from "react-router-dom";

const AdminButton = () => {
    const history = useNavigate();
  return (
    <div>
        <button className="button"onClick={()=> history("/RegistrarEmpresa")}>Agregar Empresa</button>
        <button className="button"onClick={()=> history("/register")}>Registrar Usuario</button>
        <button className="button">Administrar usuarios</button>
    </div>
  )
}

export default AdminButton
