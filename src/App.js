import {Navigate, Route, Routes} from "react-router-dom";

import Layout from "./pages/layout/Layout";
import css from './app.module.css'
import MovieInfo from "./pages/movieInfo/MovieInfo";
import MoviesList from "./pages/moviesList/MoviesList";
import GenreMovieList from "./pages/genreMovieList/genreMovieList";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'movies?page=1'}/>}/>

                    <Route path={'movies'} element={<MoviesList/>}/>
                    <Route path={':id/movieDetails'} element={<MovieInfo/>}/>
                    <Route path={'genre/:id'} element={<GenreMovieList/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
