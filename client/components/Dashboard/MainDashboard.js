import React, { Component } from "react";
import { connect } from "react-redux"
import { UserDashboard, HomeDashboard, ShoppingList } from '../Dashboard'


class MainDashboard extends Component {


  render() {
    if (!this.props.user.id) {
      return <div />
    }

    return (
      <div className="dashboard-container">
        <div className="dashboard-title">My Recipes</div>
          <UserDashboard userId={this.props.user.id}/>
          <HomeDashboard userId={this.props.user.id}/>
        <div className="shopping-list dashboard-card"/>
        <div />


      </div>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user,
  recipes: state.recipes
})


export default connect(mapStateToProps)(MainDashboard)
