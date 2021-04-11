import React from "react";
import "./styles.scss";
import offerImg from "./../../../assests/img/offer-icon.svg";
import BottomLineComponent from "../bottom-line/BottomLineComponent";

function OffersNavComponent(props) {
  return (
    <div>
      <div className="dropdown-custom">
        {/* <input id="dropcheck" className="dropcheck" type="checkbox" /> */}
        <img src={offerImg} className="offer-img" />
        <div className="dropdown-custom-title">Offers</div>
        <div className="dropdown-custom-content">
          <div className="row offer-raw">
            <div className="col-md-6 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-12  offer-item">Less than $15</div>
                  <div className="col-md-12  offer-item">
                    From $15 to $25
                  </div>
                  <div className="col-md-12  offer-item">
                    From $25 to 450
                  </div>
                  <div className="col-md-12  offer-item">
                    Over $50
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="col-md-6 remove-margin">
              <div className="row">
                <div className="col-md-12">
                  
                  <div className="col-md-12  offer-item">
                    Reds on offer
                  </div>
                  <div className="col-md-12  offer-item">
                   Whites on offer
                  </div>
                </div>
              </div>
            </div>
          </div>

          <BottomLineComponent></BottomLineComponent>

          <div className="browse-offers" >
            All Offers
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersNavComponent;
