import { useEffect, useState } from "react";
import MyNavbar from "../../components/MyNavbar";
import { Container, Row, Col } from "react-bootstrap";
import ShowCard from "../../components/ShowCard";

function Shows() {
  const [shows, setShows] = useState([]);

  const filterByCategoryHandler = (event) => {
    const filteredItems = shows.filter((value) => value.categories.includes(event.target.value));
    setShows(filteredItems);
  };

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
      <br /> {/* Test */}
      <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          {shows.map((show) => (
            <Col key={show.id} className="p-2" >
              <ShowCard {...show} filterByCategoryHandler={filterByCategoryHandler} />
            </Col>
          ))}
        </Row>
      </Container>
      <br /> {/* Test */}
    </>
  );
}

export default Shows;
