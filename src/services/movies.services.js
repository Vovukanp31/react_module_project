import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";
import {key} from "../configs/apiKey";

export const moviesService = {
    getPopularMovies: (page) => axiosService.get(`${urls.movies}/popular?api_key=${key}&language=en-US`, {params: {page}}).then(value => value.data),
    getMovieInfo: (movieId) => axiosService.get(`${urls.movies}/${movieId}?api_key=${key}&language=en-US`).then(value => value.data),
    getMovieByGenre: (id) => axiosService.get(`/discover${urls.movies}?api_key=${key}&with_genres=${id}`).then(value => value.data).then(value => value.results),
    getMovieVideos: (id) => axiosService.get(`${urls.movies}/${id}/videos?api_key=${key}&language=en-US`).then(value => value.data).then(value => value.results)
}