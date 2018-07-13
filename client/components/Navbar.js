import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Toolbar } from '../components'
import { connect } from "react-redux"
import { WebscrapedData} from '../components'
import { scrapedRecipe } from "../store/recipe"

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      webScrapeUrl: "",
      search: "",

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderRecipe = this.renderRecipe.bind(this)
  }



  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.webScrapeUrl)
     const recipe = await this.props.scrapedRecipe({recipe: this.state.webScrapeUrl})

     this.renderRecipe()
  }

  renderRecipe() {
    console.log(this.props)
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
        handleChange={this.handleChange} handleSubmit={this.handleSubmit}
        webScrapeUrl={this.state.webScrapeUrl} search={this.state.search} />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  scrapedRecipe: (url) => dispatch(scrapedRecipe(url))
})

const mapStateToProps = state => ({
  recipe: state.recipe
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
