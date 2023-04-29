import React, { useContext } from "react";
import Characters from "./Characters";
import { CharactersContext } from "../../Context/ContextChars";

const CharactersContainer = () => {
  const { state } = useContext(CharactersContext);

  let charactersApp = state.charactersApi;

  return <Characters charactersApp={charactersApp} />;
};

export default CharactersContainer;
