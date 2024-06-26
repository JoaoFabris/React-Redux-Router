// src/redux/index.ts

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import pokeReducer from './reducer/pokeReducer';

const store = createStore(pokeReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;