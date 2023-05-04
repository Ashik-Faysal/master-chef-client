import React from "react";

const FoodCard = ({ food }) => {
  const { title, image, description } = food;
  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl hover:bg-slate-500 hover:text-rose-200">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
