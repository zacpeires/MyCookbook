import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
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
          <div>
          Sign in
          </div>
          <form autoComplete="off" onSubmit={this.state.handleSubmit}>
                <input
                  type="text"
                  name="email"
                  className="login-input"
                  value={this.state.userName}
                  onChange={this.handleChange}
                  placeholder="Username or email address"
                />
                <input
                  type="text"
                  name="password"
                  className="login-input"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
                <button type="submit" className="login-btn">Sign in</button>
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
