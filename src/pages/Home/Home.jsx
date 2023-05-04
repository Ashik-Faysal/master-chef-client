import React from "react";
import { Link } from "react-router-dom";
import Categories from "../shared/Categories";
import Foods from "./Foods";
import Recipies from "./Recipies";

const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <img
              className="hidden md:block"
              src="https://plus.unsplash.com/premium_photo-1661721831979-086002e54958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoZWYlMjBjb29raW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Master Chef</h1>
            <p className="mb-5 font-semibold">
              Master Chef is an online platform dedicated to providing culinary
              enthusiasts with access to the latest recipes, cooking tips, and
              techniques from top chefs around the world. Our website is
              designed to inspire and educate, with a focus on creating
              delicious and healthy meals at home.
            </p>
            <button className="btn btn-primary">
              <Link to="/categories">Get Start</Link>
            </button>
          </div>
        </div>
      </div>
      <Categories />
      <Foods />
      <Recipies />
    </>
  );
};

export default Home;
