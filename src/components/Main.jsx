import React from "react";
import "./Main.css";

function Main() {
  //! React.useState();
  const [inputValue, setInputValue] = React.useState("");
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsListItems = ingredients.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  function formHandle() {
    setIngredients((prev) => [...prev, inputValue]);
  }

  return (
    <main>
      <form action={formHandle} className="add-ingredient-form">
        <input
          placeholder="e.g. oregano"
          type="text"
          aria-label="add-ingredient-form"
          name="ingredient"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul>
          {ingredients.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button>Get a recipe</button>
            </div>
          )}
        </section>
      )}
    </main>
  );
}

export default Main;
