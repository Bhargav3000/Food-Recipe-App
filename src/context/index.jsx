import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const recipeData = await response.json();

      if (recipeData?.data?.recipes) {
        setRecipeList(recipeData.data.recipes);

        setLoading(false);
        setSearchParam("");
        navigate("/");
      }
      console.log(recipeList);
    } catch (err) {
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavourites(getCurrentRecipeDetails) {
    let cpy = [...favouritesList];
    const index = cpy.findIndex(
      (item) => item.id === getCurrentRecipeDetails.id
    );
    if (index === -1) cpy.push(getCurrentRecipeDetails);
    else cpy.splice(index);

    setFavouritesList(cpy);
  }
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavourites,
        favouritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
