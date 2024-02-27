import styled from "styled-components";

export const PedidosDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  padding-bottom: 100px;

  ul{
    list-style-type: none;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 50%;

    li{
      background-color: white;
      display: flex;
      gap: 12px;
      border-radius: 12px;
      height: 200px;
      img{
        width: 50%;
        border-radius: 12px;
      }

      .infos{
        padding-top: 20px;
        display: flex;
        gap: 30px;
        flex-direction: column;

        p{
          font-size: 16px;
        }
      }
    }
  }

  .mensagem{
    margin-top: 20px;
  }
`
  
