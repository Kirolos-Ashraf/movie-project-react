import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import './favorite.css'
import { addToFavorite, removeFromFavorite } from '../../store/actions/actions'
import { AiOutlineCloseCircle, RiDeleteBin2Line } from "react-icons/ai"; //AiOutlineStar

export default function favorite() {

    const dispatch = useDispatch();
    const getFavorits = useSelector((state) => state.favorites);


    const RemoveFavourites = (item) => {
        console.log("REMOOOOVVEDDD");
        dispatch(removeFromFavorite(item));
    }

    return (
        <div className="container ">
            <h1 className="text-center">Favs: {getFavorits.length}</h1>
            <hr />
            <ul>
                {
                    getFavorits.map((movie, index) => {
                        return (
                            <div className="floatt space-">
                                <div className="card border border-2 shadow m-2" key={movie.id}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top " alt="img" />
                                    <div className="Favorite">
                                        <AiOutlineCloseCircle size={24} onClick={() => RemoveFavourites(movie)} color="red" />
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
