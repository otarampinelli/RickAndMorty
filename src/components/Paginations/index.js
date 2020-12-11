import React from "react";

const Paginations = ({ pagination, name }) => {
  return (
    <div>
      <div>
        <button className="ButtonStatus" onClick={pagination}>
          {name}
        </button>
      </div>
    </div>
  );
};

export default Paginations;
