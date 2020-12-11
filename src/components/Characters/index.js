import React from "react";
import "../../styles.css";

import Character from "../Character";

const Characters = ({ items }) => {
  /* function getStatus() {
    if (status === "Alive") {
      return "StatusIconLive";
    } else {
      return "StatusIconUnknow";
    }
  } */

  return (
    <div>
      {items.map((item) => {
        return (
          <div className="Container" key={item.id}>
            <Character
              names={item.name}
              status={item.status}
              species={item.species}
              gender={item.gender}
              image={item.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
