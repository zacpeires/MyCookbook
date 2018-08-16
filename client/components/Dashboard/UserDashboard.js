import React, { Component } from "react";
import { connect } from "react-redux";
import { gotUserRecipes } from "../../store"

class UserDashboard extends Component {
  constructor() {
    super();

    this.state = {
      favouriteRecipes: []
    };
  }

  componentDidMount() {
    this.props.gotUserRecipes(this.props.userId)


    const usersRecipes = this.props.favourites

    if (usersRecipes) {

    console.log(usersRecipes)
    }

    // this.setState({
    //  favouriteRecipes: usersRecipes)}
  }



  render() {

    return (
      <div className="user-dashboard-data">
        <div>User</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  favourites: state.favourites
});

const mapDispatchToProps = dispatch => ({
  gotUserRecipes: (id) => dispatch(gotUserRecipes(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDashboard);
