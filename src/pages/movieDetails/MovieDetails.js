import React from 'react';
import {Outlet} from "react-router-dom";

const MovieDetails = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default MovieDetails;