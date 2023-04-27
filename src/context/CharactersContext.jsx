import { createContext, useReducer } from "react";

export const CharactersApi = createContext();

const initCharacters = {
  charactersApi: [],
};

function changeChar(characterState, action) {
  switch (action.type) {
    case "SET_CHARS":
      let chars = action.payload;
      return { ...characterState, charactersApi: chars };

    default:
      break;
  }
}

const CharactersApiProvider = ({ children }) => {
  const [characterState, characterDispatch] = useReducer(
    changeChar,
    initCharacters
  );
  return (
    <CharactersApi.Provider value={{ characterState, characterDispatch }}>
      {children}
    </CharactersApi.Provider>
  );
};

export default CharactersApiProvider;
