import React from "react";

const SearchBar = ({ onSearch, searchKeyword, setSearchKeyword }) => {
  return (
    <div className="search-bar-container">
        <div className="search">
            <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="Enter keyword"
            />
            <button onClick={onSearch}><i className="fas fa-search"></i></button>
        
        </div>
    </div>
  );
};

export default SearchBar;