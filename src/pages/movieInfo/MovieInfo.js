import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useParams} from "react-router-dom";

import css from './movieInfo.module.css';
import {getMovieDetails} from "../../store/slices/movies.slice";
import StarsRating from "../../components/starsRating/StarsRating";
import PosterPreview from "../../components/posterPreview/PosterPreview";
import GenresBadges from "../../components/genresBadges/GenresBadges";

const MovieInfo = () => {

    const {id} = useParams();

    const {movieDetails, status, error} = useSelector(state => state.movies);

    const {
        backdrop_path,
        budget,
        genres,
        homepage,
        title,
        overview,
        poster_path,
        release_date,
        runtime,
        vote_average
    } = movieDetails;

    const dispatch = useDispatch();
    console.log(movieDetails)

    useEffect(() => {
        dispatch(getMovieDetails(id))
    }, [id, dispatch])

    return (
        <div>
            {error && <h1>{error}</h1>}

            <div className={css.backgroundImage}
                 style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${backdrop_path}")`}}>

                <div className={css.movieDetailsContainer}>

                    <div className={css.title}><span>{title}</span></div>

                    <div className={css.phRate}>

                        <div className={css.posterAndLink}>

                            <PosterPreview posterTitle={poster_path} movieTitle={title}/>
                            <a className={css.officialWeb} href={`${homepage}`} target={'_blank'}>Official website</a>
                            {genres && <div className={css.genres}><GenresBadges genres={genres}/></div>}

                        </div>

                        {vote_average && <span><StarsRating rating={vote_average}/></span>}

                        <div className={css.overview}>
                            <div>{overview}</div>
                            <span>Runtime: {runtime} min.</span></div>

                        <div className={css.relBud}>

                            <div className={css.releaseDate}> Release date: <span>{release_date}</span></div>
                            {budget ? <div className={css.budget}>Film
                                    budget: <span>{new Intl.NumberFormat().format(budget)} $</span></div> :
                                <div className={css.budget}>Haven't information about movie budget</div>}

                        </div>


                    </div>

                </div>

            </div>

            <Outlet/>
        </div>
    );
};

export default MovieInfo;