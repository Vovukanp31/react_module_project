import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../../services/movies.services";

const initialState = {
    movies: [],
    status: null,
    error: null,
    movieDetails: {}
}

export const getPopularMovies = createAsyncThunk(
    'movies/getPopularMovies',
    async (_, {rejectWithValue}) => {
        try {
            const movies = await moviesService.getPopularMovies()
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

const moviesSlice = createSlice({

    name: 'movies',

    initialState,

    reducers: {},

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
        }
    }
});

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;