import "./Filter.css";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { Col, Row } from "react-bootstrap";

function Filter({ selectedGenre, filterByGenre, modalShow, setModalShow }) {
  // Genres List
  const genres = [
    "All",
    "Action",
    "Comedy",
    "Crime",
    "Drama",
    "Adventure",
    "Fantasy",
    "History",
    "Mystery",
    "Romance",
    "Sitcom",
    "Thriller",
    "Tragedy",
  ];

  return (
    <>
      {/* Filter Button */}
      <Button variant="outline-light" className="filter" onClick={() => setModalShow(true)}>
        Filter
      </Button>

      {/* Filter Box */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="px-3 user-select-none"
      >
        <Modal.Header closeButton className="p-4">
          Filter By Genre
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row sm={2} className="my-2">
              {genres.map((genre, index) => (
                <Col key={index}>
                  <Form.Check
                    type="radio"
                    name="filterByGenre"
                    id={genre}
                    label={genre}
                    className="d-flex gap-3"
                    onChange={(event) => {selectedGenre(event)}}
                    value={genre}
                  />
                </Col>
              ))}
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-light"
            className="find"
            onClick={filterByGenre}
          >
            Find
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Filter;
