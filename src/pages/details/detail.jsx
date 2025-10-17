import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context";
import { Lia500Px } from "react-icons/lia";
export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favouritesList,
    handleAddToFavourites,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();
        if (data?.data?.recipe) {
          setRecipeDetailsData(data.data.recipe);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap:10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.image_url}
            alt="recipe item"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 mx-5">
        <span className="text-sm text-cyan-800 font-medium mx6">
          {recipeDetailsData?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate mb-2">
          {recipeDetailsData?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavourites(recipeDetailsData)}
            className="p-3 rounded-lg px-8 font-medium tracking-wider  inline-block shadow-md bg-black text-white cursor-pointer text-sm uppercase"
          >
            {favouritesList &&
            favouritesList.length > 0 &&
            favouritesList.findIndex(
              (item) => item.id === recipeDetailsData.id
            ) !== -1
              ? "Remove from Favourites"
              : "Save as Favourites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold">Ingredients:</span>
          <br />
          <div className="my-10"></div>
          <ul className="flex flex-col gap-3 px-5">
            {recipeDetailsData?.ingredients.map((item) => (
              <li className="list-decimal ">
                <span className="text-md font-medium">
                  {item.quantity} {item.unit}{" "}
                </span>
                <span className="text-1xl font-medium">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
