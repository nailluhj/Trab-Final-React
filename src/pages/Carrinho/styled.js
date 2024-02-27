import styled from "styled-components";

export const CarrinhoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px 0;

  .wrapper {
    display: flex;
    gap: 40px;
    width: 80%;

    .products {
      display: flex;
      flex-direction: column;
      gap: 30px;
      width: 70%;

      .produto-carrinho {
        display: flex;
        gap: 20px;
        background-color: white;
        border-radius: 8px;

        img {
          width: 70%;
          height: 250px;
          border-radius: 8px;
        }

        .infos {
          margin-top: 12px;

          h2 {
            margin-bottom: 12px;
          }

          p {
            font-size: 16px;
            margin-bottom: 12px;
          }

          button {
            margin-top: 30px;
            padding: 12px;
            cursor: pointer;
            background-color: #d93a00;
            color: white;
            border: none;
            border-radius: 8px;

            &:hover {
              background-color: #9c3611;
              transition: ease 0.5s;
            }
          }
        }
      }
    }

    .options {
      padding: 12px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 30%;

      p {
        margin: 12px 0;
        text-align: center;
      }

      button {
        width: 70%;
        margin-bottom: 16px;
        padding: 12px;
        cursor: pointer;
        background-color: #ffff00;
        color: black;
        border: none;
        border-radius: 8px;
        font-size: 18px;

        a {
          color: black;
          display: block;
          width: 100%;
        }

        &:hover {
          background-color: #b8b814;
          transition: ease 0.5s;
        }
      }
    }
  }
`;
