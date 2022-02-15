import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getMovieVideos} from "../../store/slices/movies.slice";
import css from './movieVideos.module.css'

const MovieVideos = ({id}) => {

    const {movieVideos, status, error} = useSelector(state => state.movies);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMovieVideos(id))
    }, [id, dispatch])

    const linksObj = movieVideos.slice(0,3);
    console.log(id)

    console.log(movieVideos);

    return (
        <div className={css.videoContainer}>
            {error && <h1>{Error}</h1>}
            {linksObj.map( ({key, id, title}) => <iframe key={id} title={title} src={`https://www.youtube.com/embed/${key}`}></iframe>)}
        </div>
    );
};

export default MovieVideos;