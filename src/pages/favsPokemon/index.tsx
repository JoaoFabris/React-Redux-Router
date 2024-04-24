import React from "react";
import { CiHeart } from "react-icons/ci";

function FavsPokemon() {
  return (
    <div>
      <h1> favs</h1>
      <CiHeart />
    </div>
  );
}

export default FavsPokemon;

{/* <button className="favs" onClick={() => handleToggleFav(selectedPokemon)}>
          {favorites.includes(selectedPokemon) ? "Remove" : "Fav"}
        </button> */}