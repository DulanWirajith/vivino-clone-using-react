import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import "./styles.scss";
import SearchBar from "../search-bar/SearchBarComponent";
import ShipToComponent from "../ship-to/ShipToComponent";
import LanguageComponent from "../language/LanguageComponent";
import profileImg  from "../../assests/img/profile-icon.svg";
import cartImg  from "../../assests/img/shopping-cart.svg";


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
            <SearchBar></SearchBar>

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
            <Nav.Link href="#deets">
              <ShipToComponent></ShipToComponent>
            </Nav.Link>
            <Nav.Link>
              <LanguageComponent></LanguageComponent>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <img src={profileImg} />

            </Nav.Link>
            <Nav.Link >
              <img className="cart-img"  src={cartImg} />
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderComponent;
