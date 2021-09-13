import React, {useState, useEffect} from "react";
import Select from "react-select/src/Select";

const Seleccionar = ()=>{
    const [opciones, setOpciones] = useState(null);
    
    const [listNames, setlistNames] = useState([]);

    useEffect(() => {
      if (typeof localStorage !== "undefined") {
        let arrayStorage = JSON.parse(localStorage.getItem("newArreglo2"));
        if (arrayStorage?.length > 0) setlistNames(arrayStorage);
      }
    }, []);

    const handleChange=(event)=>{
        setOpciones(()=>{
            opciones: event.target.value
        })
    }


    return(
        <>
            <Select
                className = 'motoristas'
                isDisabled = {false}
                name = 'motoristas'
                options = {}
                onChange = {handleChange}
            />
        </>
    )
}

export default Seleccionar