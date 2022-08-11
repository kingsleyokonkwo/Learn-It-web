import React from "react";
import "./Hero.css"
import HeroImg from "../images/maintain.png"
import { NavLink } from "react-router-dom"

export default function Hero({myTheme}) {
    return(
        <div className="hero" data-theme={myTheme}>
            <div className="mask"></div>
            <div className="hero--content">

                <div className="hero--content-text">
                    <h3>HELLO</h3>
                    <h1>WE ARE <span>LEARN IT</span></h1>
                    <h4>YOUR FAVOURITE ONLINE TUTORS</h4>
                    <NavLink to="/sign-up"><button className="btn">Start to study</button></NavLink>
                </div>
                <div className="hero--content-img">
                    <img src={HeroImg} alt="a child reading" className="hero--image"/>
                </div>
                
            </div>
        </div>
        
    )
}