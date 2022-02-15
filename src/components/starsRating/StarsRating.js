import React from 'react';
import ReactStars from "react-rating-stars-component";

import css from './starsRating.module.css'

const StarsRating = ({rating}) => {

    const starRating = Math.round(rating)

    const firstExample = {
        size: 20,
        count:10,
        color: 'gray',
        activeColor: '#0097B4FF',
        value: starRating,
        edit: false
    };

    return (
        <div className={css.rating}>
            Rating: <ReactStars {...firstExample} />
        </div>
    );
};

export default StarsRating;