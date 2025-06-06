import "./Search.css";
import Form from 'react-bootstrap/Form';

function Search({ searchInputHandler }) {
  return (
    <>
      <Form>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-3"
          aria-label="Search"
          onChange={(event) => {searchInputHandler(event)}}
        />
      </Form>   
    </>
  );
}

export default Search;
