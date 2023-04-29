import React from "react";

const CardDetails = ({ characterSelect }) => {
  return (
    <div>
      <h1>Detalles de: </h1>
      <h3>{characterSelect.name}</h3>
      <div>
        <img src={characterSelect.image} alt={characterSelect.name} />
      </div>

      <p className="text-grey">
        <span>Genero: </span>
        <span>{characterSelect.gender}</span>
      </p>
      <p className="text-grey">
        <span>Especie: </span>
        <span>{characterSelect.species}</span>
      </p>
      <p className="text-grey">
        <span>Episodios: </span>
        <span>{characterSelect.episode.length}</span>
      </p>
      <p className="text-grey">
        <span>Locacion: </span>
        <span>{characterSelect.location.name}</span>
      </p>
    </div>
  );
};

export default CardDetails;
