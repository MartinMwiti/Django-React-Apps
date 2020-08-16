import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// component
import { verify } from "../actions/auth";

const Activate = ({ verify, match }) => {  
  const [verified, setVerified] = useState(false)

  const verify_account = (e) => {
    const uid = match.params.uid
    const token = match.params.token;

    verify(uid, token);
    setVerified(true)
  };

  // If the user authenticated
  // Redirect to the home page
  if (verified) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <div
        className="d-flex flex-column justify-content align-items-center"
        style={{ marginTop: "200px" }}
      >
        <h1>Verify your account</h1>
        <button
          className="btn btn-primary"
          onClick={verify_account}
          style={{ marginTop: "50px" }}
        >
          Verify
        </button>
      </div>
    </div>
  );
};


export default connect(null, { verify })(Activate);

