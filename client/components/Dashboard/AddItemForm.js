import React from "react";

const AddItemForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="name"
        value={props.name}
        onChange={props.handleChange}
        placeholder="Add item to list"
      />
      <input type="checkbox" name="personalItem" value={props.personalItem} />
      <button className="login-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddItemForm;
