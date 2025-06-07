import { useState } from "react";
import MyNavbar from "../../components/MyNavbar";
import { Container, Row, Col } from "react-bootstrap";
import ShowCard from "../../components/ShowCard";
import Search from "../../components/Search";
import Filter from "../../components/Filter";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/loadings/Fetching";
import ErrorFetching from "../../components/errors/ErrorFetching";
import { TbFaceIdError } from "react-icons/tb";

function Shows() {
  const [changed, setChanged] = useState([]);

  const [isSearchInputEmpty, SetIsSearchInputEmpty] = useState(true);

  const [modalShow, setModalShow] = useState(false);

  // Fetching Data
  const [isPending, isThereError, shows] = useFetch("https://raw.githubusercontent.com/hojjatgholamzadeh1997/shows-and-movies_react.js/refs/heads/main/src/data/shows.json");

  // Search Function
  const searchInputHandler = (event) => {
    const searchedItems = shows.filter((value) => value.title.replaceAll(" ", "").toLowerCase().includes(event.target.value.trimStart().replaceAll(" ", "").toLowerCase()));
    setChanged(searchedItems);
    // No Results Found
    if (searchedItems.length === 0) SetIsSearchInputEmpty(false);
  };

  // Select By Genre Function
  let selected = "";
  const selectedGenre = (event) => {
    selected = event.target.value;
  };
  // Filter By Genre Function
  const filterByGenre = () => {
    if (selected === "" || selected === "All") {
      setChanged([]);
    } else {
      const selectedItems = shows.filter((value) => value.genres.includes(selected));
      setChanged(selectedItems);
    }
    setModalShow(false);
  };

  return (
    <>
      <MyNavbar />
      <div
        className="d-flex flex-row justify-content-center align-items-center gap-2 px-3 py-4 z-3 bg-dark"
        style={{position: "sticky", top: "57px"}}
      >
        <Search searchInputHandler={searchInputHandler} />
        <Filter selectedGenre={selectedGenre} filterByGenre={filterByGenre} modalShow={modalShow} setModalShow={setModalShow} />
      </div>
      {isPending ? (
        <Loading />
      ) : (
        isThereError ? (
          <ErrorFetching />
        ) : (
          <Container>
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
          </Container>
        )
      )}
      <br /> {/* Test */}
    </>
  );
}

export default Shows;
