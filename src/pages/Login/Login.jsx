/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authenticateUser from "../../components/Authenticate";
import { useAuth } from "../../components/Authenticate/AuthContext";
import { Log } from "./styles";
import { GlobalStyle } from "../../Global/globalStyle";
import gif from "../../assets/Mario.gif";
import Mario from "../../assets/MarioParado.jpg";
import logo from "../../assets/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);
  const [imagem, setImagem] = useState(Mario);
  const { setIsLogged, setUserLogged } = useAuth();

  const handleLogin = async () => {
    const user = await authenticateUser(email, senha);

    if (user) {
      setIsLogged(true);
      setUserLogged(user);
      setMessage(false);
      setImagem(gif);
      setTimeout(() => {
        navigate("/home/produtos");
      }, 1900);
    } else {
      setMessage(true);
    }
  };

  return (
    <div>
      <Log>
        <img className="logo" src={logo} alt="logo" />
        <div className="login-container">
          <h1>Login</h1>
          <img src={imagem} alt="marioGif" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button onClick={handleLogin}>Entrar</button>
          {message && <p>Usuário não encontrado</p>}
          <div className="cadastrar">
            <p>Não tem uma conta?</p>
            <Link to={`cadastrar`}>Cadastre-se</Link>
          </div>
        </div>
      </Log>
      <GlobalStyle />
    </div>
  );
}

export default Login;
