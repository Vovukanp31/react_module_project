import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import css from './movieVideos.module.css'
import {getMovieVideos} from "../../store/slices/video.slice";
import YotubeVideosLoader from "../loaders/youtubeVideosLoader/YoutubeVideosLoader";

const MovieVideos = ({id}) => {

    const {videos, status, error} = useSelector(state => state.videos);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieVideos(id))
    }, [id, dispatch])

    const linksObj = videos.slice(0, 3);

    const statusHandler = status === 'pending' && <YotubeVideosLoader/>;

    return (
        <div className={css.videoContainer}>
            {error && <h1>{Error}</h1>}
            {linksObj.map(({key, id, title, name}) => statusHandler || <iframe key={id} title={title}
                                                        src={`https://www.youtube.com/embed/${key}`}>{name}</iframe>)}
        </div>
    );
};

export default MovieVideos;