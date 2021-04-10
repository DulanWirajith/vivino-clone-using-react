import React from "react";
import { NavDropdown } from "react-bootstrap";
function ShipToComponent(props) {
  return (
    <div>
      <NavDropdown title="Ship to" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default ShipToComponent;
