import React, { Component } from "react";
import { connect } from "react-redux"

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="home-card dashboard-card"/>

        <div />
        <div className="user-card dashboard-card"/>

        <div />
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


export default connect(mapStateToProps)(Dashboard)
