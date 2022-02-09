import {key} from "./apiKey";

const baseURL = 'https://api.themoviedb.org/3';

export default baseURL;

export const urls = {
    popularMovies: `/movie/popular?api_key=${key}&language=en-US&page=1`
}