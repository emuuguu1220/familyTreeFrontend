import React from "react";
import "./style.css"

let spouses  = []
function getSpouses(spouses2){
    spouses = []
    for(const spouse1 of spouses2){
        spouses.push(spouse1);
    }
}
function drawSpouse(spouse){
    return(<span className ={spouse.gender === "Эрэгтэй"?"male":"female"}>
        {spouse.firstName}
    </span>
    )
}

export const Card = props => (
    <div><span className ={props.person.gender === "Эрэгтэй"?"male":"female"}>
        {props.person.firstName}
    </span>
    
    {getSpouses(props.person.spouses)}
    {spouses.map(spouse => drawSpouse(spouse))}
    
    
    </div>
    // <div className = "card-container" style={{ 
    //     // "position": "relative",
    //     // "left" : 200*(props.index)+"px",
    //     "top" : 100*(props.level-1)+"px",
        
    //     // "width" : "100px", 
    //     // "display": "inline-block"
    // }}>
    //     <h2>{props.person.firstName}</h2>
    // </div>
)
