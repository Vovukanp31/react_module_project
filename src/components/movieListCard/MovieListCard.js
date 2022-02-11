import React from 'react';

import PosterPreview from "../posterPreview/PosterPreview";
import css from './movieListCard.module.css'

const MovieListCard = ({movie:{id,adult, original_language, original_title, overview, poster_path, release_date, vote_average}}) => {

    let overviewText =(title, maxChar) => title.slice(0, maxChar) + (title.length > maxChar ? "..." : "");

    return (
        <div className={css.movieCard}>

            <PosterPreview posterTitle={poster_path} movieTitle={original_title}/>

            <div className={css.movieInfo}>
                <p><strong>{original_title}</strong></p>
                <p>{overviewText(overview, 120)}</p>
            </div>

            <div className={css.movieRate}>

            </div>

        </div>
    );
};

export default MovieListCard;