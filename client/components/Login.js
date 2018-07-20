import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      password: ""
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
        <div className="signin-form">
          <form autoComplete="off" onSubmit={this.state.handleSubmit}>
            <ul>
              <li>
                <input
                  type="text"
                  name="userName"
                  value={this.state.userName}
                  onChange={this.handleChange}
                  placeholder=" Username or email address"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="password"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="  Password"
                />
              </li>
              <li>
                <button type="submit">Login</button>
              </li>
            </ul>
          </form>
          <div>
            <Link to="/new-user">
            <span>
            New user? Create an account to get started
            </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
