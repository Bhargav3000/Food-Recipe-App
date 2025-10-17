import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 overflow-hidden flex justify-center items-center rounded-xl">
        <img src={item?.image_url} className="block w-full" />
      </div>
      <div>
        <span className="text-sm text-cyan-800 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate mb-2">{item?.title}</h3>
        <Link
          to={`/recipe-item/${item.id}`}
          className="text-sm mt-3 bg-black text-white p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
