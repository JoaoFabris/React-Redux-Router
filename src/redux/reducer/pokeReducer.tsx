import { PokemonType, ReduxState } from "../../types";
import { ActionTypes } from "../actions";

const initial_State: ReduxState = {
  isFetching: false,
  pokemon: null,
  errorMessage: null,
  selectedPokemon: null,
  favorites: [],
};

function pokeReducer(
  state: ReduxState = initial_State,
  action: {
    type: string;
    pokemon?: PokemonType[];
    selectedPokemon?: PokemonType;
    error?: string;
    favorites?: PokemonType[];
  }
) {
  switch (action.type) {
    case ActionTypes.REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        errorMessage: null,
      };

    case ActionTypes.SELECT_POKEMON:
      return {
        ...state,
        isFetching: false,
        errorMessage: null,
        selectedPokemon: action.selectedPokemon || null,
      };

    case ActionTypes.REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        pokemon: action.pokemon || null,
        errorMessage: null,
      };

    case ActionTypes.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.pokemon],
        errorMessage: null,
      };

      case ActionTypes.REMOVE_FAVORITE:
        return {
          ...state,
          errorMessage: null,
          favorites: state.favorites.filter(pokemon => pokemon !== action.pokemon as unknown as PokemonType)
        };

    case ActionTypes.REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error || null,
      };
    default:
      return state;
  }
}

export default pokeReducer;
