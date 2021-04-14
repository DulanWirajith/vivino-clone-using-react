import React from "react";
import "./styles.scss";
import StarRatings from "react-star-ratings";
import { Button } from "react-bootstrap";
import flagLogo from "./../../../assests/img/australia-icon.svg";
import Rating from "@material-ui/lab/Rating";

function OneItemShowDivComponent() {
  let imgSrc = "./images/australia-icon.svg";
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
              {/* <img src={flagLogo} className="flag-icon" /> */}
              <img src={imgSrc} className="flag-icon" />

              <a className="country-name">Italy</a>
              <span>·</span>
              <a className="region-name">Montepulciano d'Abruzzo</a>
            </div>
            <div className="bottle-rating">
              <div className="rating-view-div">
                <div className="bottle-rating-value">4.5</div>
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
                  <div className="reviews-count">4242 ratings</div>
                </div>
              </div>
            </div>
            <div>
              <Button variant="success" className="price-button">
                $79
              </Button>
            </div>
          </div>
        </div>
        <div className="reviews-div">
          <div className="reviews-inner-div">
            <span className="user-rating-box">
              <span>
                <Rating
                  name="read-only"
                  max="1"
                  value="1"
                  readOnly
                  size="small"
                  className="user-rating-star"
                />
                <span class="user-rating-number">4.5</span>
              </span>
            </span>
            <span className="communityReview__reviewText--2bfLj">
              Dark red, scent of vanilla and plum. Bold, round, taste loades
              with plum, leather, oak and vanilla. Fantastic with a piece of red
              meat.
            </span>
            <div className="review-info">
              <div className="review-img-and-name">
                <img
                  src="//thumbs.vivino.com/avatars/00b3ai1g5x0d392c7a54b36_50x50.jpg"
                  className="review-person-img"
                />
                <div className="communityReview__textInfo--7SzS6">
                  <div className="review-person-name">
                    Martin Elliot (137 ratings)
                  </div>
                  <div className="review-date" href="#">
                    Mar 7, 2020
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneItemShowDivComponent;
