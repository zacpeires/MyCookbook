import React, { Component } from "react";
import { connect } from "react-redux";
import { gotSingleRecipe } from "../store";
import { RecipeFromBBC } from "./recipesBySource";
import { formatMethod } from "./recipesBySource/functions"

class NewRecipe extends Component {
  constructor() {
    super();

    this.state = {
      recipe: {}
    };
  }

  async componentDidMount() {
    const recipes = this.props.recipe;
    if (!recipes.singleRecipe.id) {
      await this.props.getRecipe(this.props.match.params.recipeId);
    }

    let currentRecipe = this.props.recipe.singleRecipe;

    if (currentRecipe.url.includes("bbc")) {
      const edittedRecipe = formatMethod(currentRecipe);
      currentRecipe = edittedRecipe
    }

    this.setState({
      recipe: currentRecipe
    })
  }

  render() {
    const recipe = this.state.recipe;
    const {
      name,
      description,
      details,
      nutrition,
      ingredients,
      method,
      url
    } = recipe;

    if (!this.state.recipe.name) {
      return <div />
    }

    return (
      <div className="single-recipe-container">
         <RecipeFromBBC
          name={name}
          description={description}
          details={details}
          nutrition={nutrition}
          ingredients={ingredients}
          method={method}
          url={url}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
});

const mapDispatchToProps = dispatch => ({
  getRecipe: id => dispatch(gotSingleRecipe(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRecipe);
