import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles.scss";

function MobileFilterAndSortComponent() {
  const [filter, setfilter] = useState(false);

  const handleCloseForFilter = () => setfilter(false);
  const handlefilter = () => setfilter(true);

  const [sort, setSort] = useState(false);

  const handleCloseForSort = () => setSort(false);
  const handleSort = () => setSort(true);

  return (
    <div>
      <div class="second-nav">
        <button>
          <div className="filter-custom-title" onClick={handlefilter}>
            Filter
          </div>
        </button>
        <button>
          <div className="filter-custom-title" onClick={handleSort}>
            Sort
          </div>
        </button>
      </div>

      <Modal
        show={filter}
        onHide={handleCloseForFilter}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          asd not close if you click outside me. Don't even try to press escape
          key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseForFilter}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={sort}
        onHide={handleCloseForSort}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseForFilter}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MobileFilterAndSortComponent;
