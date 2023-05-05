import React, { useEffect, useState } from "react";
import { BiHeart, BiLike } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";
import Card from "./Card";

const ShowDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  // const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetch(`https://master-chef-server-ashik-faysal.vercel.app/categories/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((err) => console.error(err));
  }, []);

  // const handleFavorite = () => {
  //   setIsFavorite(true);
  //   toast.success("Chef added to favorites!");
  // };

  return (
    <>
      <div className="p-4">
        <h1 className="text-5xl font-bold text-center text-stone-500 my-4 py-4">
          Chef Details
        </h1>

        <div>
          <div className="md:flex gap-6">
            <img className="w-[30]" src={details.picture} alt="" />
            <div className="w-[70]">
              <h3 className="text-4xl text-center my-4">{details.name}</h3>
              <p>Description: {details.description}</p>
              <p className="my-4">Bio: {details.bio}</p>
              <p>Number Of Recipes: {details.number_of_recipes}</p>
              <p className="my-4">Years of Experience: {details.experience}</p>
              <div className="md:flex justify-between ">
                <div>
                  <div className="flex items-center gap-2">
                    <BiLike></BiLike>
                    <p>{details.likes}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiFillEye />
                    <p>{details.views}</p>
                  </div>
                  {/* <div>
                    <p className="flex gap-2">
                      <Rating
                        style={{ maxWidth: 100 }}
                        value={details.ratings}
                        readOnly
                      />
                      <span>{details.ratings}</span>
                    </p>
                  </div> */}
                </div>
                {/* <div>
                  <button
                    className="btn btn-success"
                    disabled={isFavorite}
                    onClick={handleFavorite}
                  >
                    {isFavorite ? "Added to favorites" : "Favorite chef"}{" "}
                    <BiHeart className="text-red-700"></BiHeart>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <ToastContainer /> */}
      </div>
      <div className="p-2 border">
        {/* <div className="w-[20%] p-1">
          <h4 className="text-stone-500 text-3xl">Recipe_Name:</h4>
          <p>{details.recipeName}</p>
        </div>
        <div className="w-[20%] p-4">
          <h4 className="text-stone-500 text-3xl">Ingredients:</h4>
          <p>{details.ingredients}</p>
        </div>
        <div className="w-[60%] p-4">
          <h4 className="text-stone-500 text-3xl">CookingMethods:</h4>
          <p>{details?.cookingMethods}</p>
        </div> */}
        <Card  details={details}/>
      </div>
    </>
  );
};

export default ShowDetails;
