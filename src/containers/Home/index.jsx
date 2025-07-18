import ButtonHeader from "../../components/Button";
import { useNavigate } from "react-router-dom";
import {
  ContainerBottom,
  ContainerButton,
  ContainerGlobal,
  ContainerTop,
  Input,
  Label,
} from "./styles";
import { useState } from "react";

function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    const useData = JSON.parse(localStorage.getItem("user"));

    if (!useData) {
      alert("Usúario não encontrado. Cadastre-se primeiro.");
      return;
    }
    if (useData.email === email && useData.senha === senha) {
      alert("Login realizado com sucesso!!!");
      navigate("/Chat");
    } else {
      alert("E-mail ou senha incorretos.");
    }
  };

  const navigate = useNavigate();
  return (
    <ContainerGlobal>
      <ContainerTop>
        <h1>Olá, Seja muito bem-vindo(a).</h1>
        <p>
          Eu sou o <strong>Aprendiz.IA</strong>, estou aqui para te ajudar no
          seu aprendizado! Caso você já tenha cadastro, coloque seu email e
          senha, por favor. <br /> <br />
          Caso você seja novo(a) aqui, para que possamos prosseguir, faça o seu
          cadastro gratuito abaixo!{" "}
        </p>
      </ContainerTop>

      <ContainerBottom>
        <Label>
          Email
          <Input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Label>
        <Label>
          Senha
          <Input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </Label>
        <ButtonHeader purple onClick={handleLogin}>
          Entrar
        </ButtonHeader>
        <ContainerButton>
          <ButtonHeader
            onClick={() => {
              navigate("/Register");
            }}
          >
            Criar uma conta
          </ButtonHeader>
          <ButtonHeader>Esqueci minha senha</ButtonHeader>
        </ContainerButton>
      </ContainerBottom>
    </ContainerGlobal>
  );
}

export default Home;
