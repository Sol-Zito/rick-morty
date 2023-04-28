import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetails from "./CardDetails";

const DetailsCharacterContainer = () => {
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
      {characterSelect ? (
        <>
          <CardDetails characterSelect={characterSelect} />
        </>
      ) : (
        <Skeleton variant="rectangular" width={210} height={118} />
      )}
    </>
  );
};

export default DetailsCharacterContainer;
