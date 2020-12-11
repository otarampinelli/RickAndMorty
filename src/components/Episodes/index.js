import React from "react";

import Episode from "../Episode";

const Episodes = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div>
            <Episode
              name={item.name}
              ariDate={item.air_date}
              episode={item.episode}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Episodes;
