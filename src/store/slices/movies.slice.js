import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../../services/movies.services";

const initialState = {
    movies: [],
    status: null,
    error: null
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
        }
    }
});

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;