import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./slices/movies.slice";
import genresReducer from "./slices/genre.slice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genre: genresReducer
    }
});

export default store;