import Header from "../../components/layout/Header";
import ShowCard from "../../components/cards/ShowCard";
import ShowDetailsCard from "../../components/cards/ShowDetailsCard";
import ShowDownloadCard from "../../components/cards/ShowDownloadCard";
import Footer from "../../components/layout/Footer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchForSingularData from "../../hooks/useFetchForSingularData";
import Fetching from "../../components/loadings/Fetching"
import ErrorFetching from "../../components/errors/ErrorFetching"
import ScrollToTopButton from "../../components/partials/ScrollToTopButton";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { scrollToTop } from "../../utils/utils"

function Show() {
  const { showName } = useParams();

  // Scroll To Top
  useEffect(() => {
    scrollToTop();    
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
          <Container>
            <Row xs={1} md={2} className="justify-content-center my-3 mt-md-4">
              <Col className="pb-2 col-md-5 col-xl-4">
                <ShowCard show={show} />
              </Col>
              <Col className="pt-2 pt-md-0 col-md-7 col-xl-8">
                <Row xs={1}>
                  <Col className="pb-2">
                    <ShowDetailsCard show={show} />
                  </Col>
                  <Col className="pt-2 pt-md-3">
                    <ShowDownloadCard show={show} />
                  </Col>
                </Row>
                </Col>
            </Row>
          </Container>
        )
      )}
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Show;
