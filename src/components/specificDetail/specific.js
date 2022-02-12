import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";

// fetch('https://fakestoreapi.com/users/1')
//     .then(res => res.json())
//     .then(json => console.log(json))

export default function Specific() {

    const [specific, setSpecific] = useState({});

    const params = useParams();

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/users/${params.id}`)
            .then((res) => setSpecific(res.data))
            .catch((err) => console.log(err));
    }, []);

    return <div className="container text-center">
        <h1>User Specific Details </h1>
        <hr />
        <h3>username:{specific.username}</h3>
        <h3>Email:{specific.email}</h3>

    </div >

}
