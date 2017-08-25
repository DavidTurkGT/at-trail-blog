import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Blog from './components/Blog';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Blog />
      </div>
    );
  }
}

export default App;
