import { useContext } from "react";

import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
export default function NavBar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center container py-5 mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl border-none">
        <NavLink to={"/"}>FoodRecipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit} action={"./"}>
        <input
          type="text"
          placeholder="Enter item"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          className="rounded-full px-8 bg-white/75 outline-none p-3 lg:w-96 shadow-lg shadow-gray-400 focus:shadow-gray-500"
        />
      </form>
      <ul className="flex gap-5">
        <li className="hover:text-gray-500 duration-300">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="hover:text-gray-500">
          <NavLink to={"/favourites"}>Favourites</NavLink>
        </li>
      </ul>
    </nav>
  );
}
