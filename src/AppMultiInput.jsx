import React, { useState } from "react";

const App = () => {
  const [inputs, setInputs] = useState({});
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

  const handleAdd = (id) => {
    const value = inputs[id];

    if (!inputs[id].trim()) return;

    setRecipes(
      recipes.map((recipe) => {
        if (recipe.id === id) {
          const exists = recipe.ingredients.includes(value);

          if (exists) return recipe;

          return {
            ...recipe,
            ingredients: [...recipe.ingredients, value],
          };
        } else {
          return recipe;
        }
      }),
    );

    setInputs((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  const handleCancel = (id) => {
    setInputs((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  const handleChange = (value, id) => {
    setInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div>
      <h1>레시피</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.name}</h3>

            <div>
              <input
                type="text"
                name="ingredient"
                value={inputs[recipe.id] || ""}
                placeholder="재료를 입력하세요."
                onChange={(e) => handleChange(e.target.value, recipe.id)}
              ></input>

              <button type="submit" onClick={() => handleAdd(recipe.id)}>
                재료 추가
              </button>

              <button type="submit" onClick={() => handleCancel(recipe.id)}>
                취소
              </button>
            </div>

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
