import React, { Component } from 'react';
import { CardList } from './components/card-list';
// import '../App.css';
import Login from './components/login'
import Boardtree from './components/board'
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <Router ref={(router) => (this.router = router)} >
            <Switch>
              <Route  path = "/board" render = {()=> <Boardtree/>} />
              <Route  path = "/" render= {()=> <Login/>}/>
            </Switch>
        </Router>
    );
  }
}
