import { useState } from "react";
import { api } from "../../api";
import { Link, useNavigate } from "react-router-dom";
import { Cad } from "./styled";
import Luigi from "../../assets/Luigi3.jpg";
import { GlobalStyle } from "../../Global/globalStyle";
import logo from "../../assets/logo.png";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailExists, setEmailExists] = useState(false); // State to track if the email already exists
  const navigate = useNavigate();

  const addUser = async (nome, email, senha) => {
    try {
      const response = await api.get("/users");
      const existingUser = response.data.find((user) => user.email === email);
      
      if (existingUser) {
        setEmailExists(true); 
      } else {
        await api.post("/users", {
          nome: nome,
          email: email,
          senha: senha,
        });
        setEmailExists(false); 
        navigate("/");
       
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome === "" || email === "" || senha === "") {
      return;
    } else {
      addUser(nome, email, senha);
    }

    setNome("");
    setEmail("");
    setSenha("");

    
  };

  return (
    <div>
      <Cad>
        <img className="logo" src={logo} alt="logo" />
        <div className="cadastro-container">
          <h1>Cadastro</h1>
          <img src={Luigi} alt="Luigi" />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome Completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
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
            <button type="submit">Cadastrar</button>
          </form>
          {emailExists && (
            <p style={{ color: "red" }}>Este email já foi cadastrado.</p>
          )}
          <div className="voltar">
            <Link to={`/`}>Voltar para o login</Link>
          </div>
        </div>
      </Cad>
      <GlobalStyle />
    </div>
  );
}

export default Cadastro;