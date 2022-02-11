import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";
import {key} from "../configs/apiKey";

export const moviesService = {
    getPopularMovies: () => axiosService.get(`${urls.movies}/popular?api_key=${key}&language=en-US&page=1`).then(value => value.data).then(value => value.results)
}