import React from "react";
import { Link } from "react-router-dom";

const CardCharacter = ({ character }) => {
  return (
    <>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div>
        <h3>{character.name}</h3>
        <h4>
          {character.status === "Alive" ? (
            <>
              <span className="alive" />
              Alive
            </>
          ) : (
            <>
              <span className="dead" />
              Dead
            </>
          )}
        </h4>
        <p className="text-grey">
          <span style={{ textDecoration: "underline" }}>Especie:</span>
          <span> {character.species}</span>
        </p>
        <p className="text-grey">
          <span style={{ textDecoration: "underline" }}>Origen:</span>
          <span> {character.origin.name}</span>
        </p>

        <Link to={`/detailsCharacter/${character.id}`}>
          <button>More details</button>
        </Link>
      </div>
    </>
  );
};

export default CardCharacter;
