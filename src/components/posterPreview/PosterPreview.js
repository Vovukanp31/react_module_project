import React from 'react';

import css from './posterPreview.module.css'

const PosterPreview = ({posterTitle, movieTitle}) => {

    const noPageImg = 'https://shahidafridifoundation.org/wp-content/uploads/2020/06/no-preview.jpg'

    return (
        <div className={css.image}>
            <img src={(posterTitle && `https://image.tmdb.org/t/p/w500${posterTitle}`) || noPageImg} alt={`${movieTitle}`}/>
        </div>
    );
};

export default PosterPreview;