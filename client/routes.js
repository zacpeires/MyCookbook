import React, { Component } from 'react'
import { NewRecipe, HomePage, Login, SignUp } from './components'
import { gotRecipes } from './store/recipe'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { me } from './store'

class Routes extends Component {
  constructor(){
    super()

    this.state = {
      allRecipes: []
    }
  }

  componentDidMount() {
  this.props.gotRecipes()
  this.props.userLoggedIn()
  }



  render() {
    return (
      <div>
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/home' component={HomePage} />
      <Route path='/new-recipe' component={NewRecipe} />
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
  userLoggedIn: () => dispatch(me())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes))
