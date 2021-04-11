import React from "react";
import SelectedPillComponent from "../selected-pill/SelectedPillComponent";
import { Dropdown } from "react-bootstrap";

import "./styles.scss";

function FiltersShowingComponent() {
  return (
    <div>
      <div className="row ">
        <div className="col-md-12 show-filters">From 1 food pairing</div>
      </div>

      <div className="row ">
        <div className="col-md-9 pill-showing-div ">
          <SelectedPillComponent />
        </div>
        <div className="col-md-3 ">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="filter-dropdown">
              Highest User Rating
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdownmenu-filter">
              <Dropdown.Item className="dropdownitem-filter" href="#/action-1">
                <b>Sort :</b>
              </Dropdown.Item>

              <Dropdown.Item className="dropdownitem-filter" href="#/action-2">
                Highest User Rating
              </Dropdown.Item>
              <Dropdown.Item className="dropdownitem-filter" href="#/action-3">
                Discount
              </Dropdown.Item>
              <Dropdown.Item className="dropdownitem-filter" href="#/action-2">
                Price: Low to High
              </Dropdown.Item>
              <Dropdown.Item className="dropdownitem-filter" href="#/action-3">
                Price: High to Low
              </Dropdown.Item>
              <Dropdown.Item className="dropdownitem-filter" href="#/action-2">
                Popular
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default FiltersShowingComponent;
