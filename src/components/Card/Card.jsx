import React from "react";
import "./Card.css";

function Card({id, img, title}) {
    return(
        <div className="card" id={id}>
            <img className="card__img" src={img} alt="carte"/>
            <div className="card__overlay"></div>
            <span className="card__title">{title}</span>
        </div>
    );
}

export default Card;