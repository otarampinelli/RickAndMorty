import React from "react";

const Pagination = ({ pagination, name }) => {
  function getPage() {
    console.log("oi");
  }

  return (
    <div>
      <div className="ButtonContainer">
        <button className="ButtonStatus" onClick={pagination}>
          {name}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
