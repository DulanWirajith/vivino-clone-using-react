import React, { useState } from "react";
import { Navbar, Nav, Button, Collapse } from "react-bootstrap";
import "./styles.scss";
import profileImg from "../../assests/img/profile-icon.svg";
import cartImg from "../../assests/img/shopping-cart.svg";
import searchImg from "../../assests/img/search-icon.svg";
import wineImg from "./../../assests/img/wine-icon.svg";
import offersImg from "./../../assests/img/offer-icon.svg";
import pairingImg from "./../../assests/img/pairing-icon.svg";
import grapesImg from "./../../assests/img/grapes-icon.svg";
import regionsImg from "./../../assests/img/regions-icon.svg";

import dropdownIcon from "./../../assests/img/dropdown-icon.svg";

import ShipToComponent from "./ship-to/ShipToComponent";
import SearchBarComponent from "./search-bar/SearchBarComponent";
import LanguageComponent from "./language/LanguageComponent";
import WinesNavComponent from "../second-header/wines-nav/WinesNavComponent";
import MobileWineNavCollapseSection from "./mobile/mobile-nav-collapse-section/MobileWineNavCollapseSection";
import MobileOffersNavCollapseComponent from "./mobile/mobile-offers-nav-collapse-section/MobileOffersNavCollapseComponent";
import MobilePairingsNavCollapseComponent from "./mobile/mobile-pairings-nav-collapse-section/MobilePairingsNavCollapseComponent";
import MobileGrapesNavCollapseComponent from "./mobile/mobile-grapes-nav-collapse-section/MobileGrapesNavCollapseComponent";
import MobileRegionsNavCollapseComponent from "./mobile/mobile-regions-nav-collapse-section/MobileRegionsNavCollapseComponent";

function HeaderComponent(props) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  return (
    <div>
      {/* NAVBAR FOR LAP VIEW AND TAB VIEW */}
      <Navbar expand="lg">
        <Navbar.Brand href="#home" className="vivino-logo-lap-view">
          VIVINO
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* searchbar component */}
            <SearchBarComponent></SearchBarComponent>
          </Nav>
          <Nav>
            {/* <Nav.Link> */}
            <ShipToComponent></ShipToComponent>
            {/* </Nav.Link> */}
            {/* <Nav.Link> */}
            <LanguageComponent></LanguageComponent>
            {/* </Nav.Link> */}

            <Nav.Link>
              <img src={profileImg} />
            </Nav.Link>
            <Nav.Link>
              <img className="cart-img" src={cartImg} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* NAVBAR FOR MOBILE VIEW */}
      <div>
        <Navbar collapseOnSelect expand="lg" className="show-on-mobile">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-button-custom"
          />
          <Navbar.Brand href="#home" className="vivino-logo">
            VIVINO
          </Navbar.Brand>
          <img src={profileImg} />
          <img src={searchImg} />
          <img className="cart-img" src={cartImg} />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="mobile-nev-item"
          >
            <div
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              <img src={wineImg} className="wine-img" />
              <div className="dropdown-custom-title">Wines</div>
              <img
                src={dropdownIcon}
                className="wine-img dropdown-custom-icon"
              />
            </div>
            <Collapse in={open}>
              <div id="example-collapse-text">
                <MobileWineNavCollapseSection></MobileWineNavCollapseSection>
              </div>
            </Collapse>
          </Navbar.Collapse>

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="mobile-nev-item"
          >
            <div
              onClick={() => setOpen2(!open2)}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
            >
              <img src={offersImg} className="wine-img" />
              <div className="dropdown-custom-title">Offers</div>
              <img
                src={dropdownIcon}
                className="wine-img dropdown-custom-icon"
              />
            </div>
            <Collapse in={open2}>
              <div id="example-collapse-text">
                <MobileOffersNavCollapseComponent></MobileOffersNavCollapseComponent>
              </div>
            </Collapse>
          </Navbar.Collapse>

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="mobile-nev-item"
          >
            <div
              onClick={() => setOpen3(!open3)}
              aria-controls="example-collapse-text"
              aria-expanded={open3}
            >
              <img src={pairingImg} className="wine-img" />
              <div className="dropdown-custom-title">Pairings</div>
              <img
                src={dropdownIcon}
                className="wine-img dropdown-custom-icon"
              />
            </div>
            <Collapse in={open3}>
              <div id="example-collapse-text">
                <MobilePairingsNavCollapseComponent></MobilePairingsNavCollapseComponent>
              </div>
            </Collapse>
          </Navbar.Collapse>

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="mobile-nev-item"
          >
            <div
              onClick={() => setOpen4(!open4)}
              aria-controls="example-collapse-text"
              aria-expanded={open4}
            >
              <img src={grapesImg} className="wine-img" />
              <div className="dropdown-custom-title">Grapes</div>
              <img
                src={dropdownIcon}
                className="wine-img dropdown-custom-icon"
              />
            </div>
            <Collapse in={open4}>
              <div id="example-collapse-text">
                <MobileGrapesNavCollapseComponent></MobileGrapesNavCollapseComponent>
              </div>
            </Collapse>
          </Navbar.Collapse>

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="mobile-nev-item"
          >
            <div
              onClick={() => setOpen5(!open5)}
              aria-controls="example-collapse-text"
              aria-expanded={open5}
            >
              <img src={regionsImg} className="wine-img" />
              <div className="dropdown-custom-title">Regions</div>
              <img
                src={dropdownIcon}
                className="wine-img dropdown-custom-icon"
              />
            </div>
            <Collapse in={open5}>
              <div id="example-collapse-text">
                <MobileRegionsNavCollapseComponent></MobileRegionsNavCollapseComponent>
              </div>
            </Collapse>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default HeaderComponent;
