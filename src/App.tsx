import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Pokemon from "./pages/pokemon";
import "./App.css";
import NotFound from "./pages/notFound";
import Layout from "./components/layout";
import About from "./pages/about";
import PokemonDetails from "./pages/pokemonDetails";
import FavsPokemon from "./pages/favsPokemon"; // Corrected import


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="pokemon" element={<Pokemon />} />
          <Route path="about" element={<About />} />
          <Route path="pokemon/:name" element={<PokemonDetails />} />
          <Route path="favorites" element={<FavsPokemon />}/>
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
