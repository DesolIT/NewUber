import router from "next/router";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Cell, Grid } from "styled-css-grid";

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Card = styled.div`
  width: 200px;
  height: 250px;
  box-shadow: rgb(0 0 0) 0px 2px 20px -13px;
  margin: 10px;
  border-radius: 10px;
`;
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
    width: "50%",
  };
});

const CardSolicitud = ()=>{
 
const [listSolicit, setListSolicit] = useState([]);
useEffect(()=>{
    if (typeof localStorage != 'undefined') {
        let arregloStrg = JSON.parse(localStorage.getItem('Solicitudes'))
        if (arregloStrg?.length > 0) setListSolicit(arregloStrg)
    }         
},[])

return(
    <Grid columns={5}>
        {listSolicit.length > 0 
        ? listSolicit.map((listS)=>{
            return(
                <Cell width={1} key={listS.ident}>
                    <Card>
                    
                <div className="card-content">
                  <span>Nombre : {listS.nombre}</span>
                  <br></br>
                  <span>Motorista : {listS.motorista}</span>
                  <br></br>
                  <span>Direccion Recogida : {listS.dirR}</span>
                  <br></br>
                  <span>Direccion Destino : {listS.dirD}</span>
                  <br></br>
                  <span>Peso Pack: {listS.pesoPaq}</span>
                  <br></br>
                  <span>ID: {listS.ident}</span>
                </div>
                
                <input
                  type="button"
                  value="Modificar"
                  onClick={() =>
                    router.push(`/solicitud/editar/${listS.ident}`)
                  }
                />
                    </Card>
                </Cell>
            )
        }): <p>No existe ninguna solicitud para mostrar</p>
        }
    </Grid>
    ) 

}

export default CardSolicitud
              
              