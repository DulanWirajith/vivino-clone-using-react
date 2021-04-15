import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import "./styles.scss";
import wineImg from "./../../../../assests/img/wine-icon.svg";
import offersImg from "./../../../../assests/img/offer-icon.svg";

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
          ASD WINES
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
          ASD OFFERS
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default SecondNavMobileComponent;
