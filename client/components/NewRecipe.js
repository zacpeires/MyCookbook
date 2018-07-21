import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewRecipe extends Component {
  constructor() {
    super()

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

})

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe)
