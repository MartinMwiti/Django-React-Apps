import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom"
import { connect } from 'react-redux'


const Login = () => {
  const [formData, setformData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData

  const onChange = e => setformData({...formData, [e.target.value]: e.target.value })

  const onSubmit = e => {
    e.preventDefault();

    //login(email, password)
}

  // Is the user authenticated
  // Redirect to the home page


  return (
    <div className="container mt-5">
      <h1>Sign In</h1>
      <p>Sign into your Account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
      <p className="mt-3">
        Don't have an account? <link to="/signup">Sign Up</link>
      </p>
      <p className="mt-3">
        Forgot Your Password? <link to="/reset-password">Reset Password</link>
      </p>
    </div>
  );
};

// const mapStateToProps = state => ({
//   // is authenticated

// })

export default connect(null, {})(Login);
