import React, { useContext, useState } from "react";
import Characters from "./Characters";
import { useReducer } from "react";
import { CharactersContext } from "../../Context/ContextChars";

const CharactersContainer = () => {
  const { state, dispatch } = useContext(CharactersContext);
  console.log("state.charactersApi", state.charactersApi);

  const [charactersApp, setCharacters] = useState({});

  const clearCharacters = () => {
    setCharacters(null);
  };
  return (
    <></>
    // <Characters
    //   clearCharacters={clearCharacters}
    //   charactersApp={charactersApp}
    // />
  );
};

export default CharactersContainer;
