import { useEffect, useState, useRef } from "react";
import { ChatBox, Container, ContainerTop, Label, Main } from "./styles";
import MessageComponent from "../../components/Messages/messages";

function Chat() {
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  const cumprimentos = [
    "oi",
    "olá",
    "ola",
    "e aí",
    "opa",
    "bom  dia",
    "bomdia",
    "boa tarde",
    "boatarde",
    "boa noite",
    "boanoite",
    "chat",
    "ei",
  ];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.name) {
      setUserName(user.name);
    }
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const msgLower = userMessage.toLowerCase();

    if (cumprimentos.some((cumpr) => msgLower.includes(cumpr))) {
      return `Olá, ${userName} ! Tudo bem? Em que posso te ajudar?`;
    }

    if (msgLower.trim().endsWith("?")) {
      return `Ótima pergunta, ${userName}! Sou um projeto em desenvolvimento e no momento não consigo te responder. Em breve terei uma resposta para você.`;
    }

    return `Obrigado pela mensagem, ${userName}! me desculpe por não poder te ajudar no momento, mas logo mais poderei te ajudar melhor.`;
  };

  const handleEnviar = () => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      { text: message, autor: "user" },
      {
        text: getBotResponse(message),
        autor: "bot",
      },
    ]);

    setMessage("");
  };

  return (
    <Main>
      <ContainerTop>
        <h1>Aprendiz.IA</h1>
        <h2>
          Olá {userName} 👋, é muito bom ter você por aqui. Fico feliz em poder
          te ajudar em sua jornada, eu sou o <strong> Aprendiz.Ia</strong>
        </h2>
      </ContainerTop>

      <Container>
        <ChatBox>
          {messages.map((msg, index) => (
            <MessageComponent
              key={index}
              text={msg.text}
              isUser={msg.autor === "user"}
            />
          ))}
          <div ref={bottomRef} />
        </ChatBox>

        <Label>
          <h2> Como posso te ajudar?</h2>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEnviar()}
            placeholder="Tire sua dúvida aqui"
          />
        </Label>
      </Container>
    </Main>
  );
}

export default Chat;
