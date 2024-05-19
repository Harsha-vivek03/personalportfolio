import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = (props) => {
  return (
    <div className="headd">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div id="headdiv1">
          <h1>Harsha...</h1>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <button className="nav-btn">Home</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <button className="nav-btn">Contact</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <h2 className="propsname">{props.name}</h2>
      <hr />
    </div>
  );
};

export default Header;
