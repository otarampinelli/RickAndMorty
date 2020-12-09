import React from "react";

const Search = ({ inputType, buttonType, search, setSearch }) => {
  return (
    <div>
      <div className="SearchContainer">
        <p>{search}</p>
        <input
          type={inputType}
          placeholder="Search a character"
          onChange={(e) => {
            console.log(e.target.value);
            setSearch(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Search;
