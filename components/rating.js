import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

const RatingStars = ({ id }) => {
  const [ratingValue, setRatingValue] = useState(0);
  useEffect(() => {
    if (id)
      if (typeof localStorage !== "undefined") {
        let arrayStorage = JSON.parse(localStorage.getItem("newArreglo2"));
        const motorista = arrayStorage.find((el) => el.identidad === id);
        if (motorista && motorista.valoraciones.length > 0) {
          console.log(
            motorista.valoraciones.reduce((acc, current) => {
              return acc + current;
            }, 0),
            motorista.valoraciones.length
          );
          setRatingValue(
            motorista.valoraciones.reduce((acc, current) => {
              return acc + current;
            }, 0) / motorista.valoraciones.length
          );
        }
      }
  }, [id]);

  const handleRating = (rate) => {
    if (id)
      if (typeof localStorage !== "undefined") {
        let arrayStorage = JSON.parse(localStorage.getItem("newArreglo2"));
        const motorista = arrayStorage.find((el) => el.identidad === id);
        if (motorista) {
          motorista.valoraciones.push(rate);
          setRatingValue(
            motorista.valoraciones.reduce((acc, current) => {
              return acc + current;
            }, 0) / motorista.valoraciones.length
          );
          localStorage.setItem(
            "newArreglo2",
            JSON.stringify(
              arrayStorage.map((el) => (el.identidad === id ? motorista : el))
            )
          );
        }
      }
  };
  return (
    <div>
      <Rating onClick={handleRating} 
      ratingValue={ratingValue} />
    </div>
  );
};
export default RatingStars;
      
