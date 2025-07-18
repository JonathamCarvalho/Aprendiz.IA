import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ButtonHeader from "../../components/Button";
import {
  ContainerBottom,
  ContainerGlobal,
  ContainerTop,
  Input,
  Label,
} from "./styles";

function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!nome || !email || !senha) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const emailValido = /\S+@\S+\.\S+/;
    if (!emailValido.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    const user = {
      name: nome,
      email,
      senha,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("cadastro realizado com sucesso!");
    navigate("/");
  };

  return (
    <ContainerGlobal>
      <ContainerTop>
        <h1>Olá, Seja muito bem-vindo(a).</h1>
        <p>
          Eu sou o <strong>Aprendiz.IA</strong>, para se cadastrar é muito
          simples e rápido! basta digitar seu nome, email e senha Porfavor.
        </p>
      </ContainerTop>

      <ContainerBottom>
        <Label>
          Nome
          <Input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </Label>
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
        <ButtonHeader purple onClick={handleRegister}>
          Criar
        </ButtonHeader>
      </ContainerBottom>
    </ContainerGlobal>
  );
}

export default Register;
