import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "../store"
import { connect } from "react-redux"

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

  handleSubmit(event) {
    event.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password
    })

    this.setState({
      email: '',
      password: ''
    })
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
          <div>
          Sign in
          </div>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="email"
                  className="login-input"
                  value={this.state.userName}
                  onChange={this.handleChange}
                  placeholder="Username or email address"
                />
                <input
                  type="password"
                  name="password"
                  className="login-input"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Password"
                  autoComplete="new-password"
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


const mapDispatchToProps = (dispatch) => ({
  login: (userDetails) => dispatch(login(userDetails))
})

export default connect(null, mapDispatchToProps)(Login)
