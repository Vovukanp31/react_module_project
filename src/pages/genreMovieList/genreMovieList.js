import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getMoviesByGenre} from "../../store/slices/movies.slice";
import {Outlet, useParams, useSearchParams} from "react-router-dom";

import css from './genreMovieList.module.css'
import MovieListCard from "../../components/movieListCard/MovieListCard";
import PaginationForm from "../../components/pagination/PaginationForm";
import MoviesLoader from "../../components/loaders/moviesLoader/MoviesLoader";

const GenreMovieList = () => {

    const {id} = useParams()

    const {movieGenres, status, error} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {

        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }

        const page = searchParams.get('page');

        dispatch(getMoviesByGenre({id, page}))
    }, [id, searchParams, dispatch])

    const statusHandler = status === 'pending' && <MoviesLoader/>;

    return (
        <div className={css.moviesContainer}>
            {error && <h1>{error}</h1>}
            {statusHandler || movieGenres.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            <Outlet/>
            <PaginationForm/>
        </div>
    );
};

export default GenreMovieList;