import styled from "styled-components";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const OwnRow = styled(Row)`
  margin: 0;
  padding: 30px 0;
  border-top: ${(props) => props.border || "none"};
`;

export const Text = styled.p`
  font-size: 14px;
  color: #434343;
  margin: 0;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const OwnDiv = styled.div`
  margin: 5px 0;
  word-break: break-word;
`;

export const OwnSpan = styled.span`
  color: ${(props) => props.textColor || "#959595"};
  font-size: 12px;
  margin: 0 1px;
`;

export const RealBtn = styled(Link)`
  padding: 5px 35px;
  border: 1px solid #cbaf80;
  background-color: #cbaf80;
  color: white;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #cbaf80;
    background-color: transparent;
  }

  @media (max-width: 768px) {
    padding: 5px 30px;
  }
`;
export const CircleFrame = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  box-shadow: 0 0px 5px 0 #ccaf80;
  margin-bottom: 10px;
  @media (max-width: 375px) {
    width: 90px;
    height: 90px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: ${(props) => props.radius || "100%"};
`;

export const WrapBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px 70px 0;
  @media (min-width: 1920px) {
    padding: 50px 200px 0;
  }
  @media (max-width: 992px) {
    padding: 50px 20px 0;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 20px 0;
  }
  @media (max-width: 375px) {
    padding: 0;
  }
`;

export const BackColor = styled.div`
  background-color: #f6f4f0;
  min-height: 100vh;
`;

export const FullWidth = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 35%;
  }
  @media (max-width: 375px) {
    width: 50%;
  }
`;

export const Label = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  background-color: #a41e1ea1;
  color: white;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  padding: 5px;
  font-size: 13px;
`;

export const ErrorText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
`;
