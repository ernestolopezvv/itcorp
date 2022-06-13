import React from "react";
// REACT FONTAWOSEME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const sessionInfo = useAuth();
  const history = useNavigate();

  console.log(sessionInfo.auth.user);

  return (
    <nav className="navbar navbar-expand-lg bg-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={() => history("/menu")}>
          <img
            src="https://flexbpo.azurewebsites.net/wp-content/uploads/2014/05/ICON_-small.png"
            alt="logo..."
          />{" "}
          Financh
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li>
              {/* <a onClick={() => history("/menu")} > */}
              <a className="nav-link" onClick={() => history("/menu")}>
                {" "}
                Menu Principal
              </a>
            </li>
            <li className="nav-item">
              {}
              <a className="nav-link" href="#">
                {sessionInfo.auth.user
                  ? `Usuario : ${sessionInfo.auth.user}`
                  : ""}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
