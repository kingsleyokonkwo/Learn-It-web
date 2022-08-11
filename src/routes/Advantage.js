import React from "react";
import AdvantageCard from "../components/AdvantageCard";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import RouteHero from "../components/RouteHero";
import useLocalStorage from "use-local-storage";
import "../index.css"

export default function Advantage() {

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
                myTheme={theme}
                heading="ADVANTAGES"
                text="These are what you stand to gain by learning with us"
            />
            <AdvantageCard myTheme={theme}/>
            <Footer myTheme={theme}/>
        </div>
    )
}