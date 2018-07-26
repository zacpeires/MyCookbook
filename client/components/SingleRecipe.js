import React, { Component } from "react";
import { connect } from "react-redux";
import { gotSingleRecipe, addedCuisineToRecipe } from "../store";
import { RecipeFromBBC } from "./recipesBySource";
import { formatMethod } from "./recipesBySource/functions"
import { AddCuisineForm } from '../components'

class NewRecipe extends Component {
  constructor() {
    super();

    this.state = {
      recipe: {},
      label: '',
      showAddForm: false
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.showRecipeForm = this.showRecipeForm.bind(this)
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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addedCuisineToRecipe(this.state.label)
    this.setState({
      label: ''
    })
  }

  showRecipeForm() {
    const form = document.getElementById ("addcuisine-form-container")

    if (form.style.visibility === "hidden") {
      form.style.visibility = "show";
  }
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
      url,
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
          showRecipeForm={this.showRecipeForm}
        />
        <AddCuisineForm handleSubmit={this.handleSubmit} handleChange={this.handleChang} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
});

const mapDispatchToProps = dispatch => ({
  getRecipe: id => dispatch(gotSingleRecipe(id)),
  addedCuisineToRecipe: (cuisine) => dispatch(addedCuisineToRecipe(cuisine))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRecipe);
