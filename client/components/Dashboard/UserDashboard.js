import React, { Component } from "react";
import { connect } from "react-redux";
import { gotUserRecipes } from "../../store";
import { Link } from "react-router-dom";


class UserDashboard extends Component {
  componentDidMount() {
    this.props.gotUserRecipes(this.props.userId);
  }

  render() {
    const userRecipes = this.props.favourites.userFavourites.recipes;

    return (
      <div className="user-card dashboard-card">
        <span>User recipes</span>
        <ul className="user-recipes-list">
          {userRecipes ? userRecipes.map(recipe => {
            return (
              <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
              <li className="indi-recipes">
                {recipe.name}
              </li>
              </Link >
            );
          }) : <div className="no-recipes-on-dashboard
          ">No recipes are currently saved to this account</div>
        }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  favourites: state.favourites
});

const mapDispatchToProps = dispatch => ({
  gotUserRecipes: id => dispatch(gotUserRecipes(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDashboard);
