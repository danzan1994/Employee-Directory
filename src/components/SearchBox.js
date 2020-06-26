import React from "react";
import "../styles/SearchBox.css";

function SearchBox({ handleSearchChange }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          // ADD ONCHANGE EVENT AND ASSIGN THE CALLBACK PASSED IN TO IT
          // THIS CALLBACK TAKES IN EVENT AS INPUT ARGUMENT
        />
      </form>
    </div>
  );
}
export default SearchBox;
