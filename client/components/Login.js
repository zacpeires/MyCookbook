import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      password: "",
      newUser: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {}

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });

    console.log(this.state);
  }

  render() {
    return (
      <div className="loginpage-container">
        <div className="login-form-parent">
          <form autoComplete="off" onSubmit={this.state.handleSubmit}>
                <input
                  type="text"
                  name="userName"
                  className="login-input"
                  value={this.state.userName}
                  onChange={this.handleChange}
                  placeholder=" Username or email address"
                />
                <input
                  type="text"
                  name="password"
                  className="login-input"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="  Password"
                />
                <button type="submit">Login</button>
          </form>
            <Link to="/new-user"  className="new-user">
            <span>
            New user? Create an account to get started
            </span>
            </Link>
        </div>
      </div>
    );
  }
}

export default Login;
