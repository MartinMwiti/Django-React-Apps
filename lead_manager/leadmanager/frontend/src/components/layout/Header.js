import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <div className="container">
                <a className="navbar-brand" href="#">
                  Lead Manager
                </a>
                <ul className="navbar-nav mt-2 mt-lg-0 float-right">
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default Header;