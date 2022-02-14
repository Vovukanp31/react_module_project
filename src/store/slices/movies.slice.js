import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../../services/movies.services";

const initialState = {
    movies: [],
    status: null,
    error: null,
    movieGenres: [],
    movieDetails: {},
    movieVideos: [],
}

export const getPopularMovies = createAsyncThunk(
    'movies/getPopularMovies',
    async (page, {rejectWithValue}) => {
        try {
            const movies = await moviesService.getPopularMovies(page)
            return movies
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getMovieDetails = createAsyncThunk(
    'movieDetails/getMovieInfo',
    async (id, {rejectWithValue}) => {
        try {
            const movieDetails = await moviesService.getMovieInfo(id)
            return movieDetails
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getMoviesByGenre = createAsyncThunk(
    'movieGenres/getMovieByGenre',
    async (id, {rejectWithValue}) => {
        try {
            const movieGenres = await moviesService.getMovieByGenre(id)
            return movieGenres
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getMovieVideos = createAsyncThunk(
    'movieVideos/getMovieVideos',
    async (id, {rejectWithValue}) => {
        try {
            const movieVideos = await moviesService.getMovieVideos(id)
            return movieVideos
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const moviesSlice = createSlice({

    name: 'movies',

    initialState,

    reducers: {

    },

    extraReducers: {
        [getPopularMovies.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getPopularMovies.fulfilled]: (state, action) => {
            state.movies = action.payload;
        },
        [getPopularMovies.rejected]: (state, action) => {
            state.error = action.payload
        },


        [getMovieDetails.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getMovieDetails.fulfilled]: (state, action) => {
            state.movieDetails = action.payload;
        },
        [getMovieDetails.rejected]: (state, action) => {
            state.error = action.payload
        },


        [getMoviesByGenre.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getMoviesByGenre.fulfilled]: (state, action) => {
            state.movieGenres = action.payload;
        },
        [getMoviesByGenre.rejected]: (state, action) => {
            state.error = action.payload;
        },

        [getMovieVideos.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getMovieVideos.fulfilled]: (state, action) => {
            state.movieVideos = action.payload;
        },
        [getMovieVideos.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
});

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;