import React from "react";


const Toolbar = props => {

    return (
      <div className="toolbar">
        <div className="web-scrape">
          <form autoComplete="off" onSubmit={props.handleSubmit}>
            <input
              type="text"
              name="webScrapeUrl"
              value={props.webScrapeUrl}
              onChange={props.handleChange}
              placeholder="  enter URL"
            />
            <button className="toolbar-btn" type="submit">
              Add recipe
            </button>
          </form>
        </div>
        <div className="searchbar">
          <form autoComplete="off" onSubmit={props.handleSubmit}>
            <input
              type="text"
              name="search"
              value={props.search}
              onChange={props.handleChange}
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
