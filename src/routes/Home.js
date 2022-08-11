import React from "react";
import About from "../components/About";
import AdvantageCard from "../components/AdvantageCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import PricingCard from "../components/PricingCard";
import useLocalStorage from "use-local-storage";
import "../index.css"


export default function Home() {
    const [theme, setTheme] = useLocalStorage("theme", "light")

    const switchTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light"
      setTheme(newTheme)
      console.log("clicked")
    }
    return(
        <div>
            <Nav myTheme={theme} onToggleTheme={switchTheme}/>
            <Hero myTheme={theme}/>
            <About myTheme={theme}/>
            <AdvantageCard myTheme={theme}/>
            <PricingCard myTheme={theme}/>
            <Footer myTheme={theme}/>
        </div>
    )
}