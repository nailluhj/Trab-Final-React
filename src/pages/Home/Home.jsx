/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Cabecalho } from "./styled";
import { GlobalStyle } from "../../Global/globalStyle";

function Home() {
  return (
    <>
      <Cabecalho>
        <NavBar />
      </Cabecalho>

      <Outlet />
      <GlobalStyle/>
    </>
  );
}

export default Home;
