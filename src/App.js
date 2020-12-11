import React, { useEffect, useState } from "react";
import "./styles.css";
import Axios from "axios";

import Search from "./Search";
import Characters from "./components/Characters";
import Paginations from "./components/Paginations";

export default function App() {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [pages, setPages] = useState();
  const [searchCharacter, setSearchCharacter] = useState("");
  const [serachResults, setSearchResults] = useState([]);

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/character?page=${count}`).then(
      (response) => {
        setItems(response.data.results);
        setPages(response.data.info.pages);
      }
    );
  }, [count]);

  useEffect(() => {
    const results = items.filter((item) => {
      return item.name.toLowerCase().includes(searchCharacter);
    });
    setSearchResults(results);
  }, [searchCharacter, items]);

  const handleIncrement = () => {
    if (count < pages) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count >= 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <Search
        inputType={"text"}
        buttonType={"submit"}
        search={searchCharacter}
        setSearch={setSearchCharacter}
      />
      {items.length ? (
        <Characters items={items} />
      ) : (
        <div className="App">Loading...</div>
      )}
      <div className="ButtonContainer">
        <Paginations pagination={handleDecrement} name={"Previous"} />
        <Paginations pagination={handleIncrement} name={"Next"} />
      </div>
    </div>
  );
}
