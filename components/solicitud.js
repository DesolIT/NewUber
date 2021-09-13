import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Cell, Grid } from "styled-css-grid";
import styled from "styled-components";

const CustomInput = styled.input((props) => {
  return {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#ced4da",
    borderRadius: ".3rem",
    outline: "none",
    boxShadow: "none",
    fontSize: "1rem",
    fontFamily: "Arial",
    marginTop: "2px",
    position: "relative",
    marginBottom: "0px",
    boxSizing: "border-box",
    padding: ".5rem 1rem",
    fontSize: "1.1rem",
    lineHeight: "1.5",
    borderRadius: ".3rem",
    width: "100%",
  };
});

const CustomButton = styled.button((props) => {
  return {
    background: "linear-gradient(to top, #3949ab 50%, #1228af 50%) bottom",
    backgroundSize: "200% 200%",
    borderRadius: "4px",
    color: "white",
    border: "1px solid #3949ab",
    textTransform: "uppercase !important",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    ":hover": {
      backgroundPosition: "top",
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
      border: "1px solid #1228af",
    },
    ":focus": {
      boxShadow: "0px 0px 0px 1px white, 0px 0px 0px 3px #3949ab",
    },
    ":disabled": {
      opacity: "0.6",
    },
    padding: "0px 16px 0px 16px",
    fontSize: "1.25rem",
    fontWeight: "500",
    lineHeight: "3.25rem",
    borderRadius: ".3rem",
    letterSpacing: ".0892857143em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    margin: "0",
    opacity: "1",
    transition: ".2s ease-out",
  };
});

const Solicitud = ({ id }) => {
  const router = useRouter();
  let sacarStorage;
  const [formValue, setFormValue] = useState({
    nombre: "",
    edad: "",
    telefono: "",
    identidad: "",
    valoraciones: [],
  });

  const [formSol, setFormSol] = useState({
    nombre: "",
    motorista: "",
    dirR: "",
    dirD: "",
    pesoPaq: "",
    ident: "",
  });

  const [listNames, setlistNames] = useState([]);

  // para cargar nombre de los motoristas en el select
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      let arrayStorage = JSON.parse(localStorage.getItem("newArreglo2"));
      if (arrayStorage?.length > 0) setlistNames(arrayStorage);
    }
  }, []);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      let arreglo = JSON.parse(localStorage.getItem("arraySolicitudes"));
      if (arreglo?.length > 0) setFormSol(arreglo);
    }
  }, []);

  const enviarDatos = (e) => {
    e.preventDefault();
    let datos = JSON.parse(localStorage.getItem("arraySolicitudes")) || [];
    let result = [...datos];

    if (id) {
      result = datos.map((el) => {
        if (el.identidad === id) {
          return formSol;
        }
        return el;
      });
    } else {
      result.push(formSol);
    }

    localStorage.setItem("arraySolicitudes", JSON.stringify(result));
    sacarStorage = JSON.parse(localStorage.getItem("arraySolicitudes"));
    router.push("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(
      "🚀 ~ file: solicitud.js ~ line 65 ~ handleChange ~ name, value",
      name,
      value
    );
    setFormSol((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { nombre, motorista, dirR, dirD, pesoPaq, ident } = formSol;
  return (
    <>
      <h2>Registrar Solicitud</h2>

      <form onSubmit={enviarDatos}>
        <Grid columns={2}>
          <Cell width={1}>
            <CustomInput
              type="text"
              name="nombre"
              placeholder="Nombre Completo"
              onChange={handleChange}
              value={nombre}
            />
          </Cell>
          <Cell width={1}>
            <select name="motorista" value={motorista} onChange={handleChange}>
              {listNames.length > 0 ? (
                listNames.map((opt) => {
                  return (
                    <option key={opt.identidad} value={opt.identidad}>
                      {opt.nombre}
                    </option>
                  );
                })
              ) : (
                <p>Nada que mostrar</p>
              )}
            </select>
          </Cell>
          <Cell width={1}>
            <CustomInput
              type="text"
              name="dirR"
              placeholder="Direccion de Recogida"
              onChange={handleChange}
              value={dirR}
            />
          </Cell>
          <Cell width={1}>
            <CustomInput
              type="text"
              name="dirD"
              placeholder="Direccion de Destino"
              onChange={handleChange}
              value={dirD}
            />
          </Cell>
          <Cell width={1}>
            <CustomInput
              type="text"
              name="pesoPaq"
              placeholder="Peso Paq Kg."
              onChange={handleChange}
              value={pesoPaq}
            />
          </Cell>
        </Grid>

        <br />

        <br />

        <br />
        <CustomButton type="submit">Agregar</CustomButton>
      </form>
    </>
  );
};

export default Solicitud;
