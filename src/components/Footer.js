import React from "react";
import "./Footer.css"
import logo from "../images/logo.png"
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaCopyright } from "react-icons/fa"


export default function Footer({myTheme}) {
    return(
        <div className="footer"  data-theme={myTheme}>
            <div className="footer--container">
                <p><span>Learn it</span>with us</p>
                <h3>Follow us</h3>
                <div className="footer--icon">
                    <FaLinkedin size={20} />
                    <FaFacebook size={20} />
                    <FaTwitter size={20} />
                    <FaInstagram size={20} />
                </div>
               
                <h6>Copyright (c) 2022 All rights reserved || This is designed by keneCode</h6>
            </div>
        </div>
    )
}