import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor() {
    super();


    this.renderImageComponent = this.renderImageComponent.bind(this)
    this.recipeUrlEdit = this.recipeUrlEdit.bind(this)
  }

  async renderImageComponent() {
    const recipeImage = await document.getElementById('recipe-image')
    console.log(recipeImage)
  }

  recipeUrlEdit(url) {
    if (url.includes('bbc')) {
      return url.slice(12, 15).toUpperCase() + ' Good Food'
      }
  }


  render() {
    console.log()

    const recipes = this.props.recipe.allRecipes;
    const nineRandomRecipes = []

    return (
      <div className="homepage-container">
        <div className="sites-supported-container">
          <div className="sites-supported-internal">
          <div className="supported-list">
            <ul>
              <li className="currently-supported-title">Currently supported: </li>
              <a target="_blank" href="http://bbcgoodfood.com/">
              <li
              className="currently-supported-list">BBC Goodfood
              </li>
              </a>
              <a target="_blank" href="http://www.foodnetwork.co.uk/?utm_source=foodnetwork.com&utm_medium=domestic">
              <li className="currently-supported-list bottom-of-list">Food Network</li>
              </a>
            </ul>
          </div>
          </div>
        </div>
        <div className="recipe-tiles">
          { recipes.length ?

            recipes.map(recipe => {
            return (
              <Link to={`/recipes/${recipe.id}`} key={recipe.name}>
                <div className="recipe-tile">
                  <div className="recipe-tile-name">{recipe.name}</div>
                  <div className="bbc-title homepage-recipe-url-title">{this.recipeUrlEdit(recipe.url)}</div>
                </div>
              </Link>
            );
          })
         : <div className="no-recipes">There are currently no recipes listed. Add a recipe, or scrape from the web</div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
});

export default connect(
  mapStateToProps,
  null
)(HomePage);
