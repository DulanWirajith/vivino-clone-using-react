import React from "react";
import PillComponent from "../pill/PillComponent";
import "./styles.scss";

function FilterByWineTypeComponent() {
  return (
    <div>
      <div className="row wine-heading-row">
        <div className="col-md-8  col-sm-8 wine-types">Wine Types</div>
        <div className="col-md-4  col-sm-4 select-multiple">
          Select multiple
        </div>
      </div>
      <div className="row">
        <div className="col-md-4  col-sm-4 wine-type-mobile-div">
          <PillComponent pillName="selected-without-icon" textValue="Red" />
        </div>
        <div className="col-md-4 col-sm-4  wine-type-mobile-div">
          <PillComponent
            pillName="unselected-without-icon-full-width"
            textValue="White"
          />
        </div>
        <div className="col-md-4 col-sm-4  wine-type-mobile-div">
          <PillComponent
            pillName="unselected-without-icon-full-width"
            textValue="Sparkling"
          />
        </div>
      </div>
      <div className="break"></div>
      <div className="row">
        <div className="col-sm-4  wine-type-mobile-div">
          <PillComponent
            pillName="unselected-without-icon-full-width"
            textValue="Rosé"
          />
        </div>
        <div className="col-sm-4 wine-type-mobile-div">
          <PillComponent
            pillName="unselected-without-icon-full-width"
            textValue="Dessert"
          />
        </div>
        <div className="col-sm-4 wine-type-mobile-div">
          <PillComponent
            pillName="unselected-without-icon-full-width"
            textValue="Fortified"
          />
        </div>
      </div>
    </div>
  );
}

export default FilterByWineTypeComponent;
