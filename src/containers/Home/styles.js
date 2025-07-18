import styled from "styled-components";

export const ContainerGlobal = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

export const ContainerTop = styled.div`
  margin: 10px auto;

  h1 {
    font-size: 35px;
    font-weight: 800;
    text-align: center;
    padding: 10px;
  }

  p {
    font-size: 17px;
    padding: 4px;
  }
`;

export const ContainerBottom = styled.div`
  border: 2px solid transparent;
  border-radius: 10px;
  background: rgb(161 168 168);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50%;
  height: 305px;
  font-size: 20px;
  margin-top: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  font-size: 16px;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 13px;
  margin-bottom: 10px;
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 13px;
`;
