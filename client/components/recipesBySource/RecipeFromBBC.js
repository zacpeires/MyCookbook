import React from "react";
import { Link } from "react-router-dom";

const RecipeFromBBC = ({
  name,
  description,
  details,
  nutrition,
  ingredients,
  method,
  url,
  showRecipeForm
}) => {
  return (
    <div className="recipe-card">
      <div className="recipe-name">{name}</div>
      <div className="recipe-description recipe-center">{description}</div>
      <div className="recipe-details recipe-center">{details}</div>
      <div className="recipe-nutrition recipe-center">
        <span>{nutrition}</span>
      </div>
      <div className="recipe-ingredients">
        <ul>
          {ingredients.map(ingredient => {
            return <li key={ingredient}>{ingredient}</li>;
          })}
        </ul>
      </div>
      <div className="recipe-method">
        <ul>
          {method.map(instruction => {
            return <li key={instruction}>{instruction}</li>;
          })}
        </ul>
      </div>
      <div className="recipe-cuisine recipe-center">
        <span>Food type or cuisine: </span>
        <button type="submit" onClick={showRecipeForm}>Add a label</button>
      </div>
      <Link to={url}>
        <div className="recipe-url">{url}</div>
      </Link>
    </div>
  );
};

export default RecipeFromBBC;
