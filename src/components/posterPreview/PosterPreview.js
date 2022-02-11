import React from 'react';

import css from './posterPreview.module.css'

const PosterPreview = ({posterTitle, movieTitle}) => {
    return (
        <div className={css.image}>
            <img src={`https://image.tmdb.org/t/p/w500${posterTitle}`} alt={`${movieTitle}`}/>
        </div>
    );
};

export default PosterPreview;