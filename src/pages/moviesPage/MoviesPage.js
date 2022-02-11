import React from 'react';
import {Outlet} from "react-router-dom";
import MoviesList from "../../components/moviesList/MoviesList";

const MoviesPage = () => {
    return (
        <div>
            <MoviesList/>
            <Outlet/>
        </div>
    );
};

export default MoviesPage;