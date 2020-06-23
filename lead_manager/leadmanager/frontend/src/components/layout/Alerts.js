import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert } = this.props;
    if (error !== prevProps.error) {
        //if(error.msg.name) alert.error('Name is required')
        error.msg.name && alert.error(`Name: ${error.msg.name.join()}`); // shorter but same as above code.
        error.msg.email && alert.error(`Email: ${error.msg.email.join()}`); //'`Name: ${error.msg.join()}` since the error is an array so i use join() to make it a string
      
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors, // will get the 'msg' and 'status'
});

export default connect(mapStateToProps)(withAlert()(Alerts));
