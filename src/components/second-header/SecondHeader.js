import React from "react";
import "./styles.scss";
import WinesNavComponent from "./wines-nav/WinesNavComponent";
import OffersNavComponent from "./offers-nav /OffersNavComponent";
import PairingsNavComponent from "./pairings-nav/PairingsNavComponent";
import GrapesNavComponent from "./grapes-nav/GrapesNavComponent";
import RegionsNavComponent from "./regions-nav/RegionsNavComponent";


function SecondHeader(props) {
  return (
    <div>
      <div className="row second-header">
        <div className="col-lg-6 col-md-10">
          <div className="row">
            <div className="col-md-2">
              <WinesNavComponent></WinesNavComponent>
            </div>
            <div className="col-md-2">
              <OffersNavComponent></OffersNavComponent>
            </div>
            <div className="col-md-2">
              <PairingsNavComponent></PairingsNavComponent>
            </div>
            <div className="col-md-2">
              <GrapesNavComponent></GrapesNavComponent>
            </div>
            <div className="col-md-2">
              <RegionsNavComponent></RegionsNavComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHeader;
