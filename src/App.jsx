import "./App.css";
import Home from "./pages/home/home";
import Favourite from "./pages/favourites/favourite";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Details from "./pages/details/detail";
function App() {
  return (
    <>
      <div className="text-grey-600 min-h-screen p-6 bg-white text-lg">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourite />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
