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
import BalanceGeneral from './components/BalanceGeneral';
import MenuReporte from './components/MenuReporte';
import { Routes, Route } from 'react-router-dom';





const ROLES = {
  "User": 2001,
  "Admin": 5150
}


function App() {
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
          <Route path="balancegeneral" element={ <BalanceGeneral/>}/>
          <Route path = "menureporte" element={<MenuReporte/>} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />

      </Route>
    </Routes>
  );
}

export default App;
