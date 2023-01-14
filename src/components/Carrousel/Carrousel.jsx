import React, { useState } from "react";
import "./Carrousel.css";
import arrow from "../../assets/Components/Carrousel/arrow.png";

function Carrousel({images}) {
    /* Crée un Hook d'état */
    let [imgAfficher, changerImg] = useState(0);
    let numberImg = images.length;

    const imgPrecedente = () => {
        if(imgAfficher === 0) {
            changerImg(numberImg - 1);
        } else {
            changerImg(imgAfficher - 1);
        }
        return(changerImg);
    };  

    const imgSuivante = () => {
        if(imgAfficher === numberImg - 1) {
            changerImg(numberImg = 0);
        } else {
            changerImg(imgAfficher + 1);
        }
        return(changerImg);
    };

    return(
        <div className="carrousel">
            {
                numberImg > 1 && <img className="arrow left__arrow" src={arrow} alt="Contenu précedént" onClick={imgPrecedente}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img key={index} className={index === imgAfficher ? 'carrousel__img actif' : 'carrousel__img'} src={image} alt="Logement"/>
                    )
                })
            }
            {
                numberImg > 1 && <img className="arrow right__arrow" src={arrow} alt="Contenu suivant" onClick={imgSuivante}/>
            }
        </div>
    );
}

export default Carrousel;