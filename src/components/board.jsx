import React, { Component } from 'react';
import { CardList } from './card-list';
import './board.css';
import {
  Grid,
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
      }
    };
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
            <CardList person={this.state.person} />
          </Grid>

        </Grid>
      </div>
    );
  }
}
