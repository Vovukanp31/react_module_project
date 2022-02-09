import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import MoviesPage from "./pages/moviesPage/MoviesPage";
import MovieDetails from "./pages/movieDetails/MovieDetails";

function App() {
  return (
    <div className="App">
   <Routes>
       <Route path={'/'} element={<Layout/>}>
           <Route index element={<Navigate to={'moviesPage'}/>}/>

           <Route path={'moviesPage'} element={<MoviesPage/>}/>
           <Route path={':id'} element={<MovieDetails/>}/>
       </Route>
   </Routes>
    </div>
  );
}

export default App;
