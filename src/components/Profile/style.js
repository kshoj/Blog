import styled from "styled-components";

export const ProfileDetail = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
  border-radius: 10px;
`;

export const InfoBox = styled.div`
  flex-direction: ${(props) => props.column || "row"};
  box-shadow: 0 6px 16px 0 #ccaf80, 0 6px 20px 0 #e0d9cc;
  background-color: white;
  width: ${(props) => props.size};
  padding: 20px;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justify || "space-between"};
  border-radius: 10px;

  @media (min-width: 1920px) {
    padding: 20px 50px;
  }

  @media (max-width: 768px) {
    width: ${(props) => props.smSize};
    padding: 20px 50px;
  }

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export const PostPic = styled.div`
  width: 100%;
  position: relative;
  button {
    border: none;
    outline: none;
    background-color: transparent;
    i {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      &.bookmark {
        color: red;
      }
    }
  }
`;

export const PostWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: space-between;
  padding: 20px 0;

  @media (max-width: 1130px) {
    width: 250px;
  }
  @media (max-width: 992px) {
    width: 205px;
  }
  @media (max-width: 768px) {
    width: 217px;
  }
  @media (max-width: 576px) {
    width: 260px;
  }
`;

export const RowPost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0;
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: center;
  }
`;
