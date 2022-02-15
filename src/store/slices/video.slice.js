import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services/movies.services";

const initialState = {
    videos: [],
    status: null,
    error: null
};

export const getMovieVideos = createAsyncThunk(
    'videos/getMovieVideos',
    async (id, {rejectWithValue}) => {
        try {
            const videos = await moviesService.getMovieVideos(id)
            return videos
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const videoSlice = createSlice({
    name: 'videos',

    initialState,

    reducers: {},

    extraReducers: {
        [getMovieVideos.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getMovieVideos.fulfilled]: (state, action) => {
            state.videos = action.payload;
            state.status = null;
        },
        [getMovieVideos.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }

})

const videosReducer = videoSlice.reducer;

export default videosReducer;