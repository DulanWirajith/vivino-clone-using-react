import React from "react";
import { NavDropdown } from "react-bootstrap";
import "./styles.scss";

function LanguageComponent(props) {
  return (
    <div>
      <div className="dropdown-title"> Language</div>
      <NavDropdown
        title="English"
        id="collasible-nav-dropdown"
        className="dropdown-box"
      >
        <NavDropdown.Item>Dansk</NavDropdown.Item>
        <NavDropdown.Item>Deutsch</NavDropdown.Item>
        <NavDropdown.Item>English</NavDropdown.Item>
        <NavDropdown.Item>Español</NavDropdown.Item>
        <NavDropdown.Item>Français</NavDropdown.Item>
        <NavDropdown.Item>Italiano</NavDropdown.Item>
        <NavDropdown.Item>Nederlands</NavDropdown.Item>
        <NavDropdown.Item>Português</NavDropdown.Item>
        <NavDropdown.Item>Svenska</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
}

export default LanguageComponent;
