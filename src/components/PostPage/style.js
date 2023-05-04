import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeadTitle = styled.h5`
  text-align: left;
  color: #434343;
`;

export const Description = styled.div`
  border-bottom: ${(props) => props.borderBottom || "none"};
  padding: 10px 0;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const CommentBlock = styled.div`
  padding: 5px 10px;
  background-color: #d1cccc;
  width: 100%;
  border-radius: 5px;
  margin: 7px 0;
`;

export const WrapComments = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
