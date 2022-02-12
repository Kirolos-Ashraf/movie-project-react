import { Get_MovieList } from "../actions/movielist";

const intial_State = {
    movie_list: []
}
export default function movies(state = intial_State, action) {
    switch (action.type) {
        case Get_MovieList:
            return {
                ...state,
                movie_list: action.payload
            }
        default:
            return state;
    }
}