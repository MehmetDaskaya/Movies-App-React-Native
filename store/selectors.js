import { createSelector } from "selector";

export const favoritesSelector = createSelector(
    (state) => state.favorite.favorites,
    (favorites) => favorites

);
