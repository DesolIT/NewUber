import React,{useState } from "react";

const Form=()=>{

    let sacarStorage;
    
    const [formValue, setFormValue] = useState({
        nombre:'',  
        edad: '',
        telefono:'',
        identidad:''
    })
    
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormValue((prevState) =>{
            return{
                ...prevState,
                [name]:value
            };
        });
    }

    const enviarDatos = (e)=>{
        
        let datos = JSON.parse(localStorage.getItem("arregloStorage")) || [];
        // setArreglo(datos);
        
        datos.push(formValue)
        
        localStorage.setItem('arregloStorage', JSON.stringify(datos));
        sacarStorage = JSON.parse(localStorage.getItem("arregloStorage"));
        console.log(sacarStorage);
        e.preventDefault();
    }

    const {nombre, edad, telefono, identidad} = formValue;
    return(
        <div>
            <h2>Agregar Motorista</h2>
            <form onSubmit = {enviarDatos}>

            <input
                type = 'text'
                name = 'nombre'
                placeholder = 'Nombre Completo'
                onChange = {handleChange}
                value = {nombre}
            />
            <br />
            <input
                type = 'text'
                name = 'edad'
                placeholder = 'Edad'
                onChange = {handleChange}
                value = {edad}
            />
            <br />
            <input
                type = 'text'
                name = 'telefono'
                placeholder = 'Telefono'
                onChange = {handleChange}
                value = {telefono}
            />
            <br />
           <input
                type = 'text'
                name = 'identidad'
                placeholder = 'identidad'
                onChange = {handleChange}
                value = {identidad}
            />
            <br />
            <input 
                type = 'submit'
                value = 'Agregar'
            />
            </form>
        </div>
    )
}
export default Form