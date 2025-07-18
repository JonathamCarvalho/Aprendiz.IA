import { Message } from "./styles";

function MessageComponent({ text, isUser }) {
  return <Message $isUser={isUser}>{text}</Message>;
}

export default MessageComponent;
