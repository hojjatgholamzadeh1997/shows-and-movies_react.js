import { useEffect, useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Search from "../../components/partials/Search";
import Filter from "../../components/partials/Filter";
import ShowsCard from "../../components/cards/ShowsCard";
import Loading from "../../components/loadings/Fetching";
import ErrorFetching from "../../components/errors/ErrorFetching";
import useFetchForAllDatas from "../../hooks/useFetchForAllDatas";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { TbFaceIdError } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import Pagination from "../../components/partials/Pagination";
import ScrollToTopButton from "../../components/partials/ScrollToTopButton";
import { scrollToTop } from "../../utils/utils";

function Shows() {
  const [changedShows, setChangedShows] = useState([]);

  const [selected, setSelected] = useState("");

  const [isSearchInputEmpty, SetIsSearchInputEmpty] = useState(true);

  const [isFilterDisabled, setIsFilterDisabled] = useState(false);
  const [isSearchDisabled, setIsSearchDisabled] = useState(false);

  const [modalShow, setModalShow] = useState(false);

  const [pageCount, setPageCount] = useState(3);
  const [pageNumber, setPageNumber] = useState(1);

  // Scroll To Top
  useEffect(() => {
    scrollToTop();
  });

  // Fetching Data
  const [isPending, isThereError, shows] = useFetchForAllDatas("https://raw.githubusercontent.com/hojjatgholamzadeh1997/shows-and-movies_react.js/refs/heads/main/src/data/shows.json");

  // Search Function
  const searchInputHandler = (event) => {
    if (event.target.value.trimStart() !== "") {
      setIsFilterDisabled(true);

      const searchedItems = shows.filter((value) => value.title.replaceAll(" ", "").toLowerCase().includes(event.target.value.trimStart().replaceAll(" ", "").toLowerCase()));
      setChangedShows(searchedItems);
      setPageCount(Math.round(searchedItems.length / 12));
      // Reset Page Number
      setPageNumber(1);

      // No Results Found
      if (searchedItems.length === 0) SetIsSearchInputEmpty(false);

    } else {
      setChangedShows(shows);
      setIsFilterDisabled(false);
      setPageCount(3);
      // Reset Page Number
      setPageNumber(1);
    }

    // Scroll To Top
    scrollToTop();
  };

  // Select By Genre Function
  const selectedGenreHandler = (event) => {
    setSelected(event.target.value);
  };
  // Filter By Genre Function
  const filterByGenreHandler = () => {
    if (selected === "All") {
      setChangedShows(shows);
      setIsSearchDisabled(false);
      setPageCount(3);
      // Reset Page Number
      setPageNumber(1);
    } else {
      const selectedItem = shows.filter((value) => value.genres.includes(selected));
      setChangedShows(selectedItem);
      setIsSearchDisabled(true);
      setPageCount(Math.round(selectedItem.length / 12));
      // Reset Page Number
      setPageNumber(1);
    }
    setModalShow(false);

    // Scroll To Top
    scrollToTop();
  };

  // Remove Filtered Item Function
  const removeItemHandler = () => {
    setChangedShows(shows);
    setIsSearchDisabled(false);
    setPageCount(3);
    setPageNumber(1);

    // Scroll To Top
    scrollToTop();
  };

  // Change Page Function
  const changePageHandler = (event) => {
    setPageNumber(event.selected + 1);

    // Scroll To Top
    scrollToTop();
  };

  return (
    <>
      <Header />
      {/* Search & Filter */}
      <div
        className="d-flex flex-row justify-content-center align-items-center gap-2 px-3 py-4 z-3 bg-dark"
        style={{position: "sticky", top: "57px"}}
      >
        <Search
          searchInputHandler={searchInputHandler}
          isSearchDisabled={isSearchDisabled}
        />
        {isSearchDisabled && (
          <Button variant="outline-light" className="filter d-flex align-items-center gap-2">
            <span>{selected}</span>
            <RxCross2 onClick={removeItemHandler} />
          </Button>
        )}
        <Filter
          selectedGenreHandler={selectedGenreHandler}
          filterByGenreHandler={filterByGenreHandler}
          modalShow={modalShow}
          setModalShow={setModalShow}
          isFilterDisabled={isFilterDisabled}
          setIsSearchDisabled={setIsSearchDisabled}
        />
      </div>
      {/* Main */}
      <Container>
        {isPending ? (
          <Loading />
        ) : (
          isThereError ? (
            <ErrorFetching />
          ) : (
            <Row xs={1} sm={2} md={3} lg={4} className="px-3">
              {changedShows.length ? (
                changedShows.map((show, index) => (
                  index >= ((pageNumber * 12) - 12) &&
                  index < ((pageNumber * 12)) &&
                  <Col key={show.id} className="p-2" >
                    <ShowsCard {...show} />
                  </Col>
                ))
              ) : (
                isSearchInputEmpty ? (
                  shows.map((show, index) => (
                    index >= ((pageNumber * 12) - 12) &&
                    index < ((pageNumber * 12)) &&
                    <Col key={show.id} className="p-2" >
                      <ShowsCard {...show} />
                    </Col>
                  ))
                ) : (
                  <div
                    className="d-flex flex-column justify-content-center align-items-center mx-auto gap-3"
                    style={{height: "calc(100vh - 167px)"}}
                  >
                    <TbFaceIdError size={50} />
                    <span className="user-select-none">No Results Found</span>
                  </div>
                )
              )}
            </Row>
          )
        )}
      </Container>
      <Pagination pageCount={pageCount} changePageHandler={changePageHandler} />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Shows;
