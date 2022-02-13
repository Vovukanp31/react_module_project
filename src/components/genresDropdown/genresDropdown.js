import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {getPopularGenres} from "../../store/slices/genre.slice";

const GenresDropdown = () => {

    const {genres, status, error} = useSelector(state => state.genres);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularGenres())
    }, [dispatch])

    return (
        <div>
            {error && alert(error)}
                {genres.map(genre => <Link onClick={() => { window.scrollTo(0, 0)}} id={genre.id} to={`/genre/${genre.id}`}>{genre.name}</Link>)}
        </div>
    );
};

export default GenresDropdown;