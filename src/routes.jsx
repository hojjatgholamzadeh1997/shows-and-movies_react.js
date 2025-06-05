import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Shows from "./pages/shows/Shows";
import Movies from "./pages/movies/Movies";
import NotFound from "./pages/404/NotFound";

import Show from "./components/Show";
import Movie from "./components/Movie";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/shows", element: <Shows /> },
  { path: "/shows/:showID", element: <Show /> },
  { path: "/movies", element: <Movies /> },
  { path: "/movies/:movieID", element: <Movie /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
