import React from "react";

const Episode = ({ name, airDate, episode }) => {
  return (
    <article className="CharacterCard">
      <div className="CharacterContainer">
        <div className="Section">
          <span>
            <h2>{name}</h2>
          </span>
          <span className="Status">
            <span>{airDate}</span>
          </span>
        </div>
        <div className="Section">
          <span>{episode}</span>
        </div>
      </div>
    </article>
  );
};

export default Episode;
