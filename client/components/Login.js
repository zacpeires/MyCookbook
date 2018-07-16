import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super()

      this.state = {
        userName: '',
        userLogin: ''
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {

    }

    handleChange() {

    }

  render() {
    return (
      <div className="login-container">
          <form autoComplete="off" onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              name="webScrapeUrl"
              value={this.props.webScrapeUrl}
              onChange={this.props.handleChange}
              placeholder="  enter URL"
            />
            <button className="toolbar-btn" type="submit">
              Add recipe
            </button>
          </form>



      </div>
    )
  }
}


export default Login
