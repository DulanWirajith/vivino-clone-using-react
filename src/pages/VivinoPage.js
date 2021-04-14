import React from "react";
import FilterByWineTypeComponent from "../components/body-content-left-side/filter-by-wine-type/FilterByWineTypeComponent";
import FiltersShowingComponent from "../components/body-content-left-side/filters-showing/FiltersShowingComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import SecondHeader from "../components/second-header/SecondHeader";
import { RangeSlider } from "@appbaseio/reactivesearch";
import Slider from "react-rangeslider";
import "./styles.scss";
import FilterByPriceRangeComponent from "../components/body-content-left-side/filter-by-price-range/FilterByPriceRangeComponent";
import FilterByStarRatingComponent from "../components/body-content-left-side/filter-by-star-rating/FilterByStarRatingComponent";
import FilterWithSearch from "../components/body-content-left-side/filter-with-search/FilterWithSearch";
import OneItemShowDivComponent from "../components/body-content-right-side/one-item-show-div/OneItemShowDivComponent";
import TopFooterComponent from "../components/footer/top-footer/TopFooterComponent";
import SecondFooterComponent from "../components/footer/second-footer/SecondFooterComponent";

function VivinoPage(props) {
  var grapesArray = [
    "Cabernet Franc",
    "Cabernet Sauvignon",
    "Chardonnay",
    "Grenache",
    "Malbec",
    "Merlot",
    "Pinot Noir",
    "Riesling",
    "Sauvignon Blanc",
    "Shiraz/Syrah",
  ];

  var regionsArray = [
    "Bordeaux",
    "Bourgogne",
    "Napa Valley",
    "Piemonte",
    "Rhone Valley",
    "Toscana",
  ];

  var wineStylesArray = [
    "Argentinian Malbec",
    "Californian Cabernet Sauvignon",
    "Central Italy Red",
    "Spanish Red",
    "Spanish Rioja Red",
  ];

  var countriesArray = [
    { valueOne: "Argentina", valueTwo: "./images/argentina-icon.svg" },
    { valueOne: "Australia", valueTwo: "./images/australia-icon.svg" },
    { valueOne: "Austria", valueTwo: "./images/austria-icon.svg" },
    { valueOne: "Chile", valueTwo: "./images/chile-icon.svg" },
    { valueOne: "France", valueTwo: "./images/france-icon.svg" },
    { valueOne: "Germany", valueTwo: "./images/germany-icon.svg" },
    { valueOne: "Italy", valueTwo: "./images/italy-icon.svg" },
    { valueOne: "Portugal", valueTwo: "./images/portugal-icon.svg" },
    { valueOne: "Spain", valueTwo: "./images/spain-icon.svg" },
    { valueOne: "United States", valueTwo: "./images/united-states-icon.svg" },
  ];

  var foodPairingsArray = [
    { valueOne: "Veal", valueTwo: "./images/beef-icon.svg" },
    { valueOne: "Poultry", valueTwo: "./images/hen-icon.svg" },
    {
      valueOne: "Rich fish (salmon, tuna etc)",
      valueTwo: "./images/rich-fish-icon.svg",
    },
    { valueOne: "Spicy food", valueTwo: "./images/spicy-icon.svg" },
    { valueOne: "Sweet desserts", valueTwo: "./images/sweet-dessert-icon.svg" },
  ];
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
            <div className="break"></div>
            <div className="break"></div>
            <div className="break"></div>
            <FilterByPriceRangeComponent></FilterByPriceRangeComponent>
            <div className="break"></div>
            <div className="break"></div>
            <div className="break"></div>
            <FilterByStarRatingComponent></FilterByStarRatingComponent>
            <div className="break"></div>
            <div className="break"></div>
            <div className="break"></div>
            <FilterWithSearch
              topic="Grapes"
              searchText="Search grapes"
              filterElements={grapesArray}
              pillName="unselected-without-icon"
            ></FilterWithSearch>
            <div className="break"></div>
            <div className="break"></div>
            <div className="break"></div>
            <FilterWithSearch
              topic="Regions"
              searchText="Search regions"
              filterElements={regionsArray}
              pillName="unselected-without-icon"
            ></FilterWithSearch>
            <div className="break"></div>
            <div className="break"></div>
            <div className="break"></div>
            <FilterWithSearch
              topic="Countries"
              searchText="Search countries"
              filterElements={countriesArray}
              pillName="unselected-with-another-icon"
            ></FilterWithSearch>
            <div className="break"></div>
            <div className="break"></div>
            <div className="break"></div>
            <FilterWithSearch
              topic="Wine styles"
              searchText="Search wine styles"
              filterElements={wineStylesArray}
              pillName="unselected-without-icon"
            ></FilterWithSearch>
            <div className="break"></div>
            <div className="break"></div>
            <div className="break"></div>
            <FilterWithSearch
              topic="Food pairings"
              searchText="Search food pairings"
              filterElements={foodPairingsArray}
              pillName="unselected-with-another-icon"
            ></FilterWithSearch>
          </div>

          <div className="col-md-8">
            <OneItemShowDivComponent></OneItemShowDivComponent>
          </div>
        </div>

        <div className="break"></div>

        {/* <div className="row ">
          <div className="col-md-4"></div>
          <div className="col-md-8"></div>
        </div> */}
      </div>

      <div className="row">
        <TopFooterComponent></TopFooterComponent>
      </div>
      <div className="row">
        <SecondFooterComponent></SecondFooterComponent>
      </div>
    </div>
  );
}

export default VivinoPage;
