import React, { useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
import { Link } from "react-router-dom";
import './details.css';
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorite } from '../../store/actions/actions'
import { GetFromAPI } from "../../store/actions/movielist";
import ChangeLang from "../changeLang/ChangeLang";
import { LanguageContext } from './../../context/languageContext';



export default function Details() {

    //const [MovieList, setmovieList] = useState([]);
    const { contextLanguage } = useContext(LanguageContext);

    const dispatch = useDispatch();
    const dispatch2 = useDispatch();

    const getFavorits = useSelector((state) => state.favorites);

    const MOVIE_LIST = useSelector(state => state.movies.movie_list);

    console.log(getFavorits);

    const HandleFavourites = (item) => {
        console.log("CLICKKKEEDDD");
        dispatch2(addToFavorite(item))
        console.log(item);
    }

    //https://api.themoviedb.org/3/movie/popular?api_key=345e1cf62170222585b22dbfab6d2b1c
    //https://api.themoviedb.org/3/movie/popular?api_key=345e1cf62170222585b22dbfab6d2b1c&language=ar

    useEffect(() => {
        dispatch(GetFromAPI(contextLanguage))
    }, [contextLanguage])

    // axios
    //     .get("https://api.themoviedb.org/3/movie/popular?api_key=345e1cf62170222585b22dbfab6d2b1c")
    //     .then((res) => setmovieList(res.data.results))
    //     .catch((err) => console.log(err));

    // .then((res) => setmovieList(res.data.results))
    // const params = useParams();
    // console.log(props);
    // console.log(params);

    return (
        <div className="container ">
            <ChangeLang></ChangeLang>
            <h1 className="text-center">Movies List</h1>
            <hr />
            <ul>
                {
                    MOVIE_LIST.map((movie, index) => {
                        return (
                            <div className="floatt space-">
                                <div className="card border border-2 shadow m-2" key={movie.id}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top " alt="img" />
                                    <div className="Favorite">
                                        <AiFillStar size={24} onClick={() => HandleFavourites(movie)} color="yellow" />
                                    </div>
                                    <Link className="fontlink" to={`/OneMovie/${movie.id}`}>
                                        {movie.title}</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
        </div >
    );
}
