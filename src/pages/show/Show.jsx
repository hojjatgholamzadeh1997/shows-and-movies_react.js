import Header from "../../components/layout/Header";
import ShowCard from "../../components/cards/ShowCard";
import Footer from "../../components/layout/Footer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchForSingularData from "../../hooks/useFetchForSingularData";
import Fetching from "../../components/loadings/Fetching"
import ErrorFetching from "../../components/errors/ErrorFetching"

function Show() {
  const { showName } = useParams();

  // Scroll To Top
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  // Fetching Data
  const [isPending, isThereError, show] = useFetchForSingularData("https://raw.githubusercontent.com/hojjatgholamzadeh1997/shows-and-movies_react.js/refs/heads/main/src/data/shows.json", showName);

  return (
    <>
      <Header />
      {isPending ? (
        <Fetching />
      ) : (
        isThereError ? (
          <ErrorFetching />
        ) : (
          <ShowCard show={show} />
        )
      )}
      <Footer />
    </>
  );
}

export default Show;
