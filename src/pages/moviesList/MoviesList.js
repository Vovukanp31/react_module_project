import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPopularMovies} from "../../store/slices/movies.slice";

import MovieListCard from "../../components/movieListCard/MovieListCard";
import css from './moviesList.module.css'
import {Outlet, useSearchParams} from "react-router-dom";
import Paginate from "../../components/pagination/Paginate";

const MoviesList = () => {
    const {movies:{results}, status, error} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams)

    useEffect(() => {
        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }

        const page = searchParams.get('page');

        dispatch(getPopularMovies(page))
    }, [searchParams])

    console.log(results)

    return (
        <div className={css.moviesContainer}>
            {error && <h1>{error}</h1>}
            {results && results.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            <Outlet/>
            <Paginate/>
        </div>
    );
};

export default MoviesList;
