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

// import SecondNavComponent from "../components/header/mobile/second-nav/SecondNavComponent";
import MobileFilterAndSortComponent from "../components/body-content-right-side/mobile/mobile-filter-and-sort-button/MobileFilterAndSortComponent";
import SecondNavMobileComponent from "../components/header/mobile/mobile-second-nav/SecondNavMobileComponent";

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

  var bodyRowContent = [
    {
      brand_title: "Tenuta Ulisse",
      bottle_name: "Guerriero della Terra 2017",
      bottle_img: "./images/bottle-img-one.png",
      country_name: "Italy",
      region_name: "Marche",
      bottle_rating_value: "4.5",
      reviews_count: "1242 ratings",
      price: "$85",
      user_rating_number: "4.5",
      review_message:
        "A ruby in colour. Red currant on the nose with spice. Very fruit forward with blackcurrant on the palate with vanilla and clove.",
      review_person_name: "Alicia B (274 ratings)",
      review_date: "Dec 19, 2020",
    },

    {
      brand_title: "Muga",
      bottle_name: "Prado Enea Gran Reserva 2014",
      bottle_img: "./images/bottle-img-two.png",
      country_name: "Spain",
      region_name: "Rioja",
      bottle_rating_value: "4.7",
      reviews_count: "93 ratings",
      price: "View shops",
      user_rating_number: "",
      review_message: "",
      review_person_name: "",
      review_date: "",
    },
    {
      brand_title: "Losada",
      bottle_name: "La Bienquerida 2018",
      bottle_img: "./images/bottle-img-three.png",
      country_name: "Spain",
      region_name: "Bierzo",
      bottle_rating_value: "4.7",
      reviews_count: "25 ratings",
      price: "View shops",
      user_rating_number: "4.5",
      review_message:
        "Fandabby magic! This youngster will grow into something incredible",
      review_person_name: "Woody (397 ratings)",
      review_date: "Mar 7, 2021",
    },

    {
      brand_title: "Herdade da Maroteira",
      bottle_name: "Cem Reis Reserva Syrah 2018",
      bottle_img: "./images/bottle-img-four.png",
      country_name: "Portugal",
      region_name: "Alentejano",
      bottle_rating_value: "4.6",
      reviews_count: "397 ratings",
      price: "View shops",
      user_rating_number: "",
      review_message: "",
      review_person_name: "",
      review_date: "",
    },
    {
      brand_title: "Tenuta Ulisse",
      bottle_name: "Guerriero della Terra 2017",
      bottle_img: "./images/bottle-img-one.png",
      country_name: "Italy",
      region_name: "Marche",
      bottle_rating_value: "4.5",
      reviews_count: "1242 ratings",
      price: "$85",
      user_rating_number: "4.5",
      review_message:
        "A ruby in colour. Red currant on the nose with spice. Very fruit forward with blackcurrant on the palate with vanilla and clove.",
      review_person_name: "Alicia B (274 ratings)",
      review_date: "Dec 19, 2020",
    },

    {
      brand_title: "Muga",
      bottle_name: "Prado Enea Gran Reserva 2014",
      bottle_img: "./images/bottle-img-two.png",
      country_name: "Spain",
      region_name: "Rioja",
      bottle_rating_value: "4.7",
      reviews_count: "93 ratings",
      price: "View shops",
      user_rating_number: "",
      review_message: "",
      review_person_name: "",
      review_date: "",
    },
    {
      brand_title: "Tenuta Ulisse",
      bottle_name: "Guerriero della Terra 2017",
      bottle_img: "./images/bottle-img-one.png",
      country_name: "Italy",
      region_name: "Marche",
      bottle_rating_value: "4.5",
      reviews_count: "1242 ratings",
      price: "$85",
      user_rating_number: "4.5",
      review_message:
        "A ruby in colour. Red currant on the nose with spice. Very fruit forward with blackcurrant on the palate with vanilla and clove.",
      review_person_name: "Alicia B (274 ratings)",
      review_date: "Dec 19, 2020",
    },

    {
      brand_title: "Herdade da Maroteira",
      bottle_name: "Cem Reis Reserva Syrah 2018",
      bottle_img: "./images/bottle-img-four.png",
      country_name: "Portugal",
      region_name: "Alentejano",
      bottle_rating_value: "4.6",
      reviews_count: "397 ratings",
      price: "View shops",
      user_rating_number: "",
      review_message: "",
      review_person_name: "",
      review_date: "",
    },
  ];

  return (
    <div>
      <div className="header">
        <HeaderComponent></HeaderComponent>
        <SecondHeader></SecondHeader>
        {/* <div className="second-nav">
          <button>
            <img src={wineImg} className="second-nav-image" />
            <div className="dropdown-custom-title">Wines</div>
          </button>
          <button>
            <img src={offersImg} className="second-nav-image" />
            <div className="dropdown-custom-title">Offers</div>
          </button>
        </div> */}
        {/* <SecondNavComponent></SecondNavComponent> */}
        <SecondNavMobileComponent></SecondNavMobileComponent>
      </div>

      <div className="body-content">
        <h2 className="showing-text">
          Showing 2565 Red wines between $20 - $80 rated above 3.5 stars
        </h2>

        <FiltersShowingComponent></FiltersShowingComponent>
        <MobileFilterAndSortComponent></MobileFilterAndSortComponent>

        <div className="break"></div>
        <div className="row ">
          <div className="col-md-4 mobile-display-none">
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
            {/* {bodyRowContent.map((oneRow) => {
              <OneItemShowDivComponent brand_title="Tenuta Ulisse"></OneItemShowDivComponent>;
            })} */}

            {bodyRowContent.map((filterElement) => (
              <OneItemShowDivComponent
                brand_title={filterElement.brand_title}
                bottle_name={filterElement.bottle_name}
                bottle_img={filterElement.bottle_img}
                country_name={filterElement.country_name}
                region_name={filterElement.region_name}
                bottle_rating_value={filterElement.bottle_rating_value}
                reviews_count={filterElement.reviews_count}
                price={filterElement.price}
                user_rating_number={filterElement.user_rating_number}
                review_message={filterElement.review_message}
                review_person_name={filterElement.review_person_name}
                review_date={filterElement.review_date}
              />
            ))}
            {/* <OneItemShowDivComponent brand_title="Guerrieri"></OneItemShowDivComponent>
            <OneItemShowDivComponent brand_title="Tenuta Ulisse"></OneItemShowDivComponent>
            <OneItemShowDivComponent brand_title="Tenuta Ulisse"></OneItemShowDivComponent> */}
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
