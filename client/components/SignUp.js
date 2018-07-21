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
    this.toggleAddressInput = this.toggleAddressInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submitting')

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

    console.log(this.state)
  }

  toggleAddressInput() {
    const checkbox = document.getElementById("home-checkbox");
    const postCodeInput = document.querySelector(".postcode-input");

    if (checkbox.checked == true) {
      postCodeInput.style.display = "block";
    } else {
      postCodeInput.style.display = "none";
    }
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
            />
            <span>
              Tick the box below to create or register with a home account?
            </span>
            <input
              id="home-checkbox"
              type="checkbox"
              onClick={this.toggleAddressInput}
            />
            <input
              type="text"
              name="postCode"
              className="postcode-input"
              value={this.state.postCode}
              onChange={this.handleChange}
              placeholder="Enter your Post Code "
            />
            <button type="submit" className="signup-btn">
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
