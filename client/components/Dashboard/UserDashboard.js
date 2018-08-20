import React, { Component } from "react";
import { connect } from "react-redux";
import { gotUserRecipes } from "../../store"

class UserDashboard extends Component {
  constructor() {
    super();

    this.state = {
      userObjectWithFavourites: {}
    };
  }

  componentDidMount() {
    this.props.gotUserRecipes(this.props.userId)
  }


  render() {

const userRecipes = this.props.favourites.userFavourites.recipes

if (!userRecipes) {
  return <div />
}

    return (
      <div className="user-card dashboard-card">
      <span>User recipes</span>
      <ul className="user-recipes-list">
        {
          userRecipes.map(recipe => {
            return (
              <li className="indi-recipes" key={recipe.id}>{recipe.name}</li>
            )
          })
        }
        </ul>
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
