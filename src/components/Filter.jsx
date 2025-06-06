import "./Filter.css";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Filter() {
  const [modalShow, setModalShow] = useState(false);

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
        className="px-3"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="outline-light" className="find">Find</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Filter;
