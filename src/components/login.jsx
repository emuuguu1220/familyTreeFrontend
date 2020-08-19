import React, { Component } from 'react';

import './board.css';
import {
    Button,
    TextField,
    Grid,
    Box
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import LoginImage from '../assets/img/bg.jpg'


const styles = {
    paperContainer: {
        height: '100pv',
        backgroundImage: `url(${LoginImage})`,
        backgroundSize: "cover"
    }
};
export default class login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }
    render() {
        return (
            <div className="board" style={styles.paperContainer}>
                <Grid container
                    justify="center"
                    alignItems="center"
                    style={{ height: "100vh" }}
                >

                    <Box
                        bgcolor="#FFFFFF"
                        p={5}
                        style={{ width: "350px", opacity: '100' }}
                        borderRadius={16}
                    >
                        <Grid
                            container
                            direction="column"
                            justify="space-between"
                            style={{ height: "280px" }}
                        >
                            <h1>Ургийн мод</h1>
                            <TextField id="standard-basic" label="Username" />
                            <TextField id="standard-basic" label="password" type="password" />
                            <Button variant="contained" color="primary">
                                Нэвтрэх
                            </Button>
                            <Alert severity="error">This is an error alert — check it out!</Alert>
                        </Grid>
                    </Box>
                </Grid>
            </div>
        );
    }
}
