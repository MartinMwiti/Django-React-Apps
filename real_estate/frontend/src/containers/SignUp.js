import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// actions components
import { signup } from "../actions/auth"
import { setAlert } from "../actions/alert";



const SignUp = ({ setState, signup, isAuthenticated }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      password2: "",
    });

    const { name, email, password, password2 } = formData;

    // making changes to the state
    const onChange = e => 
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    
    // call login action with values from state
    const onSubmit = e => {
        e.preventDefault();

        // perform checks before passing to backend
        if (password !== password2 ){
            setAlert("Passwords do not match", "error")
        }
        else
        signup({name, email, password, password2});
    }

    if (isAuthenticated) // no need for brackets for one line
        return <Redirect to="/" />

    return (
        <div className="auth">
        <Helmet>
          <title>RealState - Sign Up</title>
          <meta name="description" content="sign up page" />
        </Helmet>
        <h1 className="auth__title">Sign Up</h1>
        <p className="auth__lead">Create your Account</p>

        {/* onSubmit to call the onSubmit func stated above */}
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="auth__form__group">
            <input
              className="auth__form__input"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="auth__form__group">
            <input
              className="auth__form__input"
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="auth__form__group">
            <input
              className="auth__form__input"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength='6'
            />
          </div>
          <div className="auth__form__group">
            <input
              className="auth__form__input"
              type="password"
              name="password2"
              placeholder="Confirm Password"
              value={password2}
              onChange={(e) => onChange(e)}
              minLength='6'
            />
          </div>
          <button className="auth__form__button">Register</button>
        </form>
        <p className="auth__authtest">
            Already have an account? <Link className="auth__authtext__link" to="/login">Login</Link>
        </p>
      </div>
    );
};

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {signup})(SignUp)