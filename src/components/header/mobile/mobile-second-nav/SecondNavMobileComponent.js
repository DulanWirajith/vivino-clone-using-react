import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import "./styles.scss";
import wineImg from "./../../../../assests/img/wine-icon.svg";
import offersImg from "./../../../../assests/img/offer-icon.svg";
import WinesNavComponent from "../../../second-header/wines-nav/WinesNavComponent";

function SecondNavMobileComponent() {
  const [state, setState] = React.useState({
    offersButton: false,
    wineButton: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="display-none">
      <React.Fragment>
        <Button
          onClick={toggleDrawer("wineButton", true)}
          className="second-mobile-nav-button"
        >
          <img src={wineImg} className="second-nav-image" />
          <div>Wines</div>
        </Button>
        <Drawer
          anchor={"right"}
          open={state["wineButton"]}
          onClose={toggleDrawer("wineButton", false)}
          className="drawer-class"
        >
          <div
            className="back-button-div"
            onClick={toggleDrawer("wineButton", false)}
          >
            <img src="./images/back-icon.svg" className="back-img"></img>
            Back
          </div>
          <div className="row wine-raw">
            <div className="col-md-4 col-sm-12 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>Red</h5>
                    </a>
                  </div>
                  <div className="col-md-12  wine-item">Australian Shiraz </div>
                  <div className="col-md-12  wine-item">
                    Top-notch Italian Barolo
                  </div>
                  <div className="col-md-12  wine-item">
                    Burgundy Côte de Nuits Red
                  </div>
                  <div className="col-md-12  wine-item">
                    Australian Pinot Noir
                  </div>
                  <div className="col-md-12  wine-item">
                    Australian Bordeaux Blend
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>White</h5>
                    </a>
                  </div>
                  <div className="col-md-12  wine-item">
                    Australian Chardonnay
                  </div>
                  <div className="col-md-12  wine-item">
                    Burgundy Côte de Beaune White
                  </div>
                  <div className="col-md-12  wine-item">
                    Australian Sauvignon Blanc
                  </div>
                  <div className="col-md-12  wine-item">
                    New Zealand Sauvignon Blanc
                  </div>
                  <div className="col-md-12  wine-item">
                    Australian Riesling
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-12 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>Sparkling</h5>
                    </a>
                  </div>
                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>Rosé</h5>
                    </a>
                  </div>
                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>Fortified</h5>
                    </a>
                  </div>
                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>Dessert</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </React.Fragment>
      <React.Fragment>
        <Button
          onClick={toggleDrawer("offersButton", true)}
          className="second-mobile-nav-button"
        >
          <img src={offersImg} className="second-nav-image" />
          <div>Offers</div>
        </Button>
        <Drawer
          anchor={"right"}
          open={state["offersButton"]}
          onClose={toggleDrawer("offersButton", false)}
          className="drawer-class"
        >
          <div
            className="back-button-div"
            onClick={toggleDrawer("offersButton", false)}
          >
            <img src="./images/back-icon.svg" className="back-img"></img>
            Back
          </div>
          <div className="row offer-raw">
            <div className="col-md-6 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12  offer-item">Less than $15</div>
                  <div className="col-md-12  offer-item">From $15 to $25</div>
                  <div className="col-md-12  offer-item">From $25 to 450</div>
                  <div className="col-md-12  offer-item">Over $50</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12  offer-item">Reds on offer</div>
                  <div className="col-md-12  offer-item">Whites on offer</div>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default SecondNavMobileComponent;
