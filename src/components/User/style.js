import styled from "styled-components";

export const FullBack = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 50px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 576px) {
    padding: 0px;
    justify-content: center;
  }
`;

export const ProfileBox = styled.div`
  width: 232px;
  padding: 15px 0;
  margin: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  @media (max-width: 992px) {
    width: 267px;
    padding: 15px 7px;
  }
  @media (max-width: 768px) {
    width: 391px;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 15px 0px;
  }
`;

export const UserNameBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
