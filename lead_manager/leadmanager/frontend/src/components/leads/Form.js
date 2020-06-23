import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types' // shortcut 'impT+TAB'
import { addLead } from '../../actions/leads'


class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  static propTypes ={
    addLead: PropTypes.func.isRequired
  }

  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state; // pulling each value from this component state ad assigning to each value name
    const lead = { name, email, message }; // bundling the values into a const lead
    this.props.addLead(lead) // passing the lead to the 'addLead' action
    this.setState({
      name: '',
      email: '',
      message: ''
    }) // clear the input area after making a submit on the form
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                />
              </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}


export default connect(null, {addLead})(Form)