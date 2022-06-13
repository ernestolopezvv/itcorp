import React from 'react';
// REACT FONTAWOSEME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../../hooks/useAuth";


const Footer = () => {

    return (
        <footer className="footer">
            <div>Aviso de privacidad</div>
            <p>
              La compañía Neocode recopila datos como correo electrónico y otros datos sensibles como edad, información económica, localización, etc.
              con el fin de hacer un sondeo de mercado y visualizar los datos. Cuando accede a este sitio web y responde
              la encuesta, se asume que está dando consentimiento para que guardemos estos datos. Los datos no se proveen a terceros.
            </p>
          </footer>
    )
}

export default Footer