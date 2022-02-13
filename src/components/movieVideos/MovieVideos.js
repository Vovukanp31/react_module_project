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

    let linksObj = movieVideos.slice(0,3);

    return (
        <div className={css.videoContainer}>
            {error && <h1>{Error}</h1>}
            {linksObj.map( ({key, id}) => <div key={id}><iframe src={`https://www.youtube.com/embed/${key}`}></iframe></div>)}
        </div>
    );
};

export default MovieVideos;