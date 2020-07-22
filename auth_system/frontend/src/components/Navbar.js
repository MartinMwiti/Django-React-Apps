import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { logout } from "../actions/auth";


const Navbar = ({ logout, isAuthenticated }) => {
 const guestLinks = (
   <Fragment>
     <li className="nav-item">
       <NavLink className="nav-link" exact to="/login">
         Login
       </NavLink>
     </li>
     <li className="nav-item">
       <NavLink className="nav-link" exact to="/signup">
         Sign Up
       </NavLink>
     </li>
   </Fragment>
 );

  const authLinks = (
    <li className="nav-item">
      <a className="nav-link" onClick={logout} href="#!">
        Logout
      </a>
    </li>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Auth System
        </Link>
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
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navbar);
