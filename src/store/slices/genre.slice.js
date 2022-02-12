import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services/genre.services";

const initialState = {
    genres: [],
    status: null,
    error: null
}

export const getPopularGenres = createAsyncThunk(
    'genres/getPopularGenres',
    async (_, {rejectWithValue}) => {
        try {
            const genres = await genreService.getAllGenres()
            return genres
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const genresSlice = createSlice({
    name: 'genres',

    initialState,

    reducers: {},

    extraReducers: {
[getPopularGenres.pending]: (state) => {
    state.status = 'pending';
    state.error = null;
},
[getPopularGenres.fulfilled]: (state, action) => {
    state.genres = action.payload;
},
        [getPopularGenres.rejected]: (state, action) => {
    state.error = action.payload;
        }
    }
});

const genresReducer = genresSlice.reducer;

export default genresReducer;