import React, { Component } from 'react';
import { CardList } from './card-list';
import './board.css';
import {Button,
        TextField,
        Grid
} from '@material-ui/core';



export default class login extends Component {
    constructor() {
        super();
        this.state = {
            username:'',
            password:''
        };
    }
    render() {
        return (
            <div className="board">
                <Grid container spacing={1}>
                    <h1>Family Tree</h1>
                    <TextField id="standard-basic" label="Username" />
                    <TextField id="standard-basic" label="password" type="password" />
                    <Button variant="contained" color="primary">
                        Hello World
                    </Button>
                </Grid>
            </div>
        );
    }
}
