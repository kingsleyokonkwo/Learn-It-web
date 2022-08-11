import React from "react";
import "./AdvantageContent.css"
import AdvantageContent from "./AdvantageContent";
import AdvantagesData from "./AdvantagesData"

export default function AdvantageCard({myTheme}) {
    return(
        <div className="advantage"  data-theme={myTheme}>
            <h1 className="advantage--heading">WHAT YOU STAND TO BENEFIT</h1>
            <div className="advantage--container">
                {
                    AdvantagesData.map((val, ind) => {
                        return(
                            <AdvantageContent
                                key={ind}
                                time={val.time}
                                text={val.text}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}