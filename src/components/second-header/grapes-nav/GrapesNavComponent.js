import React from "react";
import "./styles.scss";
import grapesImg from "./../../../assests/img/grapes-icon.svg";
import BottomLineComponent from "../bottom-line/BottomLineComponent";

function GrapesNavComponent(props) {
  return (
    <div>
      <div className="dropdown-custom">
        {/* <input id="dropcheck" className="dropcheck" type="checkbox" /> */}
        <img src={grapesImg} className="grapes-img" />
        <div className="dropdown-custom-title">Grapess</div>
        <div className="dropdown-custom-content">
          <div className="row grapes-raw">
            <div className="col-md-4 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12  grapes-item">
                    Cabernet Sauvignon
                  </div>
                  <div className="col-md-12  grapes-item">Montepulciano</div>
                  <div className="col-md-12  grapes-item">Chardonnay</div>
                  <div className="col-md-12  grapes-item">Pinot Noir</div>
                  <div className="col-md-12  grapes-item">Malbec</div>
                </div>
              </div>
            </div>

            <div className="col-md-4 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12  grapes-item">Sauvignon Blanc</div>
                  <div className="col-md-12  grapes-item">Shiraz/Syrah</div>
                  <div className="col-md-12  grapes-item">Zinfandel</div>
                  <div className="col-md-12  grapes-item">Nebbiolo</div>
                  <div className="col-md-12  grapes-item">Sangiovese</div>
                </div>
              </div>
            </div>

            <div className="col-md-4 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12  grapes-item">Pinot Grigio</div>
                  <div className="col-md-12  grapes-item">Riesling</div>
                  <div className="col-md-12  grapes-item">Grauburgunder</div>
                  <div className="col-md-12  grapes-item">Tempranillo</div>
                  <div className="col-md-12  grapes-item">Primitivo</div>
                </div>
              </div>
            </div>
          </div>

          <BottomLineComponent></BottomLineComponent>
        </div>
      </div>
    </div>
  );
}

export default GrapesNavComponent;
