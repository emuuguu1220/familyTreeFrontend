import React, { Component } from 'react';
import {CardList} from './components/card-list';
import './App.css';



export default class App extends Component{
  constructor(){
    super();
    this.state = {
      maxWidth : 1,
      maxLevel : 1,
      person: {
        id : 0,
        firstName : "",
        children : [],
        gender : "Эрэгтэй",
        spouses : []
      }
    };
  }

  componentDidMount(){
    fetch("http://localhost:8080/persons/1")
    .then(response => response.json())
    .then(data=>this.setState({person : data}));
  }


  render(){
    return (
      <div className="App">
        <h1>Family Tree</h1>
        <CardList person = {this.state.person}/>
      </div>
    );
  }
}
