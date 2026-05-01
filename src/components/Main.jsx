import { useState } from "react";
import "./Main.css";

function Main() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsListItems = ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
    e.currentTarget.reset();
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          placeholder="e.g. oregano"
          type="text"
          aria-label="add-ingredient-form"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
export default Main;
