import React from 'react';
import logo from "../logo.png"
// REACT FONTAWOSEME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../hooks/useAuth";


const Navbar = () => {
    const sessionInfo = useAuth();
    console.log(sessionInfo.auth.user);

    return (
        <nav className="navbar navbar-expand-lg bg-light bg-dark">
            <div className="container">


            <a className="navbar-brand" href="#"><img className="logo" src="https://flexbpo.azurewebsites.net/wp-content/uploads/2014/05/ICON_-small.png" alt="logo..." /></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Titulo A</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Titulo B</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Titulo C</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{sessionInfo.auth.user}</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
