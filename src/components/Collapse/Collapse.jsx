import React, { useState } from "react";
import "./Collapse.css";
import arrow from "../../assets/Components/Collapse/arrow.svg";

function Collapse({title, description}) {
    /* Crée un Hook d'état */
    const [ouvert, setOuvert] = useState(false);

    return(
        <div className="collapse" id={`collapse-${title}`}>
            <div className="header__collapse">
                <div className="title__collapse">{title}</div>
                <span className={`arrow__collapse ${ouvert}`} onClick={() => setOuvert(!ouvert)}>
                    <img src={arrow} alt="Ouvrir cette liste"/>
                </span>
            </div>
            {
                /* Si le dropdown est à TRUE alors il affichera la description */
                ouvert && <div className="description__collapse">{description}</div>
            }
        </div>
    );
}

export default Collapse;