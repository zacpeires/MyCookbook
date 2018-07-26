import React from "react";

const RecipeFromBBC = ({
  name,
  description,
  details,
  nutrition,
  ingredients,
  method,
  url
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
      <div className="recipe-url">{url}</div>
    </div>
  );
};

export default RecipeFromBBC;
