import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://master-chef-server-ashik-faysal.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="px-2 mx-2">
      <h1 className="text-5xl font-extrabold text-center text-stone-500">
        Our Section
      </h1>
      <div className="grid md:grid-cols-4 my-8 shadow-2xl">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Foods;
