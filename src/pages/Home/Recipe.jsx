import React from 'react';

const Recipe = ({ recipe }) => {
    const { title, photoUrl } = recipe;
    console.log(recipe);
    return (
      <div>
        <img className="rounded-full" src={photoUrl} alt="" />
        <h4 className="text-3xl text-center font-semibold hover:text-5xl hover:text-stone-500 font-bold">
          {title}
        </h4>
      </div>
    );
};

export default Recipe;