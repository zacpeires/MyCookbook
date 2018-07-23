import React, { Component } from 'react'
import { SingleRecipe, HomePage, Login, SignUp } from './components'
import { gotRecipes } from './store/recipe'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { me } from './store'

class Routes extends Component {

  componentDidMount() {
  this.props.gotRecipes()
  this.props.loadUserData()
  }



  render() {
    return (
      <div>
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/home' component={HomePage} />
      <Route path='/recipes/:recipeId' component={SingleRecipe} />
      <Route exact path='/new-user' component={SignUp} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
})

const mapDispatchToProps = dispatch => ({
  gotRecipes: () => dispatch(gotRecipes()),
  loadUserData: () => dispatch(me())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))
