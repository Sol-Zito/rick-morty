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
        <h6>
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
        </h6>
        <p className="text-grey">
          <span>Especie: </span>
          <span>{character.species}</span>
        </p>
        <p className="text-grey">
          <span>Origen: </span>
          <span>{character.origin.name}</span>
        </p>
      </div>
      <div>
        <Link to={`/detailsCharacter/${character.id}`}>
          <button>More details</button>
        </Link>
      </div>
    </>
  );
};

export default CardCharacter;
