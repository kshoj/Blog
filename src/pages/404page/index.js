import React from "react";
import { Container } from "react-bootstrap";
import { ErrorText } from "src/components/common";
const ErrorPage = () => {
  return (
    <Container>
      <ErrorText>
        <h4>OoOoOps This Page Doesn't Exist</h4>
      </ErrorText>
    </Container>
  );
};

export default ErrorPage;
