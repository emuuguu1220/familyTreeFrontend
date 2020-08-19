import React, { Component } from "react";
import { Card } from '../card'
import './style.css'
import {
    Grid
} from '@material-ui/core';


export class CardList extends Component {
    draw(person, divid, level, index) {
        const children = [];

        if (person.children != null) {
            for (const child of person.children) {
                children.push(child);
            }
        }
        //console.log("firstName: " + person.firstName + " level: " + level + " portion: " + (index + 1) + " / " + divid)
        return (
            <React.Fragment>
                <li >
                    <Card key={person.id} person={person} wid={divid} level={level} index={index} />
                    <ul >
                        {
                            children.map((child, index) =>
                                this.draw(child, divid * children.length, level + 1, index)
                            )}
                    </ul>
                </li>
            </React.Fragment>
        );
    }
    render() {
        return (
            <div className="card-list">
                <div className="tree" id="FamilyTreeDiv">
                    <Grid container
                        justify="center"
                        style={{ height: "100vh" }}
                    >

                        <ul>
                            {this.draw(this.props.person, 1, 1, 0)}
                        </ul>
                    </Grid>
                </div>
            </div>
        )
    }
}


