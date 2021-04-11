import React from "react";
import "./styles.scss";

function SearchBarComponent(props) {
  return (
    <div>
      <div className="main-div">
        <input
          type="text"
          className="search-bar"
          placeholder="Search any wine"
        />
      </div>
    </div>
  );
}

export default SearchBarComponent;
