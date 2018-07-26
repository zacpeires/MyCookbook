import React from "react"

const AddCuisineForm = (props) => {
  return (
    <div className="addcuisine-form-container">
          <span>Enter a a food type or description, e.g. 'healthy', 'italian', or 'easy', to add it to the food</span>
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              name="recipe"
              value={props.webScrapeUrl}
              className="addcuisine-input login-input"
              onChange={props.handleChange}
              placeholder="Enter a label"
            />
            <button className="login-btn" type="submit">
              Add to recipe
            </button>
          </form>
    </div>
  )
}

export default AddCuisineForm
