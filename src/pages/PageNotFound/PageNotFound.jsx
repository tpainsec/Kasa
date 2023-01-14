import React from "react";
import "./PageNotFound.css";
import { NavLink } from "react-router-dom";

function PageNotFound() {
    return(
        <div className="pageNotFound">
            <h1 className="title">404</h1>
            <span className="description">Oups! La page que vous demandez n'existe pas.</span>
            <NavLink to="/" className="link link__404">Retourner sur la page d’accueil</NavLink>
        </div>
    );
}

export default PageNotFound;