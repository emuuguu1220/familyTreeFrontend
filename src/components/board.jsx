import React, { Component } from 'react';
import { CardList } from './card-list';
import './board.css';


const dataExample = {
  id: 1,
  firstName: "Tamir",
  children: [
    {
      id: 1,
      firstName: "Tamir",
      children: [],
      gender: "Эрэгтэй",
      spouses: []
    }
  ],
  gender: "Эрэгтэй",
  spouses: [
    {
      id: 1,
      firstName: "Tamir",
      children: [],
      gender: "Эрэгтэй",
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
        <h1>Family Tree</h1>
        <CardList person={this.state.person} />
      </div>
    );
  }
}
