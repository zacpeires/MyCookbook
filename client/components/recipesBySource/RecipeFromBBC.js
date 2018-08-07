import React from "react";
import { Link } from "react-router-dom"

const RecipeFromBBC = ({
  name,
  description,
  details,
  nutrition,
  ingredients,
  method,
  showAddCuisineForm,
  cuisines,
  saveRecipeToUser,
  saveRecipeToHome
}) => {
  return (
    <div className="recipe-card">
      <div className="recipe-save-btns">
        <button type="submit" onClick={saveRecipeToUser}>Save recipe to favourites</button>
        <button type="submit" onClick={saveRecipeToHome}>Save to home</button>
      </div>
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
        <div>
          Food type or cuisine:
          {cuisines.length ? (
            cuisines.map(cuisine => {
              return (
                <Link to={`/cuisines/${cuisine.type}`}  key={cuisine.type} >
                <span className="cuisine-labels">
                  {" " + cuisine.type + " "}
                </span>
                </Link>
              );
            })
          ) : (
            <div />
          )}
          <button type="submit" onClick={showAddCuisineForm}>
            Add a label
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeFromBBC;
