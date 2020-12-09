import React from "react";

const Characters = ({ names, status, species, gender, image }) => {
  function getStatus() {
    if (status === "Alive") {
      return "StatusIconLive";
    } else {
      return "StatusIconUnknow";
    }
  }

  return (
    <article className="CharacterCard">
      <div className="Card">
        <img src={image} alt="avatar" />
      </div>
      <div className="CharacterContainer">
        <div className="Section">
          <span>
            <h2>{names}</h2>
          </span>
          <span className="Status">
            <span>
              {status} - {species}
            </span>
          </span>
        </div>
        <div className="Section">
          <span>{gender}</span>
        </div>
      </div>
    </article>
  );
};

export default Characters;
