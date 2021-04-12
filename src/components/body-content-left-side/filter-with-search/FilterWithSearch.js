import React from "react";
import PillComponent from "../pill/PillComponent";
import SearchBarWithoutBorderComponent from "../search-bar-without-border/SearchBarWithoutBorderComponent";
import "./styles.scss";
import searchImage from "./../../../assests/img/search-icon.svg";

function FilterWithSearch(props) {
  const filterElements = props.filterElements;
  return (
    <div>
      <div className="row wine-heading-row">
        <div className="col-md-8 wine-types">{props.topic}</div>
      </div>
      <SearchBarWithoutBorderComponent
        searchText={props.searchText}
      ></SearchBarWithoutBorderComponent>

      <div className="filterPills">
        {filterElements.map((filterElement) => (
          <PillComponent
            pillName={props.pillName}
            textValue={filterElement}
            photo_icon={searchImage}
          />
        ))}
      </div>
    </div>
  );
}

export default FilterWithSearch;
