import React from "react";
import "./Tags.css";

function Tags({name}) {
    return(
        <span className="tags">{name}</span>
    );
}

export default Tags;