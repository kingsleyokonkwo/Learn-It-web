import React from "react";
import "./pricing.css"
import { NavLink } from "react-router-dom"

export default function Pricing({myTheme}) {
    return(
        <div className="pricing"  data-theme={myTheme}>
            <div className="pricing--">
                <h3 className="pricing--header">THE PACKAGES WE OFFER</h3>
                <div className="price--container">
                    <div className="price">
                        <h3>Normal</h3>
                        <h1>$75</h1>
                        <h4>What you will get:</h4>
                        <ul>
                            <li>5 days class</li>
                            <li>Online community</li>
                            <li>Live session</li>
                            <li>interactive online test</li>
                            <li>Special care</li>
                         </ul>
                         <NavLink to="/sign-up"><button className="btn">Let's start!</button></NavLink>
                    </div>

                    <div className="price">
                        <h3>Special</h3>
                        <h1>$100</h1>
                        <h4>What you will get:</h4>
                        <ul>
                            <li>5 days class</li>
                            <li>NO online community</li>
                            <li>Live session</li>
                            <li>interactive online test</li>
                            <li>Little care</li>
                        </ul>
                        <NavLink to="/sign-up"><button className="btn">Let's start!</button></NavLink>
                    </div>

                    <div className="price">
                        <h3>Premium</h3>
                        <h1>$150</h1>
                        <h4>What you will get:</h4>
                        <ul>
                            <li>5 days class</li>
                            <li>NO online community</li>
                            <li>Live session</li>
                            <li>interactive online test</li>
                            <li>Little care</li>
                        </ul>
                        <NavLink to="/sign-up"><button className="btn">Let's start!</button></NavLink>
                    </div>
                </div>
            </div>
            
        </div>
    )
}