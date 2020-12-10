import React from "react";

const Search = ({ inputType, buttonType, search, setSearch }) => {
  return (
    <div>
      <div className="SearchContainer">
        <input
          type={inputType}
          placeholder="Search a character"
          onChange={(e) => {
            console.log(e.target.value);
            setSearch(e.target.value.toLowerCase());
          }}
        ></input>
      </div>
    </div>
  );
};

export default Search;
