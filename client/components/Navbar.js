import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Toolbar } from "../components";
import { connect } from "react-redux";
import { scrapedRecipe } from "../store";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      webScrapeUrl: "",
      search: "",
      showLoader: false
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
      this.setState({
        showLoader: true
      })

    await this.props.scrapedRecipe({
      recipe: this.state.webScrapeUrl
    });

    this.setState({
      webScrapeUrl: '',
      showLoader: false
    })
  }
  }


  render() {

    return (
      <div>
        <div className="navbar">
          <Link to="/home">
            <span>Home</span>
          </Link>
          <Link to="/user">
            <span>Dashboard</span>
          </Link>
          { !this.props.isLoggedIn ?
          <Link to="/login" className="login-logout">
            <span>Login</span>
          </Link> :
          <Link to="/" className="login-logout">
          <span className="login-logout">Logout</span>
          </Link>
          }
          <div className="dropdown">
            <button type="submit" className="dropbtn">
              Recipes
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <Link to="/cuisines">
                <span>Cuisines</span>
              </Link>
              <Link to="/dishes">
                <span>Dishes</span>
              </Link>
              <Link to="/drinks">
                <span>Cocktails & drinks</span>
              </Link>
              <Link to="/add-recipe">
                <span>Add a recipe</span>
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
        {this.state.showLoader ?
        <div className="loader" /> :
        <div />
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const history = ownProps.history
  return {
  scrapedRecipe: url => dispatch(scrapedRecipe(url, history))
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe,
  isLoggedIn: !!state.user.id,
  user: state.user
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
