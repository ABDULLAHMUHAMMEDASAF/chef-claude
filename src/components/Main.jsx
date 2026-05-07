import React from "react";
import "./Main.css";
import Pad from "../components/Pad.jsx";

//! --------
import padData from "../pads.js";
import Button from "../components/Button.jsx";

function Main() {
  const [pads, setPads] = React.useState(padData);
  const [ingredients, setIngredients] = React.useState([]);
  const ingredientsListItems = ingredients.map((item, index) => (
    <li key={index}>{item}</li>
  ));

  const padList = pads.map((p) => (
    <Pad
      key={p.id}
      color={p.color}
      on={p.on}
      onClick={() => {
        console.log(p.id);
      }}
    />
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
      <div className="container">{padList}</div>
      <Button text={"Merhaba Button"} variant={"secondary"} />
    </main>
  );
}

export default Main;
