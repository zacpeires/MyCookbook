import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <div className="toolbar">
          <div className="web-scrape">
            <form autoComplete="off">
              <input
                type="text"
                name="web-scrape"
                className="web-scrape"
                placeholder="  enter URL"
              />
              <button className="toolbar-btn" type="submit">Add recipe</button>
            </form>
          </div>
          <div className="searchbar">
            <form autoComplete="off">
              <input
                type="text"
                name="search"
                className="web-scrape"
                placeholder="  Search recipes"
              />
              <button className="toolbar-btn" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
