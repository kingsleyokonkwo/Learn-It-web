import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import RouteHero from "../components/RouteHero";
import PricingCard from "../components/PricingCard"
import useLocalStorage from "use-local-storage";
import "../index.css"

export default function Pricing() {

    const [theme, setTheme] = useLocalStorage("theme", "light")

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        console.log("clicked")
      }

    return(
        <div>
            <Nav myTheme={theme} onToggleTheme={switchTheme}/>
            <RouteHero 
                heading="PACKAGES"
                text="The packages we offer"
            />
            <PricingCard myTheme={theme}/>
            <Footer myTheme={theme}/>
        </div>
    )
}