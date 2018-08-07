import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class HomePage extends Component {
  constructor() {
    super();


    this.renderImageComponent = this.renderImageComponent.bind(this)
  }

  async renderImageComponent() {
    const recipeImage = await document.getElementById('recipe-image')
    console.log(recipeImage)
  }

  render() {
    const recipes = this.props.recipe.allRecipes;
    const nineRandomRecipes = []

    if (!recipes.length) {
      return <div />;
    }

    return (
      <div className="homepage-container">
        <div className="recipe-tiles">
          {recipes.map(recipe => {
            return (
              <Link to={`/recipes/${recipe.id}`} key={recipe.name}>
                <div className="recipe-tile">
                  <div className="recipe-tile-name">{recipe.name}</div>
                  {/* {!recipe.cuisines.length ?
                  <div/> :
                  <div className="recipe-tile-cuisine cuisine-labels">{recipe.cuisines[0].type}</div>
                  } */}
                </div>
              </Link>
            );
          })}
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
