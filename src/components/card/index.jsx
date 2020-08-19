import React, { Component } from "react";
import "./style.css"
import {
    Button,
    Menu,
    MenuItem
} from '@material-ui/core';


let spouses = []
export class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            setAnchorEl: null
        }
    }

    getSpouses(spouses2) {
        spouses = []
        if (spouses2 != null) {
            for (const spouse1 of spouses2) {
                spouses.push(spouse1);
            }
        }
    }
    // saveBtn = (e) => {
    //     //alert(e);

    // }

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
        console.log(event.currentTarget);
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    handleEdit = () => {
        this.props.modal(true);
    };

    drawSpouse(spouse) {
        return (
            // <span className={spouse.gender === "Эрэгтэй" ? "male" : "female"} onClick={()=>{this.saveBtn(spouse.id)}} >
            //     {spouse.firstName}
            // </span>
            <span>
                <span className={spouse.gender === "Эрэгтэй" ? "male" : "female"} onClick={this.handleClick} aria-controls="simple-menu" aria-haspopup="true">
                    {spouse.firstName}
                </span>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleEdit}>Edit</MenuItem>
                    <MenuItem onClick={this.handleClose}>Add</MenuItem>
                    <MenuItem onClick={this.handleClose}>Cancel</MenuItem>
                </Menu>
            </span>
        )
    }
    render() {
        return (
            <div>
                {/* <span className={this.props.person.gender === "Эрэгтэй" ? "male" : "female"} onClick={() => { this.saveBtn(this.props.person.id) }}>
                    {this.props.person.firstName}
                </span> */}
                <span>
                    <span className={this.props.person.gender === "Эрэгтэй" ? "male" : "female"} onClick={this.handleClick} aria-controls="simple-menu" aria-haspopup="true">
                        {this.props.person.firstName}
                    </span>
                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Нэмэх</MenuItem>
                        <MenuItem onClick={this.handleClose}>Засах</MenuItem>
                        <MenuItem onClick={this.handleClose}>Буцах</MenuItem>
                    </Menu>
                </span>

                {this.getSpouses(this.props.person.spouses)}
                {spouses.map(spouse => this.drawSpouse(spouse))}
            </div>
        );
    }
}
