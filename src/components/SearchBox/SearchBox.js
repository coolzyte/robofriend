import React from "react";
import "./SearchBox.scss";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="SearchBox">
      <input
        className="SearchBox__Input"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
