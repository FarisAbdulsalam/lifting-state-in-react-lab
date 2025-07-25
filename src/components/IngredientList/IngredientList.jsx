// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ ingredients, addIngredient }) => {
  return (
    <>
      <ul>
        {ingredients.map((ingredient) => (
          <li>
            <button
              onClick={() => {
                addIngredient(ingredient);
              }}
            >
              {ingredient.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientList;
