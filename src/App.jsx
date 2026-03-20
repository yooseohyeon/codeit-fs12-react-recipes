import React, { useState } from "react";

const App = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "된장찌개",
      ingredients: ["된장", "물", "호박", "고춧가루", "두부", "양파"],
    },
    {
      id: 2,
      name: "김치찌개",
      ingredients: ["김치", "물", "고춧가루", "두부", "양파"],
    },
    {
      id: 3,
      name: "부대찌개",
      ingredients: ["부대", "물", "고춧가루", "두부", "양파"],
    },
  ]);
  const [newIngredient, SetNewIngredients] = useState("");
  const [targetid, setTargetId] = useState(0);

  const handleAdd = (id) => {
    if (!newIngredient.trim()) return;

    setRecipes(
      recipes.map((recipe) => {
        if (recipe.id === id) {
          const exists = recipe.ingredients.includes(newIngredient);

          if (exists) return recipe;

          return {
            ...recipe,
            ingredients: [...recipe.ingredients, newIngredient],
          };
        } else {
          return recipe;
        }
      }),
    );

    SetNewIngredients("");
    setTargetId(0);
  };

  return (
    <div>
      <h1>레시피</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.name}</h3>

            <button type="button" onClick={() => setTargetId(recipe.id)}>
              재료 추가
            </button>

            {recipe.id === targetid && (
              <div>
                <input
                  type="text"
                  name="ingredient"
                  value={newIngredient}
                  placeholder="재료를 입력하세요."
                  onChange={(e) => SetNewIngredients(e.target.value)}
                ></input>
                <button type="submit" onClick={() => handleAdd(recipe.id)}>
                  제출
                </button>
              </div>
            )}
            <ul>
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
