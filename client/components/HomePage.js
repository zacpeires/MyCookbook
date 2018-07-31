import React, { Component } from "react";
import { connect } from "react-redux";

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
            return <div className="recipe-tile" key={recipe.name}>{recipe.name}</div>;
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
