import React from "react";
import "./Header.css";
import logoHeader from "../../assets/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <img src={logoHeader} alt="Logo"/>
            <nav>
                <NavLink to="/home" className="link link__menu">Accueil</NavLink>
                <NavLink to="/about" className="link link__menu">À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;