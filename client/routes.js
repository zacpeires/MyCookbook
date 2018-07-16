import React, { Component } from 'react'
import { WebscrapedData, HomePage, Login } from './components'
import { gotRecipes } from './store/recipe'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

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
      <Route path='/' component={HomePage} />
      {/* <Route path='/new-recipe' component={WebscrapedData} />  */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
