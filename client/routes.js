import React, { Component } from 'react'
import { WebscrapedData, HomePage } from './components'
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
    // const recipes = this.props.gotRecipes()
    // console.log(this.props.recipe)

    // this.setState({
    //   allRecipes: recipes
    // })

    // console.log(this.state)
  }





  render() {
    return (
      <div>
      {/* <Route path='/login' component={Login} /> */}
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
  gotRecipes: () => dispatch(gotRecipes)
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
