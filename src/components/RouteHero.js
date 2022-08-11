import React from "react";
import "./RouteHero.css"

export default function ReactHero(props) {
    return(
        <div className="Routehero">
            <div className="heading">
               <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}