import React from "react";
import "./styles.scss";

function BottomLineComponent(props) {
  return (
    <div>
      <div className="row wine-line-raw">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-2 wine-line-img"></div>
            <div className="col-md-10 wine-line-content">
              <p>Browse top-rated sauvignon blanc</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-2 wine-line-img"></div>
            <div className="col-md-10 wine-line-content">
              <p>Rare &amp; Extraordinary wines for someone quite special</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomLineComponent;
