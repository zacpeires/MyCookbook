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
  showAddCuisineForm,
  hideAddCuisineForm,
  cuisines

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
        <div>Food type or cuisine:
        { cuisines.length ?
        cuisines.map(cuisine => {
          return (
            <span className="cuisine-labels" key={cuisine.type}>{' ' + cuisine.type + ' '}</span>
          )
         }) : <div />
        }
               <button type="submit" onClick={showAddCuisineForm}>Add a label</button>
      </div>
        </div>
      {/* <Link to={url}>
        <div className="recipe-url">{url}</div>
      </Link> */}
    </div>
  );
};

export default RecipeFromBBC;
