import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item/recipe-item";
export default function Favourite() {
  const { favouritesList } = useContext(GlobalContext);
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((item) => <RecipeItem key={item} item={item} />)
      ) : (
        <div className="lg:text-4xl font-bold text-xl text-center">
          No Favourites
        </div>
      )}
    </div>
  );
}
