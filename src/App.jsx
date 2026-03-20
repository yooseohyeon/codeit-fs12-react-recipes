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

  return (
    <div>
      <h1>레시피</h1>
      <ul>
        {recipes.map((r) => (
          <li key={r.id}>
            <h3>{r.name}</h3>
            <ul>
              {r.ingredients.map((ingredient, idx) => (
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
