import { Dispatch, PokemonType } from "../../types";

export const ActionTypes = {
  REQUEST_STARTED: "REQUEST_STARTED",
  REQUEST_SUCCESSFUL: "REQUEST_SUCCESSFUL",
  REQUEST_FAILED: "REQUEST_FAILED",
  SELECT_POKEMON: "SELECT_POKEMON",
  ADD_FAVORITE: "ADD_FAVORITE",
  REMOVE_FAVORITE: "REMOVE_FAVORITE",
  // Add other action types as needed
};

function requestStarted() {
  return { type: ActionTypes.REQUEST_STARTED };
}

function requestSuccessful(pokemon: PokemonType[]) {
  return {
    type: ActionTypes.REQUEST_SUCCESSFUL,
    pokemon,
  };
}

function requestFailed(error: unknown) {
  return {
    type: ActionTypes.REQUEST_FAILED,
    error,
  };
}

export function addFavorite(pokemon: PokemonType) {
  return {
    type: ActionTypes.ADD_FAVORITE,
    pokemon,
  };
}

export function removeFavorite(pokemon: PokemonType) {
  return {
    type: ActionTypes.REMOVE_FAVORITE,
    pokemon,
  };
}

export function selectPokemon(selectedPokemon: PokemonType) {
  return {
    type: ActionTypes.SELECT_POKEMON,
    selectedPokemon,
  };
}

export function fetchPokemonApi() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());

      const pokemons = [];
      const numbers: number[] = [];
      for (let i = 1; i < 20; i++) {
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        if (!numbers.includes(randomNumber)) {
          numbers.push(randomNumber);
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`
          );
          const data = await response.json();
          pokemons.push(data);
        }
      }
      dispatch(requestSuccessful(pokemons));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
}
