import React, { useEffect, useState } from "react";
import "./styles.css";
import Axios from "axios";

import Character from "./Characters";
import Pagination from "./Pagination";
import Search from "./Search";

// Usando a api https://rickandmortyapi.com/api/character
// fazer uma requisição e apresentar essas propriedades:
// name
// status
// species
// gender
// image

// Elas vem do objeto e estão dentro da propriedade results uma array com elas.
// Pode executar essa url no navegador pra ver o que vem.
// Faz um estilo bonito pra isso trata tudo separado
// tipo aqui nessa pagina https://rickandmortyapi.com
// se poddivel cria alguns componentes separados pro codigo não ficar todo em um aquivo.

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
      <ul>
        {serachResults.map((item) => {
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
      </ul>
      {items.length ? (
        items.map((item) => {
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
        })
      ) : (
        <div className="App">Loading...</div>
      )}
      <div className="ButtonContainer">
        <Pagination pagination={handleDecrement} name={"Previous"} />
        <Pagination pagination={handleIncrement} name={"Next"} />
      </div>
    </div>
  );
}
