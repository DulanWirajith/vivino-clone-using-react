import React from "react";
import { NavDropdown } from "react-bootstrap";
import "./styles.scss";

function ShipToComponent(props) {
  return (
    <div>
      <div className="dropdown-title"> Ship To</div>
      <NavDropdown title="Australia" id="collasible-nav-dropdown" className="dropdown-box">
        <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      {/* <div class="dropdown">
        <input id="dropcheck" class="dropcheck" type="checkbox" />
        <div class="Select-the-sample-data-set">Select the sample dataset</div>
        <img src="./../../../assets/dropdown-arrow.svg" class="drop-down-img" />
        <div class="dropdown-content">
          <div class="dropdown-item">
            <div class="dataset-main-name">Covid and Demogrphic Data</div>
          </div>
          <div class="dropdown-item">
            <div class="dataset-main-name">2019-20 NBA player stats</div>
          </div>
          <div class="dropdown-item">
            <div class="dataset-main-name">Soccer Data</div>
          </div>
          <div class="dropdown-item">
            <div class="dataset-main-name">COVID cases in Colleges</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ShipToComponent;
