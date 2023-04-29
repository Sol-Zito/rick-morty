import React, { useContext, useEffect } from "react";
import axios from "axios";
import { CharactersContext } from "../../Context/ContextChars";
import { Link } from "react-router-dom";

const Home = () => {
  let url = "https://rickandmortyapi.com/api/character";

  const { dispatch } = useContext(CharactersContext);

  useEffect(() => {
    let api = axios
      .get(url)
      .then((res) => res.data)
      .then((data) => dispatch({ type: "SET_CHARS", payload: data.results }));
  }, []);

  return (
    <>
      <h1 className="title">Rick & Morty</h1>

      <img
        className="img-home"
        src="https://raw.githubusercontent.com/ratasi/rick-morty/master/src/img/rick-morty.png"
        alt="rick & morty"
      />
      <div>
        <Link to="/characters">
          <button className="btn-search">Ver personajes</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
