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
    this.showAddCuisineForm = this.showAddCuisineForm.bind(this)
    this.hideAddCuisineForm = this.hideAddCuisineForm.bind(this)
    this.updateRecipe = this.updateRecipe.bind(this)
  }


  async componentDidMount() {
      await this.props.getRecipe(this.props.match.params.recipeId);

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
      label: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const formattedLabel = this.state.label.slice(0, 1).toUpperCase() + this.state.label.slice(1)
    this.props.addedCuisineToRecipe({label: formattedLabel, recipe: this.state.recipe})
    this.setState({
      label: '',
    })
    this.hideAddCuisineForm();
    this.updateRecipe({...this.state.recipe, cuisines: [...this.state.recipe.cuisines, {type: formattedLabel}]})
  }

  showAddCuisineForm() {
    this.setState({
      showAddForm: true
    })
}

  hideAddCuisineForm() {
    this.setState({
      showAddForm: false,
    })
  }

  updateRecipe(recipe) {
    console.log(recipe)

    this.setState({
      recipe: recipe
    })
  }


  render() {
    const {
      name,
      description,
      details,
      nutrition,
      ingredients,
      method,
      url,
      cuisines
    } = this.state.recipe;


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
          cuisines={cuisines}
          hideAddCuisineForm={this.hideAddCuisineForm}
          showAddCuisineForm={this.showAddCuisineForm}
        />
        {
          this.state.showAddForm ?
          <AddCuisineForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} updateRecipe={this.state.updateRecipe} />
           : <div />
        }
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
