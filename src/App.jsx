// src/App.jsx

import { useState } from "react";
import "./App.css";
import BurgerStack from "./components/BurgerStack/BurgerStack";
import IngredientList from "./components/IngredientList/IngredientList";

const App = () => {
  const availableIngredients = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Cheddar Cheese", color: "#FDE18B" },
    { name: "Swiss Cheese", color: "#F1E1A8" },
  ];

  const [stack, setStack] = useState([]);

  const [ingredients, setIngredients] = useState(availableIngredients);

  const addIngredient = (newIngredient) => {
    setStack([...stack, newIngredient]);
    const newIngredientArr = ingredients.filter(
      (ingredient) => ingredient.name !== newIngredient.name
    );
    setIngredients(newIngredientArr);
  };

  const removeIngredient = (oldIngredient) => {
    setIngredients([...ingredients, oldIngredient]);
    const newStackArr = stack.filter(
      (ingredient) => ingredient.name !== oldIngredient.name
    );
    setStack(newStackArr);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          ingredients={ingredients}
          addIngredient={addIngredient}
        />
        <BurgerStack stack={stack} removeIngredient={removeIngredient}/>
      </section>
    </main>
  );
};

export default App;
