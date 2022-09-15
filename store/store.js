import { configureStore, combineReducers, createStore } from "redux";
import { favoritesReducer } from "./reducers";

const reducers = combineReducers({
  favorite: favoritesReducer,
});

const store = createStore(reducers);

export default store;
