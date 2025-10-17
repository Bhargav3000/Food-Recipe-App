import { useContext } from "react";
import { GlobalContext } from "../../context";
import { Lia500Px } from "react-icons/lia";
import RecipeItem from "../../components/recipe-item/recipe-item";

export default function Home() {
  const { searchParam, loading, recipeList } = useContext(GlobalContext);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {loading ? (
        <h1 className="text-center">Loading data...</h1>
      ) : recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div className="lg:text-4xl font-bold text-xl text-center">
          Search for a recipe
        </div>
      )}
    </div>
  );
}
