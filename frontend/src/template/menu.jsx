import React from 'react';
import { Link } from 'react-router-dom'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-header">
        <Link to={"/"} className="navbar-brand">
          <i className="fa fa-calendar-check-o"></i> TodoApp
        </Link>
      </div>
      <div id="navbar" >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to={"/todo"} className="nav-link">Todos <span className="sr-only">(página atual)</span></Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </nav>
)