import styled from "styled-components";

export const Message = styled.div`
  max-width: 60%;
  padding: 12px;
  border-radius: 12px;
  background-color: ${({ $isUser }) => ($isUser ? "#7d5fff" : "#e0e0e0")};
  color: ${({ $isUser }) => ($isUser ? "#ffffff" : "#000000")};
  align-self: ${({ $isUser }) => ($isUser ? "flex-end" : "flex-start")};
`;
