import React from "react";
import Slider from "@material-ui/core/Slider";

import "./styles.scss";

function FilterByPriceRangeComponent() {
  //   const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div>
      <div className="row wine-heading-row">
        <div className="col-md-8   wine-types">Price Range</div>
      </div>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        className="slider-custom"
      />
    </div>
  );
}

export default FilterByPriceRangeComponent;
