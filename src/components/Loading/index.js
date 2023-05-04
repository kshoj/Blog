import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
`;

const Loading = () => (
  <Wrapper>
    <ReactLoading type="bubbles" color="#ccaf80" />
  </Wrapper>
);

export default Loading;
