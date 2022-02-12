export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export function addToFavorite(movie) {
    return {
        type: ADD_FAV,
        movie,
    };
}

export function removeFromFavorite(movie) {
    return {
        type: REMOVE_FAV,
        movie,
    };
}