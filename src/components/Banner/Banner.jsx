import React from "react";
import "./Banner.css";

function Banner ({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="bannière" className="banner__img" />
      <div className="banner__overlay"></div>
      <span className="banner__text">{text}</span>
    </div>
  );
};

export default Banner;