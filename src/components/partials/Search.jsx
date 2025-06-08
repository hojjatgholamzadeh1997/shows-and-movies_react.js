import { memo } from "react";
import "./Search.css";
import Form from 'react-bootstrap/Form';

function Search({ searchInputHandler, isSearchDisabled }) {
  return (
    <>
      <Form>
        <Form.Control
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(event) => {searchInputHandler(event)}}
          disabled={isSearchDisabled}
        />
      </Form>   
    </>
  );
}

export default memo(Search);
