import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Form = ({ id }) => {
  const router = useRouter();
  let sacarStorage;
  const [formValue, setFormValue] = useState({
    nombre: "",
    edad: "",
    telefono: "",
    identidad: "",
  });

  useEffect(() => {
    if (id)
      if (typeof localStorage !== "undefined") {
        let arrayStorage = JSON.parse(localStorage.getItem("arregloStorage"));
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
    let datos = JSON.parse(localStorage.getItem("arregloStorage")) || [];
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

    localStorage.setItem("arregloStorage", JSON.stringify(result));
    sacarStorage = JSON.parse(localStorage.getItem("arregloStorage"));
    console.log(sacarStorage);
    router.push("/");
  };

  const { nombre, edad, telefono, identidad } = formValue;
  return (
    <div>
      <h2>Agregar Motorista</h2>
      <form onSubmit={enviarDatos}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre Completo"
          onChange={handleChange}
          value={nombre}
        />
        <br />
        <input
          type="text"
          name="edad"
          placeholder="Edad"
          onChange={handleChange}
          value={edad}
        />
        <br />
        <input
          type="text"
          name="telefono"
          placeholder="Telefono"
          onChange={handleChange}
          value={telefono}
        />
        <br />
        <input
          type="text"
          name="identidad"
          placeholder="identidad"
          onChange={handleChange}
          value={identidad}
        />
        <br />
        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
};
export default Form;
