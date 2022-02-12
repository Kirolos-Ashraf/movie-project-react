import { ADD_FAV, REMOVE_FAV } from "../actions/actions";

function addToFavorite(state = [], action) {
    switch (action.type) {
        case ADD_FAV:
            console.log("Movie added to favorite", action.movie);
            let favoriteMovies = [...state, action.movie];
            return favoriteMovies;
        case REMOVE_FAV:
            let removemovie = state.filter((item) => item.id !== action.movie.id);
            return removemovie;
        default:
            return state;
    }
}

export default addToFavorite;