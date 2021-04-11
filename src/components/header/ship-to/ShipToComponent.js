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

      
    </div>
  );
}

export default ShipToComponent;
