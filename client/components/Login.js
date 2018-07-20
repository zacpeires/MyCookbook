import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit() {}

  handleChange() {}

  render() {
    return (
      <div className="loginpage-container">
        <div className="signin-form">
          <form autoComplete="off" onSubmit={this.state.handleSubmit}>
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
              placeholder="  Username or email address"
            />
            <button type="submit">Login</button>
          </form>
        </div>

        <div className="signup-form">
          <form autoComplete="off" onSubmit={this.state.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="  enter URL"
            />
            <button type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
