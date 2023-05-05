import React from 'react';
import { BiLike } from "react-icons/bi";
import { Link } from 'react-router-dom';
import LazyLoad from "react-lazyload";

const Category = ({ category }) => {
    const {id, picture, name, experience, likes, number_of_recipes,recipeName } = category;
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <LazyLoad>
            {" "}
            <img src={picture} alt="Shoes" className="rounded-xl" />
          </LazyLoad>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>Experience :{experience}</p>
          <p>Number Of Recipes: {number_of_recipes}</p>

          <div className="flex items-center gap-2">
            <span>Likes: {likes} </span> <BiLike></BiLike>
          </div>
          <div className="card-actions">
            <Link to={`categories/${id}`}>
              <button className="btn btn-outline ml-4 w-full">
                Show Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
