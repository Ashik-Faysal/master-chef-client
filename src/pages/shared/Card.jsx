import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { BiHeart, BiLike } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ details }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(true);
    toast.success("Chef added to favorites!");
  };

  const { ratings } = details;
  return (
    <div className="grid md:grid-cols-3">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://images.unsplash.com/photo-1599749011811-d9044d5cf850?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVjaXBpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Recipe name : Creambeef</h2>
          <div>
            <h4 className="text-3xl text-stone-500">Ingredients</h4>
            <ul>
              <li>Beef </li>
              <li>Tenderloinegg</li>
              <li>Noodlessour</li>
              <li>Creambeef</li>
              <li>Brothmushrooms</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mx-auto gap-8">
          <p className="flex gap-2">
            <Rating style={{ maxWidth: 100 }} value="4.7" readOnly />
            <span>4.7</span>
          </p>
          <div>
            <button
              className="btn btn-success"
              disabled={isFavorite}
              onClick={handleFavorite}
            >
              {isFavorite ? "Added to favorites" : "Favorite chef"}{" "}
              <BiHeart className="text-red-700"></BiHeart>
            </button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://images.unsplash.com/photo-1635315323938-4ef384d94a22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVjaXBpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Recipe name : Brothmushrooms</h2>
          <div>
            <h4 className="text-3xl text-stone-500">Ingredients</h4>
            <ul>
              <li>Beef </li>
              <li>Tenderloinegg</li>
              <li>Noodlessour</li>
              <li>Creambeef</li>
              <li>Brothmushrooms</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mx-auto gap-8">
          <p className="flex gap-2">
            <Rating style={{ maxWidth: 100 }} value={4.2} readOnly />
            <span>{4.2}</span>
          </p>
          <div>
            <button
              className="btn btn-success"
              disabled={isFavorite}
              onClick={handleFavorite}
            >
              {isFavorite ? "Added to favorites" : "Favorite chef"}{" "}
              <BiHeart className="text-red-700"></BiHeart>
            </button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Recipe name : Carbonara Vegetarian</h2>
          <div>
            <h4 className="text-3xl text-stone-500">Ingredients</h4>
            <ul>
              <li>Beef </li>
              <li>Tenderloinegg</li>
              <li>Noodlessour</li>
              <li>Creambeef</li>
              <li>Brothmushrooms</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mx-auto gap-8">
          <p className="flex gap-2">
            <Rating style={{ maxWidth: 100 }} value={3.8} readOnly />
            <span>{3.8}</span>
          </p>
          <div>
            <button
              className="btn btn-success"
              disabled={isFavorite}
              onClick={handleFavorite}
            >
              {isFavorite ? "Added to favorites" : "Favorite chef"}{" "}
              <BiHeart className="text-red-700"></BiHeart>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Card;
