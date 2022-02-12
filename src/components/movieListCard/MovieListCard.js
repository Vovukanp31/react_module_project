import React from 'react';

import PosterPreview from "../posterPreview/PosterPreview";
import css from './movieListCard.module.css'
import StarsRating from "../starsRating/StarsRating";
import {useNavigate} from "react-router-dom";

const MovieListCard = ({movie}) => {

    const {id, title, overview, poster_path, vote_average} = movie;

    let overviewText = (title, maxChar) => title.slice(0, maxChar) + (title.length > maxChar ? "..." : "");

    const movieInfo = useNavigate()

    return (
        <div className={css.movieCard} onClick={() => { window.scrollTo(0, 0); movieInfo(`/${id}/movieDetails`)}}>

            <PosterPreview posterTitle={poster_path} movieTitle={title}/>

            <div className={css.movieInfo}>
                <span><strong>{title}</strong></span>
                <span>{overviewText(overview, 86)}</span>
            </div>

            <div className={css.movieRate}>
                <StarsRating rating={vote_average}/>
            </div>

        </div>
    );
};

export default MovieListCard;