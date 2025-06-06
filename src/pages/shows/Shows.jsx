import { useEffect, useState } from "react";
import MyNavbar from "../../components/MyNavbar";
import { Container, Row, Col } from "react-bootstrap";
import ShowCard from "../../components/ShowCard";
import Search from "../../components/Search";
import Filter from "../../components/Filter";

function Shows() {
  const [shows, setShows] = useState([]);
  const [searched, setSearched] = useState([]);
  const [isSearchInputEmpty, SetIsSearchInputEmpty] = useState(true);

  // Search Function
  const searchInputHandler = (event) => {
    // Check Is Search Input Empty?
    if (event.target.value.trimStart() === "") {
      setSearched([]);
      SetIsSearchInputEmpty(true);
    } else {
      const searchedItems = shows.filter((value) => value.title.replaceAll(" ", "").toLowerCase().includes(event.target.value.replaceAll(" ", "").toLowerCase()));
      setSearched(searchedItems);
      // No Results Found
      if (searchedItems.length === 0) SetIsSearchInputEmpty(false);
    }
  };

  // TEST...
  // Fiter Function
  // const filterByCategoryHandler = (event) => {
  //   const filteredItems = shows.filter((value) => value.categories.includes(event.target.value));
  //   setShows(filteredItems);
  // };

  // Fetching Data
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/hojjatgholamzadeh1997/shows-and-movies_react.js/refs/heads/main/src/data/data.json"
    )
      .then((data) => data.json())
      .then((result) => setShows(result.shows))
      .catch((error) => {
        console.log("ERROR Fetching Data!");
        console.log(error);
      });
  }, []);

  return (
    <>
      <MyNavbar />
      <div
        className="d-flex flex-row justify-content-center align-items-center gap-2 px-3 py-4 z-3 bg-dark"
        style={{position: "sticky", top: "57px"}}
      >
        <Search searchInputHandler={searchInputHandler} />
        <Filter />
      </div>
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} className="px-3">
          {searched.length ? (
            searched.map((show) => (
            <Col key={show.id} className="p-2" >
              <ShowCard {...show} />
            </Col>
          ))
          ) : (
            isSearchInputEmpty && shows.map((show) => (
            <Col key={show.id} className="p-2" >
              <ShowCard {...show} />
            </Col>
          ))
          )}
        </Row>
      </Container>
      <br /> {/* Test */}
    </>
  );
}

export default Shows;
