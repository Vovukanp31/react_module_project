import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPopularMovies} from "../../store/slices/movies.slice";

import MovieListCard from "../../components/movieListCard/MovieListCard";
import css from './moviesList.module.css'
import {Outlet, useSearchParams} from "react-router-dom";
import PaginationForm from "../../components/pagination/PaginationForm";
import Loader from "../../components/loader/Loader";

const MoviesList = () => {
    const {movies, status, error} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }

        const page = searchParams.get('page');

        dispatch(getPopularMovies(page))
    }, [dispatch, searchParams])

    const statusHandler = status === 'pending' && <Loader/>;

    return (
        <div className={css.moviesContainer}>
            {error && <h1>{error}</h1>}
            {statusHandler || movies && movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            <Outlet/>
            <PaginationForm/>
        </div>
    );
};

export default MoviesList;
