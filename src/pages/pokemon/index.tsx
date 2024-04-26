import { useDispatch, useSelector } from "react-redux";
import { Dispatch, PokemonType, ReduxState } from "../../types";
import { fetchPokemonApi, selectPokemon } from "../../redux/actions";
import PokCard from "../../components/PokCard";
import { Link } from "react-router-dom";
import "./index.css";

function Pokemon() {
  const { pokemon, isFetching, errorMessage } = useSelector(
    (state: ReduxState) => state
  );

  const dispatch: Dispatch = useDispatch();

  const handlePokemonClick = (selectedPokemon: PokemonType) => {
    console.log("pokemon clicked");
    dispatch(selectPokemon(selectedPokemon));
  };

  if (errorMessage) return <h1>Error!</h1>;
  if (isFetching) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => dispatch(fetchPokemonApi())}>Fetch Pokemon</button>
      <div className="pok-container">
        {pokemon ? (
          pokemon.map((p, key) => (
            <Link key={key} to={`/pokemon/${p.name}`}>
              <PokCard
                name={p.name}
                sprites={{ front_default: p.sprites.front_default }}
                key={key}
                onClick={() => handlePokemonClick(p)}
              />
            </Link>
          ))
        ) : (
          <div>
            <img src="/src/assets/all-pokemon-pictures-bh730s8zr74xsc2p.jpg" alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Pokemon;
