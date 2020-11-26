import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="searchBar">
      <form>
        <input type="text" placeholder="Type your city..." />
        <button type="submit">search</button>
      </form>
    </div>
  );
}

export default SearchBar;
