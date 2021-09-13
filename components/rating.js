import React, { useEffect, useState } from "react";
import {Rating} from 'react-simple-star-rating' 
import { useRouter } from "next/router";

const RatingStars = ({id})=>{
  
  let sacarStorage;
  const [formValue, setFormValue] = useState({
    nombre: "",
    edad: "",
    telefono: "",
    identidad: "",
    valoraciones:[]
  });
  let arreglo = [];
   
            const router = useRouter();

            const [rating, setRating]=useState(0)
            const [valorar, setValorar] = useState([]);
            
            useEffect(() => {
              if (id)
              if (typeof localStorage !== "undefined") {
                let arrayStorage = JSON.parse(localStorage.getItem("newArreglo2"));
                  setFormValue(arrayStorage.find((el) => el.identidad === id));
                  
              }
                  
            }, [id]);
                   

          const handleRating=(rate)=>{
              let datos = JSON.parse(localStorage.getItem("newArreglo2")) || [];
              let result = [...datos];
              
              if (id) {
                result = datos.map((el) => {
                  if (el.identidad === id) {
                    setRating(rate);
                   
                  }
                  return console.log(el);;
                });
              } 
                // console.log(result);
                // localStorage.setItem("newArreglo2", JSON.stringify(result));
                // sacarStorage = JSON.parse(localStorage.getItem("newArreglo2"));
                
                // router.push("/");
                // console.log(sacarStorage);
             } 
            return(
                
                <div>
                    <Rating 
                        onClick={handleRating}
                        ratingValue={rating}
                    />
                    {/* <p>{iterador} votaciones</p>
                    <p>Puntuacion {counta > 0 
                    ? counta/iterador
                    : 0    
                }</p> */}
               
                </div>
            )
}
export default RatingStars
