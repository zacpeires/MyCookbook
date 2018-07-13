import React, { Component } from 'react'
import { WebscrapedData } from './components'
import { gotRecipes } from '../store/recipe'
import { connect } from 'react-redux'

class Routes extends Component {
  constructor(){
    super()

    this.state = {
      allRecipes: []
    }
  }

  componentDidMount() {
    const recipes = this.props.gotRecipes()
    this.setState({
      allRecipes: recipes
    })
  }


  render() {
    return (
      <div>
      {/* <Route path='/login' component={Login} />
      <Route path='/home' component={Home} />
      <Route path='/new-recipe' component={WebscrapedData} /> */}
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  gotRecipes: () => dispatch(gotRecipes)
})

connect(null, mapDispatchToProps)(Routes)
