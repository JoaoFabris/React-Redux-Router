import { ThunkDispatch } from "redux-thunk";
import { UnknownAction } from "redux";

export type ReduxState = {
  pokemon: PokemonType[] | null;
  isFetching: boolean;
  errorMessage: string | null;
  selectedPokemon: PokemonType | null;
  favorites: PokemonType[]
};

export interface PokemonType {
  name: string;
  sprites: {
    front_default: string;
  };
  weight: number;
  types: TypeInter[]
  stats: StatsType[]
}

export type TypeInter ={
  type: {
    name: string
  }
}

export type StatsType = {
  base_stat: string;
}


export type Dispatch = ThunkDispatch<ReduxState, null, UnknownAction>;
