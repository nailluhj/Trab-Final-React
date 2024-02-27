import styled from "styled-components";

export const Navegacao = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 12px 500px 0 0;
  position: relative;

  .logo {
    padding-left: 20px;
    h1 {
      color: white;
      font-size: 60px;
      font-family: "New Super Mario Font U", sans-serif;
    }
  }

  .paginas {
    display: flex;
    gap: 30px;
    align-items: center;

    a {
      &:hover {
        position: relative;
        top: -3px;
        transition: ease .5s;
        color: yellow;
      }
    }
  }

  a {
    font-family: "New Super Mario Font U", sans-serif;
    font-size: 40px;
    color: white;
  }

  .logout {
    position: absolute;
    right: 10px;
    bottom: 0;
    transform: translateY(-100%);

    a{
      &:hover{
        color: yellow;
        transition: ease .5s;
      }
    }
  }
`;
