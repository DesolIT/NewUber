/* eslint-disable @next/next/no-img-element */
import router from "next/router";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
`;

const Card = styled.div`
  width: 200px;
  height: 250px;
  box-shadow: rgb(0 0 0) 0px 2px 20px -13px;
  margin: 10px;
  border-radius: 10px;
`;

const CardMotorista = () => {
  const [listNames, setlistNames] = useState([]);
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      let arrayStorage = JSON.parse(localStorage.getItem("arregloStorage"));
      if (arrayStorage?.length > 0) setlistNames(arrayStorage);
    }
  }, []);

  return (
    <CardContainer>
      {listNames.map((listMot) => {
        return (
          <Card key={listMot.identidad}>
            <img src="/Sin título-1 copia.jpg" width="100" alt="pepe" />
            <div className="card-content">
              <span>Nombre : {listMot.nombre}</span>
              <br></br>
              <span>Edad : {listMot.edad}</span>
              <br></br>
              <span>DNI : {listMot.identidad}</span>
              <br></br>
              <span>Telefono : {listMot.telefono}</span>
            </div>
            <input
              type="button"
              value="Modificar"
              onClick={() =>
                router.push(`/motorista/edit/${listMot.identidad}`)
              }
            />
          </Card>
        );
      })}
    </CardContainer>
  );
};
export default CardMotorista;
