import React, { Component } from "react";
import "./style.css"


let spouses = []
export class Card extends Component {
    getSpouses(spouses2) {
        spouses = []
        if (spouses2 != null) {
            for (const spouse1 of spouses2) {
                spouses.push(spouse1);
            }
        }
    }
    saveBtn = (e) => {
        alert(e);
    }
    drawSpouse(spouse) {
        return (<span className={spouse.gender === "Эрэгтэй" ? "male" : "female"} onClick={()=>{this.saveBtn(spouse.id)}} >
            {spouse.firstName}
        </span>
        )
    }
    render() {
        return (
            <div>
                <span className={this.props.person.gender === "Эрэгтэй" ? "male" : "female"} onClick={()=>{this.saveBtn(this.props.person.id)}}>
                    {this.props.person.firstName}
                </span>
                {this.getSpouses(this.props.person.spouses)}
                {spouses.map(spouse => this.drawSpouse(spouse))}
            </div>
        );
    }
}
