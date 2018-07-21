import React, { Component } from "react";

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
    this.toggleAddressInput = this.toggleAddressInput.bind(this)
  }

  handleSubmit() {}

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  toggleAddressInput() {
    const checkbox = document.getElementById('home-checkbox')
    const postCodeInput = document.querySelector('.postcode-input')

    if (checkbox.checked == true){
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
          <form autoComplete="off" onSubmit={this.state.handleSubmit}>
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
              type="text"
              name="password"
              className="login-input"
              value={this.state.name}
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
              name="postcode"
              className="postcode-input"
              value={this.state.postCode}
              onChange={this.handleChange}
              placeholder="Enter your Post Code "
            />
            <button type="submit" className="signup-btn">Sign up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
