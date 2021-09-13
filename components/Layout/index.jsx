import React from "react";
import PropTypes from "prop-types";
import { Cell, Grid } from "styled-css-grid";
import styled from "styled-components";
import { useRouter } from "next/router";

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

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <Grid columns={"1fr"} rows={"minmax(68px,auto) 1fr "}>
      <HeaderCell width={3}>
        <h1>Header</h1>
        <button onClick={() => router.push("/motorista/create")}>Agregar Motorista</button>
        <button onClick={() => router.push("/motorista/createSolic")}>Crear Solicitud</button>
      </HeaderCell>

      <Cell>{children}</Cell>
    </Grid>
  );
};

Layout.propTypes = {};

export default Layout;
