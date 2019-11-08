import React from 'react';
import { Link } from 'react-router-dom';


let Nav = ()=> 
    (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Google Books</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Search</Link>
          </li>
          <li className="navbar-item">
          <Link to="/saved" className="nav-link">Saved</Link>
          </li>
        </ul>
        </div>
      </nav>
    );


export default Nav;