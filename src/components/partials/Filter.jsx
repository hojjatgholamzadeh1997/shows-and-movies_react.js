import "./Filter.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

function Filter({
  selectedGenreHandler,
  filterByGenreHandler,
  modalShow,
  setModalShow,
  isFilterDisabled,
}) {
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
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Sitcom",
    "Thriller",
    "Tragedy",
    "War"
  ];

  return (
    <>
      {/* Filter Button */}
      <Button
        variant="outline-light"
        className="filter"
        onClick={() => setModalShow(true)}
        disabled={isFilterDisabled}
      >
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
                    onChange={(event) => {selectedGenreHandler(event)}}
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
            onClick={filterByGenreHandler}
          >
            Find
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Filter;
