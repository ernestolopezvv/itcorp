import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import Menu from './components/Menu';
import RegistrarEmpresa from './components/RegistrarEmpresa';
import SeleccionarEmpresa from './components/SeleccionarEmpresa';
import SubirReporte from './components/SubirReporte';
import Layout from './components/Layout';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import RequireAuth from './components/RequireAuth';
import BalanzaComprobacion from './components/BalanzaComprobacion';
import MenuReporte from './components/MenuReporte';
import EstadoResultados from './components/EstadoResultados';
import BalanceGeneral from './components/BalanceGeneral';
import { Routes, Route } from 'react-router-dom';
import AdminUsers from './components/AdminUsers';
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
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />} >
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />} >
          <Route path="menu" element={<Menu />} />
          <Route path="registrarEmpresa" element={<RegistrarEmpresa />} />
          <Route path="seleccionarEmpresa" element={<SeleccionarEmpresa />} />
          <Route path="subirReporte" element={<SubirReporte />} />
          <Route path="balanzaComprobacion" element={<BalanzaComprobacion/>} />
          <Route path = "menureporte" element={<MenuReporte/>} />
          <Route path="EstadoResultados" element={<EstadoResultados/>} />
          <Route path="balancegeneral" element={ <BalanceGeneral/>}/>
          <Route path="adminUsers" element={<AdminUsers titleA ="Seleccionar Usuarios" titleB={"Seleccionar Empresa"} users={users} companies = {companies} multiSelect/>} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />

      </Route>
    </Routes>
    
  );
}

export default App;
