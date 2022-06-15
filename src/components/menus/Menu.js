import { faHatCowboySide } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AdminButton from "./AdminButton";

const ROLES = {
  User: 2001,
  Admin: 5150,
};

function Menu() {
  const history = useNavigate();
  const userInfo = useAuth();
  const userRole = userInfo.auth.roles;

  return (
    <div className="menubox">
      <div className="sub-menubox">
        <div>
          <h1>Menu Principal</h1>

          <div className="menu-button">
            <button
              className="button3"
              onClick={() => history("/reportes/insertar")}
            >
              Registrar Información
            </button>
          </div>

          <div className="menu-button">
            <button className="button3" onClick={() => history("/reportes")}>
              {" "}
              Generar Reporte
            </button>
          </div>
          <div className="menu-button">
            {userRole === ROLES.Admin ? <AdminButton /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
