import React from "react";
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
      </div>
    </div>
  );
}

export default VivinoPage;
