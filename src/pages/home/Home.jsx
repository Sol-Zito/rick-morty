import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import CharactersContainer from "../../components/characters/CharactersContainer";
import { CharactersContext } from "../../Context/ContextChars";
import { Link } from "react-router-dom";

const Home = () => {
  let url = "https://rickandmortyapi.com/api/character";

  const [characters, setCharacters] = useState([]);
  const { dispatch } = useContext(CharactersContext);

  useEffect(() => {
    resqApi();
    dispatch({ type: "SET_CHARS", payload: characters });
  }, []);

  const resqApi = async () => {
    let api = await axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setCharacters(data.results));
  };

  return (
    <div>
      <h1 className="title">Rick & Morty</h1>
      {/* {characters ? (
        <CharactersContainer
          personajes={characters}
          setCharacters={setCharacters}
        />
      ) : ( */}
      <>
        <img
          className="img-home"
          src="https://raw.githubusercontent.com/ratasi/rick-morty/master/src/img/rick-morty.png"
          alt="rick & morty"
        />
        <Link to="/characters">
          <button className="btn-search" onClick={resqApi}>
            Ver personajes
          </button>
        </Link>
      </>
      {/* )} */}
    </div>
  );
};

export default Home;
