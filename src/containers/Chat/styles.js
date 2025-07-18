import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
  margin: 14px 14px 0;
`;

export const ContainerTop = styled.div`
  padding: 14px;
  h1 {
    margin-bottom: 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
`;

export const ChatBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  overflow-y: auto;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 50%;
  padding-bottom: 64px;
  h2 {
    text-align: center;
  }

  input {
    height: 80px;
    border: 2px solid transparent;
    border-radius: 19px;
    padding-left: 16px;
  }
`;
