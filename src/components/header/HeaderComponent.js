import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./styles.scss";
import profileImg from "../../assests/img/profile-icon.svg";
import cartImg from "../../assests/img/shopping-cart.svg";
import ShipToComponent from "./ship-to/ShipToComponent";
import SearchBarComponent from "./search-bar/SearchBarComponent";
import LanguageComponent from "./language/LanguageComponent";

function HeaderComponent(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="#home" className="vivino-logo">
          VIVINO
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* searchbar component */}
            <SearchBarComponent></SearchBarComponent>

            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link>
              <ShipToComponent></ShipToComponent>
            </Nav.Link>
            <Nav.Link>
              <LanguageComponent></LanguageComponent>
            </Nav.Link>

            <Nav.Link>
              <img src={profileImg} />
            </Nav.Link>
            <Nav.Link>
              <img className="cart-img" src={cartImg} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderComponent;
