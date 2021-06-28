import React from "react";
import styled from "styled-components";

import "./errorPage.css";
import deineris from "../../../assets/img/deineris.jpeg";

const ErrorBlock = styled.div`
  color: #fff;
`;

const ErrorPage = () => {
  return (
    <>
      <img src={deineris} alt="deineris" width={400}></img>
      <ErrorBlock>Something went wrong!</ErrorBlock>
    </>
  );
};

export default ErrorPage;
