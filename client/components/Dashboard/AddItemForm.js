import React from "react";

const AddItemForm = props => {
  return (
    <form onSubmit={props.handleSubmit} autoComplete="off" className="add-item-form">
      <input
        type="text"
        name="name"
        value={props.name}
        onChange={props.handleChange}
        placeholder="Enter item name"
        className="add-item-form-input"
      />
      <div className="add-item-form-checkbox-container">
      <span>Is it a personal item?</span>
      <input type="checkbox" name="personalItem" value={props.personalItem} />
      </div>
      <button type="submit" className="shopping-list-form-btn">
        Add
      </button>
    </form>
  );
};

export default AddItemForm;
