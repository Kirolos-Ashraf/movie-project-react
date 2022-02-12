import React, { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AiTwotoneStar } from "react-icons/ai"; //AiOutlineStar
import { LanguageContext } from './../../context/languageContext';

export default function NavBar() {

    const getFavorits = useSelector((state) => state.favorites);
    const { contextLanguage } = useContext(LanguageContext)

    return <nav style={{ background: "lightgray" }} className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
            <Link className="navbar-brand  fw-bold " to="/details">
                MoviesHome
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav h4 ">
                    <li className="nav-item  m-1">
                        <Link className="nav-link active" to="/">
                            Register
                        </Link>
                    </li>
                    <li className="nav-item  m-1">
                        <Link className="nav-link active" to="/login">
                            LogIN
                        </Link>
                    </li>
                    <li className="nav-item  m-1">
                        <Link style={{ color: "blue", fontWeight: "bolder" }} className="nav-link active" to="/details">
                            Movies
                        </Link>
                    </li>

                    <li className="nav-item  m-1">
                        <Link className="nav-link active" to="/favorites">
                            Favorites ( {getFavorits.length}<AiTwotoneStar size={25} color="yellow" />)
                        </Link>
                    </li>

                    <li className="nav-item  m-1 bg-dark">
                        <Link className="nav-link active text-warning" to="/details">
                            {contextLanguage}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav >
}
