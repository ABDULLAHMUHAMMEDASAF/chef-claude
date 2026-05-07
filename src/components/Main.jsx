import React from "react";
import "./Main.css";

function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

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
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}

export default Main;
