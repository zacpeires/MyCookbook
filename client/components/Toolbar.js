import React, { Component } from "react";



export default class Toolbar extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="toolbar">
        <div className="web-scrape">
          <form autoComplete="off" onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              name="webScrapeUrl"
              value={this.props.webScrapeUrl}
              onChange={this.props.handleChange}
              placeholder="  enter URL"
            />
            <button className="toolbar-btn" type="submit">
              Add recipe
            </button>
          </form>
        </div>
        <div className="searchbar">
          <form autoComplete="off" onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              name="search"
              value={this.props.search}
              onChange={this.props.handleChange}
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


