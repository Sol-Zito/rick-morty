import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsCharacter = () => {
  const [characterSelect, setCharacterSelect] = useState(null);
  const { id } = useParams();

  const [item, setItem] = useState(false);

  useEffect(() => {
    let api = axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => setCharacterSelect(res.data));
    setItem(true);
  }, [id]);

  return (
    <>
      <h1>Detalles:</h1>
      {characterSelect ? (
        <>
          <div>
            <img src={characterSelect.image} alt={characterSelect.name} />
          </div>
          <div>
            <h3>{characterSelect.name}</h3>
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
      ) : (
        <Skeleton variant="rectangular" width={210} height={118} />
      )}
    </>
  );
};

export default DetailsCharacter;
