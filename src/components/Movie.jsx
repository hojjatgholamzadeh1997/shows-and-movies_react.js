import { useParams } from "react-router-dom";
import MyNavbar from "./MyNavbar";

function Movie() {
  const { movieID } = useParams();

  return (
    <>
      <MyNavbar />
      <p>Movie ID: {movieID}</p>
    </>
  );
}

export default Movie;
