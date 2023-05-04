import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  margin: 0 20px;
  padding: 0;
  overflow: hidden;
  background-color: #f6f4f0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #a41e1e29;
`;

export const ListItem = styled.li`
  display: block;
  color: #ccaf80;
  text-align: center;
  padding: 14px 40px;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    background-color: transparent;
  }

  &:focus {
    outline: none;
  }
`;
