import { Link } from "react-router-dom";
import { PokemonType } from "../../types";

function FavsPokemon({ pokemon }: { pokemon: PokemonType }) {
  // Use the pokemon prop as needed
  return (
    <Link to={`/pokemon/${pokemon.name}`}>
    <div className="pokemon-card">
      <p className='pokemon-name'>{pokemon.name.toUpperCase()}</p>
      <img className='pokemon-image' src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
    </Link>
  );
}

export default FavsPokemon;