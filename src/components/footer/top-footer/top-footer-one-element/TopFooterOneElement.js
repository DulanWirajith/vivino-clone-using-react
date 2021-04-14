import React from "react";
import "./styles.scss";

function TopFooterOneElement(props) {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={props.photo_icon} />
      </div>
      <div className="col-md-9">
        <div className="footer-one-element-text">{props.one_element_text}</div>
      </div>
    </div>
  );
}

export default TopFooterOneElement;
