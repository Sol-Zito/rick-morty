import React, { useState } from "react";
import axios from "axios";
import Characters from "../components/characters/Characters";

const Home = () => {
  let url = "https://rickandmortyapi.com/api/character";

  const [characters, setCharacters] = useState(null);

  const resqApi = () => {
    let api = axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setCharacters(data.results));
  };
  console.log("characters en home", characters);
  return (
    <div>
      <h1 className="title">Rick & Morty</h1>
      {characters ? (
        <Characters personajes={characters} setCharacters={setCharacters} />
      ) : (
        <>
          <img
            className="img-home"
            src="https://raw.githubusercontent.com/ratasi/rick-morty/master/src/img/rick-morty.png"
            alt="rick & morty"
          />

          <button className="btn-search" onClick={resqApi}>
            Ver personajes
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
