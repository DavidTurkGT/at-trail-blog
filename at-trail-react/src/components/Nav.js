import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="home-container">
        <NavLink to="/" >Home</NavLink>
      </div>
      <div className="title">
        <h1>Chris' Hike</h1>
      </div>
      <div className="encouragement-container">
        <NavLink to="/encouragement">Words of Encouragement</NavLink>
      </div>
    </div>
  )
}

export default Nav;
