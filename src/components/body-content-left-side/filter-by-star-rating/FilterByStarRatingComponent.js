import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import "./styles.scss";

function FilterByStarRatingComponent() {
  const [value, setValue] = React.useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <div className="">
        <div className="row wine-heading-row">
          <div className="col-md-8   wine-types">Vivino User Rating</div>
        </div>
        <div className=" ">
          <FormControl component="fieldset">
            <RadioGroup
              className=""
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <div className="row star-line-row ">
                <div className="col-md-1 ">
                  <FormControlLabel value="4.5 star" control={<Radio />} />
                </div>
                <div className="col-md-4 center-stars ">
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
                <div className="col-md-7 2 rating-text-show">
                  <b>4.5 </b> Rare &amp; extraordinary
                </div>
              </div>
              <div className="row star-line-row ">
                <div className="col-md-1 ">
                  <FormControlLabel value="4.0 star" control={<Radio />} />
                </div>
                <div className="col-md-4 center-stars ">
                  <StarRatings
                    rating={4.0}
                    starRatedColor="#ba1628"
                    // changeRating={this.changeRating}
                    numberOfStars={5}
                    name="rating"
                    starDimension="15px"
                    starSpacing="1px"
                  />
                </div>
                <div className="col-md-7 2 rating-text-show">
                  <b>4.0 </b> Very good stuff
                </div>
              </div>
              <div className="row star-line-row ">
                <div className="col-md-1 ">
                  <FormControlLabel value="3.5 star" control={<Radio />} />
                </div>
                <div className="col-md-4 center-stars ">
                  <StarRatings
                    rating={3.5}
                    starRatedColor="#ba1628"
                    // changeRating={this.changeRating}
                    numberOfStars={5}
                    name="rating"
                    starDimension="15px"
                    starSpacing="1px"
                  />
                </div>
                <div className="col-md-7 2 rating-text-show">
                  <b>3.5 </b> Good stuff
                </div>
              </div>
              <div className="row star-line-row ">
                <div className="col-md-1 ">
                  <FormControlLabel value="3.0 star" control={<Radio />} />
                </div>
                <div className="col-md-4 center-stars ">
                  <StarRatings
                    rating={3.0}
                    starRatedColor="#ba1628"
                    // changeRating={this.changeRating}
                    numberOfStars={5}
                    name="rating"
                    starDimension="15px"
                    starSpacing="1px"
                  />
                </div>
                <div className="col-md-7  rating-text-show">
                  <b>3.0 </b> Average
                </div>
              </div>
              <div className="row star-line-row ">
                <div className="col-md-1 ">
                  <FormControlLabel value="any star" control={<Radio />} />
                </div>
                <div className="col-md-4 center-stars ">Any rating</div>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default FilterByStarRatingComponent;
