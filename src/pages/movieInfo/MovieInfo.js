import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import css from './movieInfo.module.css';
import {getMovieDetails} from "../../store/slices/movies.slice";
import StarsRating from "../../components/starsRating/StarsRating";
import PosterPreview from "../../components/posterPreview/PosterPreview";
import GenresBadges from "../../components/genresBadges/GenresBadges";
import MovieVideos from "../../components/movieVideos/MovieVideos";
import MovieDetailsLoader from "../../components/loaders/movieDetailsLoader/MovieDetailsLoader";

const MovieInfo = () => {

    const {id} = useParams();

    const {movieDetails, status, error} = useSelector(state => state.movies);

    const {
        backdrop_path, budget, genres, homepage, title, overview, poster_path, release_date, runtime, vote_average
    } = movieDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieDetails(id))
    }, [id, dispatch])

    const statusHandler = status === 'pending' && <MovieDetailsLoader/>;

    return (
        <div>
            {error && <h1>{error}</h1>}
            {statusHandler ||
            <div className={css.backgroundImage}
                 style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${backdrop_path}")`}}>

                <div className={css.movieDetailsContainer}>

                    <div className={css.title}><span>{title}</span></div>

                    <div className={css.phRate}>

                        <div className={css.posterAndLink}>

                            <PosterPreview posterTitle={poster_path} movieTitle={title}/>
                            <a className={css.officialWeb} href={`${homepage}`} target={'_blank'}>Official
                                website</a>
                            {genres && <div className={css.genres}><GenresBadges genres={genres}/></div>}

                        </div>

                        {vote_average && <span className={css.rating}><StarsRating rating={vote_average}/></span>}

                        { overview && (<div className={css.overview}>
                            <div>{overview}</div>
                        </div>)}

                        <div className={css.videoContainer}><MovieVideos id={id}/></div>

                        <div className={css.relBud}>

                            <div className={css.releaseDate}> Release date: <span>{release_date}</span></div>
                            <div className={css.runtime}>Runtime: <span>{runtime} min.</span></div>
                            {budget ? <div className={css.budget}>Film
                                    budget: <span>{new Intl.NumberFormat().format(budget)} $</span></div> :
                                <div className={css.budget}>Haven't information about movie budget</div>}
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default MovieInfo;