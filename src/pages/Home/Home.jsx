import React from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import HomeBanner from "../../assets/Pages/Home/HomeBanner.png";
import { NavLink } from "react-router-dom";
import Card from "../../components/Card/Card";
import LodgingList from "../../data/lodging.json";

function Home() {
    return(
        <div className="Home">
            <Banner image={HomeBanner} text="Chez vous, partout et ailleurs"/>
            <div className="lodging__list">
                {LodgingList.map((lodging) => <NavLink key={lodging.id} to={"/lodging/"+lodging.id+"/#"}>
                <Card key={lodging.id} id={lodging.id} img={lodging.cover} title={lodging.title} /></NavLink>)}
            </div>
        </div>
    );
}

export default Home;