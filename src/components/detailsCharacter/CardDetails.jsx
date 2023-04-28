import React from "react";

const CardDetails = ({ characterSelect }) => {
  return (
    <>
      <h1>Detalles de: </h1>
      <h3>{characterSelect.name}</h3>
      <div>
        <img src={characterSelect.image} alt={characterSelect.name} />
      </div>
      <div>
        <h6>
          {characterSelect.status === "Alive" ? (
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
          <span>{characterSelect.species}</span>
        </p>
        <p className="text-grey">
          <span>Origen: </span>
          <span>{characterSelect.origin.name}</span>
        </p>
      </div>
    </>
  );
};

export default CardDetails;
