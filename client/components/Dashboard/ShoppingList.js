import React, { Component } from 'react'
// import AddItemForm from '../Dashboard'
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
  }


  componentDidMount() {
    this.props.gotShoppingList(this.props.userId)
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
      <div>My shopping-list</div>
      <button type='input'>Add item</button>




{/*
      {shoppingList.length ? } */}

      {/* { !this.state.showForm ?
      <AddItemForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} /> : <div />
      } */}
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
