import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { gotSingleRecipe, addedCuisineToRecipe, recipeBelongsToUser, recipeBelongsToHome} from "../store";
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
    this.saveRecipeToUser = this.saveRecipeToUser.bind(this)
    this.saveRecipeToHome = this.saveRecipeToHome.bind(this)
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
    this.setState({
      recipe: recipe
    })
  }

  saveRecipeToUser() {
    const userId = this.props.user.id
    const recipeName = this.state.recipe.name
    this.props.recipeBelongsToUser(userId, recipeName)
  }

  saveRecipeToHome() {
    const homeId = this.props.user.homeId
    const recipeName = this.state.recipe.name
    this.props.recipeBelongsToHome(homeId, recipeName)
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
          user={this.props.user}
          name={name}
          description={description}
          details={details}
          nutrition={nutrition}
          ingredients={ingredients}
          method={method}
          url={url}
          cuisines={cuisines}
          showAddCuisineForm={this.showAddCuisineForm}
          saveRecipeToUser={this.saveRecipeToUser}
          saveRecipeToHome={this.saveRecipeToHome}
        />
        {
          this.state.showAddForm ?
          <AddCuisineForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}         hideAddCuisineForm={this.hideAddCuisineForm} />
           : <div />
        }
      {/* <Link to={url}>
        <div className="recipe-url">{url}</div>
      </Link> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getRecipe: id => dispatch(gotSingleRecipe(id)),
  addedCuisineToRecipe: (cuisine) => dispatch(addedCuisineToRecipe(cuisine)),
  recipeBelongsToUser: (user, recipe) => dispatch(recipeBelongsToUser(user, recipe)),
  recipeBelongsToHome: (home, recipe) => dispatch(recipeBelongsToHome(home, recipe))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRecipe);
