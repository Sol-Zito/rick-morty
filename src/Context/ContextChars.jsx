import React, { createContext, useReducer } from "react";
export const CharactersContext = createContext();

const setStorage = (arr) => {
  return localStorage.setItem("characters", JSON.stringify(arr));
};

const getStorage = () => {
  let data = localStorage.getItem("characters");
  return data ? JSON.parse(data) : [];
};

const initValues = {
  charactersApi: getStorage(),
};

function changeReducer(state, action) {
  switch (action.type) {
    case "SET_CHARS":
      let chars = action.payload;
      console.log("chars", chars);
      setStorage(chars);
      return { ...state, charactersApi: getStorage() };

    default:
      return { ...state };
  }
}

const ContextCharsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeReducer, initValues);
  return (
    <CharactersContext.Provider value={{ state, dispatch }}>
      {children}
    </CharactersContext.Provider>
  );
};

export default ContextCharsProvider;
