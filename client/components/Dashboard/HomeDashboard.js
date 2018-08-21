import React, { Component } from "react";
import { connect } from "react-redux";
import { gotHomeRecipes } from "../../store";
import { Link } from "react-router-dom";



class HomeDashboard extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.gotHomeRecipes(this.props.userId);
  }

  render() {
    const homeRecipes = this.props.favourites.homeFavourites.recipes;

    return (
      <div className="home-card dashboard-card">
        <span>Home recipes</span>
        <ul className="user-recipes-list">
          { homeRecipes ? homeRecipes.map(recipe => {
            return (
              <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
              <li className="indi-recipes">
                {recipe.name}
              </li>
              </Link>
            );
          }) : <div>No recipes are currently saved to this account</div>
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
  gotHomeRecipes: id => dispatch(gotHomeRecipes(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeDashboard);
