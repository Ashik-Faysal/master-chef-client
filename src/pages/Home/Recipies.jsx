import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipies = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://master-chef-server-ashik-faysal.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="my-8">
      <h3 className="text-3xl text-center text-rose-400 font-semibold">
        Choose A Category
      </h3>
      <h1 className="text-5xl text-center text-stone-500 font-bold">
        Recipe Categories
      </h1>
      <div className="grid md:grid-cols-5 gap-2 my-8">
        {recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipies;
