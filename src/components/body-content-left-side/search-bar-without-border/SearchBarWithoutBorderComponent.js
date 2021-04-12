import React from "react";
import "./styles.scss";

function SearchBarWithoutBorderComponent(props) {
  return (
    <div>
      <div className="search-div">
        <input
          type="text"
          className="search-bar-for-filters"
          placeholder={props.searchText}
        />
      </div>
    </div>
  );
}

export default SearchBarWithoutBorderComponent;
