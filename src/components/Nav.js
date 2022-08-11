import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
import logo from "../images/logo.png"
import { FaTimes, FaBars, FaToggleOn} from "react-icons/fa"



export default function Nav({myTheme,onToggleTheme}) {

    const [click, setClick] = React.useState(false)
    
    function handleClick() {
        setClick(!click)
    }

    const [color, setColor] = React.useState(false)

    function changeColor() {
        if(window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor)

    

    return(
        <div className={color ? "header header-bg" : "header"} data-theme={myTheme}>
            <NavLink to="/">
                <img src={logo} alt="logo of learn it" className="header--logo" />
            </NavLink>

            <ul className= {click ? "nav--links active" : "nav--links"}>
                <li>
                    <div className="theme--toggle" onClick={onToggleTheme}>
                        <h2>{myTheme === "light" ? "Dark" : "Light"}</h2>
                        <FaToggleOn size={25} />
                    </div>
                </li>
                <li>
                    <NavLink to="/" >HOME</NavLink>
                </li>

                <li>
                    <NavLink to="/advantage" >ADVANTAGES</NavLink>
                </li>

                <li>
                    <NavLink to="/pricing" >PRICING</NavLink>
                </li>

                <li>
                    <NavLink to="/sign-up"><button className="btn">Let's start!</button></NavLink>
                </li>
            </ul>

            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={25}/>
                ):(
                    <FaBars size={20}/>
                )}
                
                
            </div> 
        </div>
    )
}