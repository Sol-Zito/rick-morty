import React from "react";
import CardCharacter from "../CardCharacter/CardCharacter";

const Characters = ({ clearCharacters, charactersApp }) => {
  return (
    <div className="characters">
      <h1>Personajes:</h1>
      <span className="back-home" onClick={clearCharacters}>
        Back Home
      </span>
      <div className="container-characters">
        {charactersApp.map((character) => (
          <div className="character-container" key={character.id}>
            <CardCharacter character={character} />
          </div>
        ))}
      </div>
      <span className="back-home" onClick={clearCharacters}>
        Back home
      </span>
    </div>
  );
};

export default Characters;
