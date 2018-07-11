import React, { Component } from "react";

class Toolbar extends Component {
  constructor() {
    super();

    this.state = {
      webScrape: "",
      search: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {}



  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="toolbar">
        <div className="web-scrape">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="web-scrape"
              value={this.state.webScrape}
              onChange={this.handleChange}
              placeholder="  enter URL"
            />
            <button className="toolbar-btn" type="submit">
              Add recipe
            </button>
          </form>
        </div>
        <div className="searchbar">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.handleChange}
              placeholder="  Search recipes"
            />
            <button className="toolbar-btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Toolbar;
