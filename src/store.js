import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import pokemonReducer from './reducers/pokemonReducer';
import favoriteReducer from './reducers/favoriteReducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  favorite: favoriteReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

