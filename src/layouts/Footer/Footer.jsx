import React from "react";
import "./Footer.css";
import logoFooter from "../../assets/Footer/Logo.png";

function Footer() {
    return(
        <footer>
            <div id="footer__container">
                <img src={logoFooter} alt="Logo" />
                <p>&copy; 2022 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;