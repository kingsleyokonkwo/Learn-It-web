import React from "react";
import "./About.css";
import Aboutimg from "../images/casual.png"
import { NavLink } from "react-router-dom"

export default function About({myTheme}) {
    return(
        <div className="about"  data-theme={myTheme}>
            <div className="about--img">
                <img src={Aboutimg} alt="a child reading" className="about--img"/>
            </div>
            <div className="about--text">
                <h1>LET'S GET TO KNOW US</h1>
                <p>We are the most advanced online tutors in Nigeria, suitable for secondary school students who are 
                preparing for their WASSCE and JAMB. We give the tips, trick and hacks to every questions.</p>
                <p>We are the most advanced online tutors in Nigeria, suitable for secondary school students who are 
                preparing for their WASSCE and JAMB.</p>
                <p>Lol, we are not. lmao</p>
                <NavLink to="/sign-up"><button className="btn">Start to study</button></NavLink>
            </div>
        </div>
    )
}