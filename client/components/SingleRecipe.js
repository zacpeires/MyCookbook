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


  componentDidMount() {
    const recipes = this.props.recipe
    if (recipes.scrapedRecipe) {
      this.setState({
        recipe: recipes.scrapedRecipe.id
      })
    } else {
     const recipe = this.props.getRecipe(this.props.match.params.recipeId)
     this.setState({
       recipe: recipe
     })
    }
  }


  render() {
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
