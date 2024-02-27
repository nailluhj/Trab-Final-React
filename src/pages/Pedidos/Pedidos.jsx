/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useAuth } from "../../components/Authenticate/AuthContext";
import { api } from "../../api";
import { PedidosDiv } from "./styled";
import { formatPrice } from "../../utils/formatPrice";
import { Navigate } from "react-router-dom";

function Pedidos() {
  const { userLogged, isLogged } = useAuth();
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    getPedidos();
  }, []);

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  const getPedidos = async () => {
    const response = await api.get("/pedidos", {
      params: {
        idUser: userLogged.id,
      },
    });
    setPedidos(response.data);
  };

  return (
    <PedidosDiv>
      <h1>Aqui estão todos os seus pedidos, {userLogged?.nome || "Usuário"}</h1>
      {pedidos.length > 0 && pedidos[0].itens && (
        <ul>
          <h2>
            Valor total dos seus pedidos: {formatPrice(pedidos[0].valorTotal)}
          </h2>
          {pedidos[0].itens.map((pedido) => (
            <li key={pedido.idProduto}>
              <img src={pedido.imgurl} alt="imagemDopedido" />
              <div className="infos">
                <h2>{pedido.nome}</h2>
                <p>Preço: {formatPrice(pedido.valor)}</p>
                <p>Quantidade: {pedido.quantidade}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {pedidos.length == 0 && (
        <div className="mensagem">
          <h2>Você ainda não fez nenhum pedido</h2>
        </div>
      )}
    </PedidosDiv>
  );
}

export default Pedidos;
