import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Toolbar } from '../components'

class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <Link to="/home">
            <span>Home</span>
          </Link>
          <Link to="/user">
            <span>Dashboard</span>
          </Link>
          <div className="dropdown">
            <button className="dropbtn">
              Recipes
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <Link to="/cuisines">
                <span>Cuisines</span>
              </Link>
              <Link to="/dishes">
                <span>Dishes</span>
              </Link>
              <Link to="/drinks">
                <span>Cocktails & drinks</span>
              </Link>
              <Link to="/add-recipe">
                <span>Add a recipe</span>
              </Link>
            </div>
          </div>
        </div>
        <Toolbar />
      </div>
    );
  }
}

export default Navbar;
