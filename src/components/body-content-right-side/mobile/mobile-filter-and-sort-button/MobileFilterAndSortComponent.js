import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FilterByPriceRangeComponent from "../../../body-content-left-side/filter-by-price-range/FilterByPriceRangeComponent";
import FilterByStarRatingComponent from "../../../body-content-left-side/filter-by-star-rating/FilterByStarRatingComponent";
import FilterByWineTypeComponent from "../../../body-content-left-side/filter-by-wine-type/FilterByWineTypeComponent";
import FilterWithSearch from "../../../body-content-left-side/filter-with-search/FilterWithSearch";
import "./styles.scss";

function MobileFilterAndSortComponent() {
  const [filter, setfilter] = useState(false);

  const handleCloseForFilter = () => setfilter(false);
  const handlefilter = () => setfilter(true);

  const [sort, setSort] = useState(false);

  const handleCloseForSort = () => setSort(false);
  const handleSort = () => setSort(true);

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
      <div class="second-nav">
        <button>
          <div className="filter-custom-title" onClick={handlefilter}>
            Filter
          </div>
        </button>
        <button>
          <div className="filter-custom-title" onClick={handleSort}>
            Sort
          </div>
        </button>
      </div>

      <Modal
        show={filter}
        onHide={handleCloseForFilter}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <div class="filter-text">Filters</div>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="apply-filter-button">
            Apply
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={sort}
        onHide={handleCloseForSort}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <div>Sort</div>
        </Modal.Header>
        <Modal.Body>
          <div>
            <a class="one-sort-item">Highest User Rating</a>
            <a class="one-sort-item">Discount</a>
            <a class="one-sort-item">Price: Low to High</a>
            <a class="one-sort-item">Price: High to Low</a>
            <a class="one-sort-item">Popular</a>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MobileFilterAndSortComponent;
