import React, { useEffect, useState } from "react";
import Axios from "axios";

import Episodes from "./components/Episodes";

const AllEpisodes = () => {
  const [items, setItems] = useState([]);
  const [characterEpisodes, setCharacterEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/episode").then((response) => {
      const responseUsers = response.data.results.map((item) => {
        return item.characters;
      });
      setCharacterEpisodes(responseUsers);
      setItems(response.data.results);
    });
  }, []);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setCharacters(response.data.results);
    });
  }, []);

  //let teste = "https://rickandmortyapi.com/api/character/33";

  //console.log(teste.replace("https://rickandmortyapi.com/api/character/", ""))

  return (
    <div>
      {items.length ? <Episodes items={items} /> : <div>Loading...</div>}
    </div>
  );
};

export default AllEpisodes;
