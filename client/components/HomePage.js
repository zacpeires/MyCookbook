import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    const recipes = this.props.recipe.allRecipes;
    if (!recipes.length) {
      return <div />;
    }

    return (
      <div className="homepage-container">
        <div className="recipe-tiles">
          {recipes.map(recipe => {
            return <div className="recipe-tile" key={recipe.name}>
            <Link to={`/recipes/${recipe.id}`}>
              <div className="recipe-tile-name">{recipe.name}</div>
            </Link>
            </div>;
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
