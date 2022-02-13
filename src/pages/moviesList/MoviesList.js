import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPopularMovies} from "../../store/slices/movies.slice";

import MovieListCard from "../../components/movieListCard/MovieListCard";
import css from './moviesList.module.css'
import {Outlet} from "react-router-dom";

const MoviesList = () => {
const {movies, status, error} = useSelector(state => state.movies);
    const dispatch = useDispatch();

useEffect(() => {
    dispatch(getPopularMovies())
}, [dispatch])

    return (
        <div className={css.moviesContainer}>
            {error && <h1>{error}</h1>}
            {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            <Outlet/>
        </div>
    );
};

export default MoviesList;