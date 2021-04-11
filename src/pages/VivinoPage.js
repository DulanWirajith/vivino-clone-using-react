import React from "react";
import FilterByWineTypeComponent from "../components/filter-by-wine-type/FilterByWineTypeComponent";
import FiltersShowingComponent from "../components/filters-showing/FiltersShowingComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import SecondHeader from "../components/second-header/SecondHeader";
import "./styles.scss";

function VivinoPage(props) {
  return (
    <div>
      <div className="header">
        <HeaderComponent></HeaderComponent>
        <SecondHeader></SecondHeader>
      </div>

      <div className="body-content">
        <h2 className="showing-text">
          Showing 2565 Red wines between $20 - $80 rated above 3.5 stars
        </h2>

        <FiltersShowingComponent></FiltersShowingComponent>

        <div className="break"></div>
        <div className="row ">
          <div className="col-md-4">
            <FilterByWineTypeComponent></FilterByWineTypeComponent>
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    </div>
  );
}

export default VivinoPage;
