import React from 'react';
import {Link} from "react-router-dom";

import css from './genresBadges.module.css';


const GenresBadges = ({genres}) => {

    return (
        <div className={css.badgesContainer}>
            <div className={css.genreHeader}>Movie genres</div>
            {genres.map(({id, name}) => {
                return <Link key={id} className={css.badge} onClick={() => {
                    window.scrollTo(0, 0)
                }} id={id} to={`/genre/${id}`}>{name}</Link>
            })}
        </div>
    );
};

export default GenresBadges;