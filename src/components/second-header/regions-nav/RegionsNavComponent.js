import React from "react";
import "./styles.scss";
import wineImg from "./../../../assests/img/wine-icon.svg";
import BottomLineComponent from "../bottom-line/BottomLineComponent";

function RegionsNavComponent(props) {
  return (
    <div>
      <div className="dropdown-custom">
        {/* <input id="dropcheck" className="dropcheck" type="checkbox" /> */}
        <img src={wineImg} className="wine-img" />
        <div className="dropdown-custom-title">Wines</div>
        <div className="dropdown-custom-content">
          <div className="row wine-raw">
            <div className="col-md-3 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>Germany</h5>
                    </a>
                  </div>
                  <div className="col-md-12  wine-item">Mosel</div>
                  <div className="col-md-12  wine-item">Pfalz</div>
                  <div className="col-md-12  wine-item">Rheingau</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>Italy</h5>
                    </a>
                  </div>
                  <div className="col-md-12  wine-item">Lugana</div>
                  <div className="col-md-12  wine-item">Piemonte</div>
                  <div className="col-md-12  wine-item">Tuscany</div>
                  <div className="col-md-12  wine-item">Puglia</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>France</h5>
                    </a>
                  </div>
                  <div className="col-md-12  wine-item">Vin de Pays</div>
                  <div className="col-md-12  wine-item">Southern Rhône</div>
                  <div className="col-md-12  wine-item">Bordeaux</div>
                  <div className="col-md-12  wine-item">Burgundy</div>
                </div>
              </div>
            </div>
            <div className="col-md-3 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  







                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>Spain</h5>
                    </a>
                  </div>
                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>Portugal</h5>
                    </a>
                  </div>
                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>Chile</h5>
                    </a>
                  </div>
                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>New Zealand</h5>
                    </a>
                  </div>
                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>Australia</h5>
                    </a>
                  </div>
                  <div className="col-md-12 wine-heading">
                    <a>
                      <h5>USA</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <BottomLineComponent></BottomLineComponent>

          <div className="browse-wines">All regions</div>
        </div>
      </div>
    </div>
  );
}

export default RegionsNavComponent;
