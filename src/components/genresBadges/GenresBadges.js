import React from 'react';

import css from './genresBadges.module.css';


const GenresBadges = ({genres}) => {

    return (
        <div className={css.badgesContainer}>
            <div className={css.genreHeader}>Movie genres</div>
            {genres.map(({id, name}) => {
                return <div key={id} className={css.badge}>{name}</div>

            })}
        </div>
    );
};

export default GenresBadges;