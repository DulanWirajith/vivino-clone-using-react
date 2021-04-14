import React from "react";
import "./styles.scss";
import TopFooterOneElement from "./top-footer-one-element/TopFooterOneElement";

import beef from "./../../../assests/img/beef-icon.svg";

function TopFooterComponent() {
  return (
    <div className="col-md-12">
      <div className="row">
        <div className="footer-main-div">
          <div className="footer-main-text">
            Trusted by millions to discover and buy the right wine every time.
          </div>
          <div className="row footer-elements">
            <div className="col-md-3">
              <TopFooterOneElement
                photo_icon="./images/footer-element-one.svg"
                one_element_text="Shop the world’s largest wine marketplace"
              ></TopFooterOneElement>
            </div>
            <div className="col-md-3">
              <TopFooterOneElement
                photo_icon="./images/footer-element-two.svg"
                one_element_text="Our support team is always here to help"
              ></TopFooterOneElement>
            </div>
            <div className="col-md-3">
              <TopFooterOneElement
                photo_icon="./images/footer-element-three.svg"
                one_element_text="Careful delivery right to your doorstep"
              ></TopFooterOneElement>
            </div>
            <div className="col-md-3">
              <TopFooterOneElement
                photo_icon="./images/footer-element-four.svg"
                one_element_text="Check honest reviews of any wine before purchase"
              ></TopFooterOneElement>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFooterComponent;
