import React from "react";

const Recipe = ({ recipe }) => {
  const { title, photoUrl } = recipe;
  // console.log(recipe);
  return (
    <div className="px-2 mx-2">
      <img className="rounded-full" src={photoUrl} alt="" />
      <h4 className="text-3xl text-center font-semibold hover:text-5xl hover:text-stone-500 ">
        {title}
      </h4>
    </div>
  );
};

export default Recipe;
