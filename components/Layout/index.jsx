import React from "react";
import PropTypes from "prop-types";
import { Cell, Grid } from "styled-css-grid";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from 'next/link'

const HeaderCell = styled(Cell)`
  position: sticky;
  top: 0;
  z-index: 6;
  height: 68px;
  box-shadow: rgb(0 0 0) 0px 2px 20px -13px;
  margin: 0;
  padding: 12px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

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
    padding: "0px 10px 0px 10px",
    fontSize: "1.25rem",
    fontWeight: "250",
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

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <Grid columns={"1fr"} rows={"minmax(68px,auto) 1fr "}>
      <HeaderCell width={3}>
        <h1>
          <Link href='/'>
            <a>Header</a>
          </Link>
        </h1>
        <CustomButton onClick={() => router.push("/motorista/create")}>Agregar Motorista</CustomButton>
        <CustomButton onClick={() => router.push("/solicitud/create")}>Crear Solicitud</CustomButton>
        <CustomButton onClick={() => router.push("/solicitud/listar/listar")}>Listar Solicitudes</CustomButton>
      </HeaderCell>

      <Cell>{children}</Cell>
    </Grid>
  );
};

Layout.propTypes = {};

export default Layout;
