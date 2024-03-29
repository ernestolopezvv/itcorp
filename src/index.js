import React from "react";
import ReactDOM from "react-dom/client";
import "./style/App.css";
import "./style/Navbar.css";
import "./style/Home.css";
import "./style/Login.css";
import "./style/General.css";
import "./style/table.css";
import "./style/Register.css";
import "./style/Menu.css";
import "./style/MenuReporte.css";
import "./style/SubirReporte.css";

import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
