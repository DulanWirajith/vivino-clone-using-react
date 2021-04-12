import React from "react";
import "./styles.scss";
import StarRatings from "react-star-ratings";

import flagLogo from "./../../../assests/img/australia-icon.svg";

function OneItemShowDivComponent() {
  return (
    <div>
      <div className="row border one-item-main-div">
        <div className="image-div">
          <div className="image-div2"></div>
        </div>
        <div className="content-div">
          <div className="bottle-basic-details">
            <span className="brand-title">Tenuta Ulisse</span>
            <span className="bottle-name">
              Limited Edition 10 Vendemmie N.V.
            </span>
            <div className="bottle-location">
              <img src={flagLogo} className="flag-icon" />
              <a className="country-name">Italy</a>
              <span>·</span>
              <a className="region-name">Montepulciano d'Abruzzo</a>
            </div>
            <div className="bottle-rating">
              <div class="rating-view-div">
                <div class="bottle-rating-value">4.5</div>
                <div>
                  <div>
                    <StarRatings
                      rating={4.5}
                      starRatedColor="#ba1628"
                      // changeRating={this.changeRating}
                      numberOfStars={5}
                      name="rating"
                      starDimension="15px"
                      starSpacing="1px"
                    />
                  </div>
                  <div class="reviews-count">4242 ratings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-div"></div>
      </div>
    </div>
  );
}

export default OneItemShowDivComponent;
