import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useParams} from "react-router-dom";

import css from './movieInfo.module.css';
import {getMovieDetails} from "../../store/slices/movies.slice";
import StarsRating from "../../components/starsRating/StarsRating";
import PosterPreview from "../../components/posterPreview/PosterPreview";

const MovieInfo = () => {

    const {id} = useParams();

    const {movieDetails, status, error} = useSelector(state => state.movies);

    const {
        adult,
        backdrop_path,
        budget,
        genres,
        homepage,
        title,
        overview,
        poster_path,
        release_date,
        runtime,
        video,
        vote_average
    } = movieDetails;

    const dispatch = useDispatch();
    console.log(movieDetails)

    useEffect(() => {
        dispatch(getMovieDetails(id))
    }, [id])

    return (
        <div>
            {error && <h1>{error}</h1>}

<div className={css.backgroundImage} style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${backdrop_path}")`}}>

    <div className={css.movieDetailsContainer} >

        <div className={css.title}><span>{title}</span></div>

        <div className={css.phRate}>
            <PosterPreview posterTitle={poster_path} movieTitle={title}/>
            {video && <div className={css.VideoContainer}>video</div>}
            <span><StarsRating rating={vote_average}/></span>
        </div>

        <div className={css.BasicInfo}>
            {budget ? <div className={css.budget}>Budget: {budget}</div> : 'budget unknown'}
        </div>
        <div className={css.overview}></div>

    </div>

</div>

            <Outlet/>
        </div>
    );
};

export default MovieInfo;