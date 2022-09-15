import {
    initialState
} from "./constants";
import {
    ADD_TO_FAVORITES
} from "./constants";
import { DELETE_FROM_FAVORITES } from "./constants";

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            state.favorites.push(action.favorites);
            return {
                ...state,
            }
        case DELETE_FROM_FAVORITES:
            state.favorites.slice(action.id, 1);
            return {...state}    
            default:
                return state
    }
}