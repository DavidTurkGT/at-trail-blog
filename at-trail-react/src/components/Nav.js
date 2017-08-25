import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/encouragement">Words of Encouragement</NavLink>
    </div>
  )
}

export default Nav;
