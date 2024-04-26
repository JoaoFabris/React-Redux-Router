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
        {favorites?.map((pokemonOrArray, index) => (
          <FavPokCard
            key={index}
            pokemon={Array.isArray(pokemonOrArray) ? pokemonOrArray[0] : pokemonOrArray}
          />
        ))}
      </div>
    </div>
  );
}


export default FavsPokemon;
