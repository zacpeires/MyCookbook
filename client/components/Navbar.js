import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Toolbar } from "../components";
import { connect } from "react-redux";
import { scrapedRecipe, logout } from "../store";
import { withRouter } from "react-router";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      webScrapeUrl: "",
      search: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    if (this.state.webScrapeUrl.length) {
      await this.props.scrapedRecipe({
        recipe: this.state.webScrapeUrl
      });

      this.setState({
        webScrapeUrl: ""
      });
    }
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <Link to="/home">
            <span>Home</span>
          </Link>
          {!this.props.isLoggedIn ? (
            <Link to="/login" className="login-logout">
              <span>Login</span>
            </Link>
          ) : (
            <div>
              <Link
                to="/"
                className="login-logout"
                onClick={() => this.props.logout()}
              >
                <span className="login-logout">Logout</span>
              </Link>
              <Link to={`/dashboard/${this.props.user.id}`}>
                <span>Dashboard</span>
              </Link>
              <span className="username">{this.props.user.name}</span>
            </div>
          )}
          <div className="dropdown">
            <button type="submit" className="dropbtn">
              Recipes
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <Link to="/recipes">
                <span>Recipes</span>
              </Link>
              <Link to="/juices">
                <span>Juices & smoothies</span>
              </Link>
              <Link to="/add-recipe">
                <span>Add you own recipe</span>
              </Link>
            </div>
          </div>
        </div>
        <Toolbar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          webScrapeUrl={this.state.webScrapeUrl}
          search={this.state.search}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  scrapedRecipe: url => dispatch(scrapedRecipe(url, history)),
  logout: () => dispatch(logout())
});

const mapStateToProps = state => ({
  recipe: state.recipe,
  isLoggedIn: !!state.user.id,
  user: state.user
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
);
