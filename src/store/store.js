import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./slices/movies.slice";
import genresReducer from "./slices/genre.slice";
import videosReducer from "./slices/video.slice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genresReducer,
        videos: videosReducer
    }
});

export default store;