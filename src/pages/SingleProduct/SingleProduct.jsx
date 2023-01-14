import React from "react";
import "./SingleProduct.css";
import { useParams, Navigate } from 'react-router-dom';
import lodgingList from "../../data/lodging.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tags from "../../components/Tags/Tags";
import Star from "../../assets/Pages/SingleProduct/Star.png";
import emptyStar from "../../assets/Pages/SingleProduct/emptyStar.png";
import Collapse from "../../components/Collapse/Collapse";

function SingleProduct() {
    /* Récupère la bonne fiche */
    const id = useParams();
    const lodgingForm = lodgingList.find(lodging => lodging.id === id.id);

    /* Tags */
    const lodgingTags = lodgingForm?.tags.map((tags, index) => {
        return <Tags key={index} name={tags} />
    });

    /* Notes */
    let lodgingStars = [];
    let completeStar = true;
    for (let index = 0; index < 5; index++) {
        if(index === parseInt(lodgingForm?.rating)) {
            completeStar = false;
        }
        if(completeStar === true) {
            lodgingStars.push(<img key={index} className="star" src={Star} alt={`${lodgingForm?.rating}/5`}/>)
        } else {
            lodgingStars.push(<img key={index} className="star" src={emptyStar} alt={`${lodgingForm?.rating}/5`}/>)
        }
    }

    /* Équipements */
    const equipementsLogement = lodgingForm?.equipments.map((equipment, index) => {
        return <li key={index}>{equipment}</li>
    })

    return(
        <>
            {
                lodgingForm ? (
                    <div className="Form">
                        <Carrousel images={lodgingForm?.pictures}/>
                        <div className="lodging__owner">
                            <div className="lodging__infos">
                                <span className="lodging__title">{lodgingForm?.title}</span>
                                <span className="lodging__location">{lodgingForm?.location}</span>
                                <div className="lodging__tags">
                                    {lodgingTags}
                                </div>
                            </div>
                            <div className="owner__score">
                                <div className="owner__infos">
                                    <span className="owner__name">{lodgingForm?.host.name}</span>
                                    <img className="owner__img" src={lodgingForm?.host.picture} alt="Propriétaire"/>
                                </div>
                                <div className="score">
                                    {lodgingStars}
                                </div>
                            </div>
                        </div>
                        <div className="description-equipments">
                            <Collapse title="Description" description={lodgingForm?.description}/>
                            <Collapse title="Équipements" description={equipementsLogement}/>
                        </div>
                    </div>
                ) : <Navigate replace to="/404"/>
            }
        </>
    )
}

export default SingleProduct;