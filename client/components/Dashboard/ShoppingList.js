import React, { Component } from 'react'
import { AddItemForm } from '../Dashboard'
import { addedItem, gotShoppingList } from '../../store'
import { connect } from 'react-redux'

class ShoppingList extends Component {
  constructor() {
    super()

    this.state = {
      showForm: false,
      personalItem: false,
      name: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showForm = this.showForm.bind(this)
  }


  componentDidMount() {
    // this.props.gotShoppingList(this.props.userId)
  }

  showForm() {
    this.setState({
      showForm: true
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addedItem(this.props.userId, {name: this.state.name, personal: this.state.personalItem})

    this.setState({
      showForm: false,
      personalItem: false,
      name: ''
    })
  }


  render() {

    const shoppingList = this.props.shoppingList

    return (
      <div className="shopping-list dashboard-card">
      <div className="shopping-list-title">My shopping-list</div>

      <div className="shopping-list-form-container">
      <button type='input' onClick={this.showForm}>Add item</button>


       { this.state.showForm ?
      <AddItemForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} name={this.state.name} personalItem={this.state.personalItem} /> : <div />
      }
      </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  shoppingList: state.shoppingList,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  gotShoppingList: (id) => dispatch(gotShoppingList(id)),
  addedItem: (id, item) => dispatch(addedItem(id, item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)
