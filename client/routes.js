import React, { Component } from 'react'
import { NewRecipe, HomePage, Login } from './components'
import { gotRecipes } from './store/recipe'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';


class Routes extends Component {
  constructor(){
    super()

    this.state = {
      allRecipes: []
    }
  }

  componentDidMount() {
  this.props.gotRecipes()
  }



  render() {
    return (
      <div>
      <Route path='/login' component={Login} />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/home' component={HomePage} />
      <Route path='/new-recipe' component={NewRecipe} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
})

const mapDispatchToProps = dispatch => ({
  gotRecipes: () => dispatch(gotRecipes())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))
