import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Search from "../../components/partials/Search";
import Filter from "../../components/partials/Filter";
import ShowCard from "../../components/cards/ShowCard";
import Loading from "../../components/loadings/Fetching";
import ErrorFetching from "../../components/errors/ErrorFetching";
import useFetch from "../../hooks/useFetch";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { TbFaceIdError } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

function Shows() {
  const [changed, setChanged] = useState([]);

  const [selected, setSelected] = useState("");

  const [isSearchInputEmpty, SetIsSearchInputEmpty] = useState(true);

  const [isFilterDisabled, setIsFilterDisabled] = useState(false);
  const [isSearchDisabled, setIsSearchDisabled] = useState(false);

  const [modalShow, setModalShow] = useState(false);

  // Fetching Data
  const [isPending, isThereError, shows] = useFetch("https://raw.githubusercontent.com/hojjatgholamzadeh1997/shows-and-movies_react.js/refs/heads/main/src/data/shows.json");

  // Search Function
  const searchInputHandler = (event) => {
    event.target.value.trimStart() !== "" ? setIsFilterDisabled(true) : setIsFilterDisabled(false);

    const searchedItems = shows.filter((value) => value.title.replaceAll(" ", "").toLowerCase().includes(event.target.value.trimStart().replaceAll(" ", "").toLowerCase()));
    setChanged(searchedItems);
    // No Results Found
    if (searchedItems.length === 0) SetIsSearchInputEmpty(false);
  };

  // Select By Genre Function
  const selectedGenreHandler = (event) => {
    setSelected(event.target.value);
  };
  // Filter By Genre Function
  const filterByGenreHandler = () => {
    if (selected === "All") {
      setChanged(shows);
      setIsSearchDisabled(false);
    } else {
      const selectedItem = shows.filter((value) => value.genres.includes(selected));
      setChanged(selectedItem);
      setIsSearchDisabled(true);
    }
    setModalShow(false);
  };

  // Remove Filtered Item Function
  const removeItemHandler = () => {
    setChanged(shows);
    setIsSearchDisabled(false);
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
              {changed.length ? (
                changed.map((show) => (
                  <Col key={show.id} className="p-2" >
                    <ShowCard {...show} />
                  </Col>
                ))
              ) : (
                isSearchInputEmpty ? (
                  shows.map((show) => ( 
                  <Col key={show.id} className="p-2" >
                    <ShowCard {...show} />
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
      <Footer />
    </>
  );
}

export default Shows;
