import React from "react";
import "./styles.scss";
import wineImg from "./../../../assests/img/wine-icon.svg";
import BottomLineComponent from "../bottom-line/BottomLineComponent";

function WinesNavComponent(props) {
  return (
    <div>
      <div className="dropdown-custom">
        {/* <input id="dropcheck" className="dropcheck" type="checkbox" /> */}
        <img src={wineImg} className="wine-img" />
        <div className="dropdown-custom-title">Wines</div>
        <div className="dropdown-custom-content">
          <div className="row wine-raw">
            <div className="col-md-4 col-sm-12 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>Red</h5>
                    </a>{" "}
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

          <BottomLineComponent></BottomLineComponent>

          <div className="browse-wines">Browse all wines</div>
        </div>
      </div>
    </div>
  );
}

export default WinesNavComponent;
