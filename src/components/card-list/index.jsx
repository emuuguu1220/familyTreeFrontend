import React from "react";
import {Card} from '../card'
import './style.css'

function draw(person, divid, level, index){
    const children = [];
    
    for(const child of person.children){
        children.push(child);
    }
    
    console.log("firstName: "+person.firstName+" level: " +level + " portion: "+(index+1)+" / "+divid)
    return(
        <React.Fragment>
            
            <li>
            <Card key = {person.id} person = {person} wid = {divid} level = {level} index = {index} /> 
            <ul>
                {children.map((child, index)=>draw(child, divid*children.length, level+1, index))}
            </ul>
            </li>

        </React.Fragment>
        );
    }

export const CardList = props => (
    <div className = "card-list">
        <div className = "tree" id = "FamilyTreeDiv"> 
        <ul>
            {draw(props.person, 1, 1, 0)}
        </ul>
        </div>
    </div>
)