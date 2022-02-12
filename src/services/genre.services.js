import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";
import {key} from "../configs/apiKey";

export const genreService = {
    getAllGenres: () => axiosService.get(`${urls.genres}${urls.movies}/list?api_key=${key}&language=en-US`).then(value => value.data)

}