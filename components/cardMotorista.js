import router from 'next/router';
import React,{useState, useEffect} from 'react'

const cardMotorista = ()=>{
  
    const [listNames, setlistNames] = useState([]);
    useEffect(()=>{
        if (typeof localStorage !== 'undefined') {
            let arrayStorage = JSON.parse(localStorage.getItem("arregloStorage"))
            console.log(arrayStorage);
              setlistNames(arrayStorage);
             console.log(listNames);

    }},[])
    
          
    return(
        <div>
        {listNames.map((listMot)=>{
            return(
                <div className="card" >
                    
                    <img src='/Sin título-1 copia.jpg' width='100' />
                    <div className="card-content">
                        <span>Nombre : {listMot.nombre}</span> 
                        <br></br>
                        <span>Edad : {listMot.edad}</span> 
                        <br></br>
                        <span>DNI : {listMot.identidad}</span> 
                        <br></br>
                        <span>Telefono : {listMot.telefono}</span> 
                    </div>
                    <input type='button' value='Modificar' onClick={()=>router.push(`/motorista/edit/${listMot.identidad}`)} />
                </div>
            )
            })}
         
           </div>
         
    )
}
export default cardMotorista
