import React from "react";
import "./AdvantageContent.css"

export default function AdvantageContent(props) {
    return(
        <div className="advantage--content">
            <h3 className="number">{props.time}</h3>
            <p className="text">{props.text}</p>
        </div>
    )
}