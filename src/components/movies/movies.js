import React, { useEffect, useState } from "react";
import axios from "axios";
import './movies.css'
import { useParams } from "react-router-dom";

export default function OneMovie() {
    const [Movdetails, setDetails] = useState({});
    const params = useParams();

    console.log(params);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=345e1cf62170222585b22dbfab6d2b1c&language=ar`)
            .then((res) => setDetails(res.data))
            .catch((err) => console.log(err));
    }, []);


    return (
        <div>


            <h1 className="text-center">That's Your Movie Details</h1>
            <hr />

            <div className="container w-50 border border-5">
                <h3 className=" text-center"> Movie-Name: <span className="owncolor">{Movdetails.title}</span> </h3>
                <hr />
                <div className="container border border-2 w-50 h-50">
                    <img src={`https://image.tmdb.org/t/p/w500/${Movdetails.poster_path}`} className="card-img-top " alt="img" />
                </div>
                <br />
                <h4><span className="owncolor">Rating</span> : {Movdetails.vote_average}</h4>
                <h4><span className="owncolor">overview</span> : {Movdetails.overview}</h4>
                <h4><span className="owncolor">runtime</span> : {Movdetails.runtime}</h4>
                <h4><span className="owncolor">#ofViews</span> : {Movdetails.vote_count}</h4>
                <h4><span className="owncolor">Familiar-to:</span> : {Movdetails.popularity} <span className="owncolor">Persons</span></h4>
                <h4><span className="owncolor">Release_Date</span> : {Movdetails.release_date}</h4>
            </div>
            <br />
        </div>
    );
}
