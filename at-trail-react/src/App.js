import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Blog from './components/Blog';
import { Switch, Route } from 'react-router-dom';
import Encouragement from './components/Encouragement';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route exact path="/encouragement" component={Encouragement} />
        </Switch>
      </div>
    );
  }
}

export default App;
