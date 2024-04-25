import { useSelector } from "react-redux";
import { ReduxState } from "../../types";
import FavPokCard from "../../components/FavPokCard";
import './index.css'

function FavsPokemon() {
  const { favorites } = useSelector((state: ReduxState) => state);

  return (
    <div>
      <h2>My Favorite Pokémon</h2>
      <div className="favorites-container">
        {/* Map through favorites and render FavoritePokCard */}
        {favorites.map((pokemon, index) => (
          <FavPokCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default FavsPokemon;
