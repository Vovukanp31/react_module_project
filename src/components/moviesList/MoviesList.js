import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPopularMovies} from "../../store/slices/movies.slice";

import MovieListCard from "../movieListCard/MovieListCard";
import css from './moviesList.module.css'

const MoviesList = () => {
const {movies, status, error} = useSelector(state => state.movies);
    const dispatch = useDispatch();

useEffect(() => {
    dispatch(getPopularMovies())
}, [])
console.log(movies)
    return (
        <div className={css.moviesContainer}>
            {error && <h1>{error}</h1>}
            {movies.map(movie => { return <MovieListCard key={movie.id} movie={movie}/>})}
        </div>
    );
};

export default MoviesList;