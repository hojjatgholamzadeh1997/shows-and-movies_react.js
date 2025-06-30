import Home from "./pages/home/Home";
import Shows from "./pages/shows/Shows";
import Show from "./pages/show/Show";
import Movies from "./pages/movies/Movies";
import Movie from "./pages/movie/Movie";
import NotFound from "./pages/404/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/shows", element: <Shows /> },
  { path: "/shows/:showName", element: <Show /> },
  { path: "/movies", element: <Movies /> },
  { path: "/movies/:movieName", element: <Movie /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
