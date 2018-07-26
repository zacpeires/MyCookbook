import React, { Component } from 'react'
import { connect } from 'react-redux'
import { gotSingleRecipe } from "../store"

class NewRecipe extends Component {
  constructor() {
    super()

    this.state = {
      recipe: {}
    }
  }


  async componentDidMount() {
    const recipes = this.props.recipe
    if (recipes.singleRecipe.id) {
      this.setState({
        recipe: recipes.scrapedRecipe.id
      })
    } else {
    await this.props.getRecipe(this.props.match.params.recipeId)
     console.log(recipes)
     this.setState({
       recipe: recipes.singleRecipe
     })
    }
  }


  render() {
    console.log(this.state.recipe)

    return (
      <div />
    )
  }
}


const mapStateToProps = state => ({
  recipe: state.recipe
})

const mapDispatchToProps = dispatch => ({
  getRecipe: (id) => dispatch(gotSingleRecipe(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe)
