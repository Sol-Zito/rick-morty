import React from "react";
import CardCharacter from "../CardCharacter/CardCharacter";

const Characters = ({ charactersApp }) => {
  return (
    <div className="characters">
      <h1>Personajes:</h1>
      <div className="container-characters">
        {charactersApp.map((character) => (
          <div className="character-container" key={character.id}>
            <CardCharacter character={character} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
