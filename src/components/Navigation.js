// src/components/Navigation.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
        MCQ
      </NavLink>
      <NavLink to="/fill-in" className={({ isActive }) => isActive ? 'active' : ''}>
        Fill-In
      </NavLink>
    </nav>
  );
}

export default Navigation;
