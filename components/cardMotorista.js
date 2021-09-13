/* eslint-disable @next/next/no-img-element */
import router from "next/router";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Rating from "./rating";

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
      let arrayStorage = JSON.parse(localStorage.getItem("newArreglo2"));
      if (arrayStorage?.length > 0) setlistNames(arrayStorage);
    }
  }, []);

  return (
    <CardContainer>
      {(listNames.length > 0) ?
      listNames.map((listMot) => {
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
              <br></br>
              {/* <span>Votaciones : {listMot.contVot}</span>
              <br></br>
              <span>Puntuacion : {listMot.votacion}</span> */}
            </div>
            <Rating id={listMot.identidad}/> 
            <input
              type="button"
              value="Modificar"
              onClick={() =>
                router.push(`/motorista/edit/${listMot.identidad}`)
              }
            />
            {/* <input
              type="button"
              value="Crear Solicitud"
              onClick={() =>
                router.push(`/motorista/solicitud/crear/${listMot.identidad}`)
              }
            /> */}
          </Card>
        );
      })
      : <p>Debe agregar al menos un elemento a la lista </p>
      }
    </CardContainer>
  );
};
export default CardMotorista;
