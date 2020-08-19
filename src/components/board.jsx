import React, { Component } from 'react';
import { CardList } from './card-list';
import './board.css';
import {
  Grid,
  Modal,
  makeStyles
} from '@material-ui/core';

const dataExample = {
  id: 1,
  firstName: "Tamir",
  children: [
    {
      id: 2,
      firstName: "Anand",
      children: [],
      gender: "Эрэгтэй",
      spouses: []
    }
  ],
  gender: "Эрэгтэй",
  spouses: [
    {
      id: 3,
      firstName: "Tsika",
      children: [],
      gender: "Эмэгтэй",
      spouses: []
    }
  ]
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default class board extends Component {

  constructor() {
    super();
    this.state = {
      maxWidth: 1,
      maxLevel: 1,
      person: {
        id: 0,
        firstName: "",
        children: [],
        gender: "Эрэгтэй",
        spouses: []
      },
      open: false,
      // modalStyle: getModalStyle()
    };
  }

  handleModal = (open) => {
    this.setState({ open });
  }

  componentDidMount() {
    // fetch("http://localhost:8080/persons/1")
    //   .then(response => response.json())
    //   .then(data => this.setState({ person: data }));
    this.setState({ person: dataExample });
  }


  render() {
    return (
      <div className="board">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <h1>Family Tree</h1>
          <Grid container
            justify="center"
            alignItems="center"
            style={{ height: "100vh" }}
          >
            <CardList person={this.state.person} modal={this.handleModal} />
          </Grid>
          {this.state.open} (
          {/* <Modal
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div style={modalStyle} className={classes.paper}>
              <h2 id="simple-modal-title">Text in a modal</h2>
              <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </p>
            </div>
          </Modal> */}
          )

        </Grid>
      </div>
    );
  }
}
