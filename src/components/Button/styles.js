import styled from "styled-components";

export const ButtonPurple = styled.button`
  width: 60%;
  height: 34px;
  font-size: 20px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  background: rgba(106, 50, 159, 0.8);
  margin: 10px;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;
export const ButtonTransparent = styled.button`
  border: none;
  background: transparent;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;
