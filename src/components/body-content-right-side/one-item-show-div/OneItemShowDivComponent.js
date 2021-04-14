import React from "react";
import "./styles.scss";
import StarRatings from "react-star-ratings";
import { Button } from "react-bootstrap";
import flagLogo from "./../../../assests/img/australia-icon.svg";
import Rating from "@material-ui/lab/Rating";

function OneItemShowDivComponent(props) {
  let imgSrc = "./images/australia-icon.svg";

  var reviews_div_class = "reviews-div";
  var price_button_class = "price-button";

  if (props.user_rating_number == "") {
    reviews_div_class = "reviews-div-none";
  }

  if (props.price == "View shops") {
    price_button_class = "view-shops-button";
  }

  return (
    <div>
      <div className="row one-item-main-div">
        <div className="image-div">
          <div className="image-div2">
            <img src={props.bottle_img} className="bottle-img" />
          </div>
        </div>
        <div className="content-div">
          <div className="bottle-basic-details">
            <span className="brand-title">{props.brand_title}</span>
            <span className="bottle-name">{props.bottle_name}</span>
            <div className="bottle-location">
              {/* <img src={flagLogo} className="flag-icon" /> */}
              <img src={imgSrc} className="flag-icon" />

              <a className="country-name">{props.country_name}</a>
              <span>·</span>
              <a className="region-name">{props.region_name}</a>
            </div>
            <div className="bottle-rating">
              <div className="rating-view-div">
                <div className="bottle-rating-value">
                  {props.bottle_rating_value}
                </div>
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
                  <div className="reviews-count">{props.reviews_count}</div>
                </div>
              </div>
            </div>
            <div>
              <Button variant="success" className={price_button_class}>
                {props.price}
              </Button>
            </div>
          </div>
        </div>
        <div className={reviews_div_class}>
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
                <span class="user-rating-number">
                  {props.user_rating_number}
                </span>
              </span>
            </span>
            <span className="review-message">{props.review_message}</span>
            <div className="review-info">
              <div className="review-img-and-name">
                <img
                  src="//thumbs.vivino.com/avatars/00b3ai1g5x0d392c7a54b36_50x50.jpg"
                  className="review-person-img"
                />
                <div className="communityReview__textInfo--7SzS6">
                  <div className="review-person-name">
                    {props.review_person_name}
                  </div>
                  <div className="review-date" href="#">
                    {props.review_date}
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
