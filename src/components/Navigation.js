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
      <NavLink to="/progress" className={({ isActive }) => isActive ? 'active' : ''}>
        Progress
      </NavLink>
    </nav>
  );
}

export default Navigation;
