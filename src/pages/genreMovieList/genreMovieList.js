import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getMoviesByGenre} from "../../store/slices/movies.slice";

import css from './genreMovieList.module.css'
import MovieListCard from "../../components/movieListCard/MovieListCard";
import {Outlet, useParams} from "react-router-dom";

const GenreMovieList = () => {

    const {id} = useParams()

    const {movieGenres, status, error} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesByGenre(id))
    }, [id, dispatch])

    return (
        <div className={css.moviesContainer}>
            {error && <h1>{error}</h1>}
            {movieGenres.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            <Outlet/>
        </div>
    );
};

export default GenreMovieList;