//Menus
import Menu from './components/menus/Menu';
import MenuReporte from './components/menus/MenuReporte';
import MenuAdministracion from './components/menus/MenuAdministracion';


//Admin
import AdminUsers from './components/admin/AdminUsers';
import Register from './components/admin/Register';
import RegistrarEmpresa from './components/admin/RegistrarEmpresa';


//Design
import Layout from './components/design/Layout';


//Reports
import SubirReporte from './components/reports/SubirReporte';
import BalanzaComprobacion from './components/reports/BalanzaComprobacion';
import EstadoResultados from './components/reports/EstadoResultados';
import BalanceGeneral from './components/reports/BalanceGeneral';

//Support
import Missing from './components/support/Missing';
import Unauthorized from './components/support/Unauthorized';
import RequireAuth from './components/support/RequireAuth';

//Base
import Home from './components/Home';
import Login from './components/Login';


import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from './api/axios';
const USERS_URL = '/users';
const COMPANIES_URL = '/companies';



const ROLES = {
  "User": 2001,
  "Admin": 5150
}


function App() {
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);



  useEffect(()=> {
    const fetchUsers = async () => {
      try{
        const response = await axios.get(USERS_URL);
        setUsers(response.data);

      } catch (err){
        if (err.response){

          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }

    }
    fetchUsers();

  },[])

  useEffect(()=> {
    const fetchCompanies = async () => {
      try{
        const response = await axios.get(COMPANIES_URL);
        setCompanies(response.data);

      } catch (err){
        if (err.response){

          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }

    }
    fetchCompanies();

  },[])
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={ <Home />} />

        {/* public routes */}
        <Route path="inicio-sesion" element={<Login />} />
        <Route path="no-autorizado" element={<Unauthorized />} />

        {/* protected routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />} >
          <Route path="administracion/usuarios" element={<Register />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />} >
          <Route path="menu" element={<Menu />} />
          <Route path="reportes" element={<MenuReporte/>} />
          <Route path="reportes/insertar" element={<SubirReporte />} />
          <Route path="reportes/balanza-de-comprobacion" element={<BalanzaComprobacion/>} />
          <Route path="reportes/estado-de-resultados" element={<EstadoResultados/>} />
          <Route path="reportes/balance-general" element={ <BalanceGeneral/>}/>

          <Route path ="administracion" element={<MenuAdministracion/>} />
          <Route path="administracion/empresas" element={<RegistrarEmpresa />} />
          <Route path="administracion/usuarios-y-empresas" element={<AdminUsers titleA ="Seleccionar Usuarios" titleB={"Seleccionar Empresa"} users={users} companies = {companies} multiSelect/>} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />

      </Route>
    </Routes>
    
  );
}

export default App;
