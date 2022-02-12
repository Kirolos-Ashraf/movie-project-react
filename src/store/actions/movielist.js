import axios from "axios";
export const Get_MovieList = 'Get_MovieList';


export const GetFromAPI = (language) => (dispatch) => {
    return axios
        .get("https://api.themoviedb.org/3/movie/popular?api_key=345e1cf62170222585b22dbfab6d2b1c", { params: { language } })
        .then((res) => dispatch({
            type: Get_MovieList,
            payload: res.data.results
        }))
        .catch((err) => console.log(err));
}