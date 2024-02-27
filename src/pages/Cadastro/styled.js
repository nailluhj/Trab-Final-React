import styled from "styled-components";
import imagem from "../../assets/login.jpg";

export const Cad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${imagem});
  background-size: 1920px 1080px;
  color: #fff;

  .logo{
    position: absolute;
    top: 12px;
    left: 20px;
  }

  .cadastro-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    background: rgba(16, 16, 16, 0.79);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.2px);
    -webkit-backdrop-filter: blur(8.2px);
    border: 1px solid rgba(16, 16, 16, 0.21);
    padding: 70px 0;
    width: 30%;
   
    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    h1 {
      margin-bottom: 20px;
      color: white;
    }

    img {
      width: 130px;
      border-radius: 50%;
    }

    input {
      margin: 5px 0;
      padding: 10px;
      border: 1px solid white;
      color: white;
      background: transparent;
      border-radius: 5px;
      width: 80%;
    }

    button {
      background-color: #0074d9;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      margin-top: 10px;
    
    }

    button:hover {
      background-color: #0056b3;
    }

    p{
      color: white;
    }

    .voltar {
      a {
        color: red;
      }
    }
  }
`;