import { ADD_TO_FAVORITES } from "./constants";

export const favoriteAction = (favorites) => {
    return {
        type: ADD_TO_FAVORITES,
        favorites
    };
}


export const deleteFavoriteAction = (id) => {
    return {
        type: ADD_TO_FAVORITES,
        id
    };
}

