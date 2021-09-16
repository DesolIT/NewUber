import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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

const Form = ({ id }) => {
  const router = useRouter();
  let sacarStorage;
  const [formValue, setFormValue] = useState({
    nombre: "",
    edad: "",
    telefono: "",
    identidad: "",
    valoraciones:[]
  });

  useEffect(() => {
    if (id)
      if (typeof localStorage !== "undefined") {
        let arrayStorage = JSON.parse(localStorage.getItem("newArreglo2"));
        setFormValue(arrayStorage.find((el) => el.identidad === id));
      }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    let datos = JSON.parse(localStorage.getItem("newArreglo2")) || [];
    let result = [...datos];

    if (id) {
      result = datos.map((el) => {
        if (el.identidad === id) {
          return formValue;
        }
        return el;
      });
    } else {
      result.push(formValue);
    }

    localStorage.setItem("newArreglo2", JSON.stringify(result));
    sacarStorage = JSON.parse(localStorage.getItem("newArreglo2"));
    router.push("/");
  };

  const { nombre, edad, telefono, identidad} = formValue;
  return (
    <div>
      <h2>Agregar Motorista</h2>

      <form onSubmit={enviarDatos}>
        <Grid columns={2}>
          <Cell width={1}>
          <CustomInput
            type="text"
            name="nombre"
            placeholder="Nombre Completo"
            onChange={handleChange}
            value={nombre}
            required
          />
          </Cell>
          <Cell width={1}>
          <CustomInput 
            type="text"
            name="edad"
            placeholder="Edad"
            onChange={handleChange}
            value={edad}
          />
          </Cell>
          <Cell width={1}>
          <CustomInput 
            type="text"
            name="telefono"
            placeholder="Telefono"
            onChange={handleChange}
            value={telefono}
          />
          </Cell>
          <Cell width={1}>
          <CustomInput 
          type="text"
          name="identidad"
          placeholder="identidad"
          onChange={handleChange}
          value={identidad}
          required
          />
          </Cell>
        </Grid>
         
        <CustomButton type="submit">{id ? 'Modificar':'Agregar'}</CustomButton>
      </form>
    </div>
  );
};
export default Form;
        
        
