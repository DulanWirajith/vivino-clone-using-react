import React from "react";
import { NavDropdown } from "react-bootstrap";
import "./styles.scss";

//
//
//
//
//
//
//
//
//
//
function ShipToComponent(props) {
  return (
    <div>
      <div className="dropdown-title"> Ship To</div>
      <NavDropdown
        title="Australia"
        id="collasible-nav-dropdown"
        className="dropdown-box"
      >
        <NavDropdown.Item>Australia</NavDropdown.Item>
        <NavDropdown.Item>Belgium</NavDropdown.Item>
        <NavDropdown.Item>Brazil</NavDropdown.Item>
        <NavDropdown.Item>Canada</NavDropdown.Item>
        <NavDropdown.Item>Denmark</NavDropdown.Item>
        <NavDropdown.Item>France</NavDropdown.Item>
        <NavDropdown.Item>Germany</NavDropdown.Item>
        <NavDropdown.Item>Hong Kong</NavDropdown.Item>
        <NavDropdown.Item>Ireland</NavDropdown.Item>
        <NavDropdown.Item>Italy</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default ShipToComponent;
