import React,{useState, useEffect} from "react";
import { useRouter } from "next/router";

const Solicitud = ({id})=>{

    const router=useRouter();
    let sacarStorage;
    const [formValue, setFormValue] = useState({
        nombre: "",
        edad: "",
        telefono: "",
        identidad: "",
        valoraciones:[]
      });

      const [formSol, setFormSol] = useState({
        nombre: "",
        motorista: "",
        dirR: "",
        dirD: "",
        pesoPaq:"",
        ident:""
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

    const enviarDatos = (e)=>{
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
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      };

      const { nombre, motorista, dirR, dirD, pesoPaq, ident} = formSol;
 return (
     <>
        <h2>Registrar Solicitud</h2>

      <form onSubmit={enviarDatos}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre Completo"
          onChange={handleChange}
          value={nombre}
        />
        <select>
        {(listNames.length > 0) 
        ? listNames.map((opt)=>{
            return(
                <option key={ident} value={motorista}>
                    {opt.nombre}
                </option>
            )
        })
        : <p>Nada que mostrar</p>
    }
        </select>
        <br />
        <input
          type="text"
          name="direccionR"
          placeholder="Direccion de Recogida"
          onChange={handleChange}
          value={dirR}
        />
        
         <input
          type="text"
          name="direccionD"
          placeholder="Direccion de Destino"
          onChange={handleChange}
          value={dirD}
        />
        <br />
        <input
          type="text"
          name="paquetes"
          placeholder="Peso Paq Kg."
          onChange={handleChange}
          value={pesoPaq}
        />
        <br />
        <input
          type="text"
          name="identidad"
          placeholder="identidad"
          onChange={handleChange}
          value={ident}
        />
        <br />
        <input type="submit" value="Agregar" />
      </form>
     </>
 )
}

export default Solicitud