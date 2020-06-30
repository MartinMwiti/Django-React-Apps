import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      //if(error.msg.name) alert.error('Name is required')
      error.msg.name && alert.error(`Name: ${error.msg.name.join()}`); // shorter but same as above code.
      error.msg.email && alert.error(`Email: ${error.msg.email.join()}`); //'`Name: ${error.msg.join()}` since the error is an array so i use join() to make it a string
      error.msg.message && alert.error(`Message: ${error.msg.message.join()}`);
      error.msg.username && alert.error(error.msg.username.join());
      error.msg.non_field_errors && alert.error(error.msg.non_field_errors.join());
    }

    if(message !==prevProps.message){
      message.deleteLead && alert.success(message.deleteLead) // 'message.deleteLead' refers to the msg i dispatched ''Lead Deleted'
      message.addLead && alert.success(message.addLead);
      message.passwordNotMatch && alert.error(message.passwordNotMatch);
    }

  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors, // will get the 'msg' and 'status'
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
