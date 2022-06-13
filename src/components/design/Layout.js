import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <main className="App">
      <Navbar/>
      <Outlet/>
      {/* <Footer/> */}
        
    </main>
  )
}

export default Layout