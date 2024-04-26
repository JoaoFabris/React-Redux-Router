// PokCardDetails.tsx

import { useDispatch, useSelector } from "react-redux";
import { Dispatch, PokemonType, ReduxState } from "../../types";
import "./index.css";
import { FaHeart } from "react-icons/fa";
import { addFavorite, removeFavorite } from "../../redux/actions";

function PokCardDetails() {
  const selectedPokemon = useSelector(
    (state: ReduxState) => state.selectedPokemon
  );
  const { favorites } = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();

  const style = { color: "white", fontSize: "2.5em" };
  const style1 = {
    fontSize: "2.5em",
    fill: "red",
  };

  const handleToggleFav = (favorite: PokemonType) => {
    if (favorites?.includes(favorite)) {
      dispatch(removeFavorite(favorite));
    } else {
      dispatch(addFavorite(favorite));
    }
  };

  const isFavorite = selectedPokemon
    ? favorites?.includes(selectedPokemon)
    : false;

  const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };

  if (!selectedPokemon) {
    return null;
  }

  const hp = selectedPokemon.stats[0].base_stat;
  const statAttack = selectedPokemon.stats[1].base_stat;
  const statDefense = selectedPokemon.stats[2].base_stat;
  const statSpeed = selectedPokemon.stats[5].base_stat;
  const type1 = selectedPokemon.types[0]?.type.name; // Access type1 safely
  const type2 = selectedPokemon.types[1]?.type.name; // Access type2 safely
  const type1Color =
    typeColor[selectedPokemon.types[0]?.type.name as keyof typeof typeColor];
  const type2Color =
    typeColor[selectedPokemon.types[1]?.type.name as keyof typeof typeColor];

  return (
    <div className="container">
      <div
        id="card"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${type1Color} 36%, #ffffff 36%)`,
        }}
      >
        <div>
          {/* Conditional rendering of favorite icon */}
          {isFavorite ? (
            <FaHeart 
              style={style1}
              onClick={() => handleToggleFav(selectedPokemon as PokemonType)}
            />
          ) : (
            <FaHeart
              style={style} // Change color for non-favorite icon
              onClick={() => handleToggleFav(selectedPokemon as PokemonType)}
            />
          )}
        </div>
        <p className="hp">
          <span>HP</span>
          {hp}
        </p>
        <img
          className="imgPok"
          src={selectedPokemon.sprites.front_default}
          alt={selectedPokemon.name}
        />
        <h2 className="poke-name">{selectedPokemon.name.toUpperCase()}</h2>
        <div className="types">
          <span style={{ background: type1Color }}>{type1}</span>
          <span style={{ background: type2Color }}>{type2}</span>
        </div>
        <div className="stats">
          <div>
            <h3>{statAttack}</h3>
            <img
              className="imgStats"
              src="/src/assets/sword-duotone.svg"
              alt="sword"
            />
            <p>Attack</p>
          </div>
          <div>
            <h3>{statDefense}</h3>
            <img
              className="imgStats"
              src="/src/assets/shield.svg"
              alt="shield"
            />
            <p>Defense</p>
          </div>
          <div>
            <h3>{statSpeed}</h3>
            <img className="imgStats" src="/src/assets/speed.svg" alt="sword" />
            <p>Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokCardDetails;
