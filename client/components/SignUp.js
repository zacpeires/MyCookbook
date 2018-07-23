import React, { Component } from "react";
import user, { createUser } from "../store/user";
import { connect } from "react-redux";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      postCode: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { name, email, password, postCode } = this.state;
    this.props.createUser({
      name,
      email,
      password,
      postCode
    });

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  render() {
    return (
      <div className="loginpage-container">
        <div className="login-form-parent">
          <div>Sign up</div>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              className="login-input"
              value={this.state.userName}
              onChange={this.handleChange}
              placeholder="Name"
            />
            <input
              type="text"
              name="email"
              className="login-input"
              value={this.state.userName}
              onChange={this.handleChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className="login-input"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
              autoComplete="new-password"
            />
            <span>
              Fill in the box below to create or register with a home account:
            </span>
            <input
              type="text"
              name="postCode"
              className="postcode-input"
              value={this.state.postCode}
              onChange={this.handleChange}
              placeholder="Enter your Postcode "
            />
            <button type="submit" className="signup-btn" disabled={!this.state.email || !this.state.password || !this.state.name ? true : false}>
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createUser: userDetails => dispatch(createUser(userDetails))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
