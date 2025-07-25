// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, removeIngredient }) => {
  return (
    <>
      <ul>
        {stack.map((ingredient) => (
          <li>
            <button onClick={() => removeIngredient(ingredient)}>
              {ingredient.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BurgerStack;
