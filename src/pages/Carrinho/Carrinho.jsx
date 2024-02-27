/* eslint-disable no-unused-vars */
import { useCarrinho } from "./CarrinhoContext";
import { formatPrice } from "../../utils/formatPrice";
import { useAuth } from "../../components/Authenticate/AuthContext";
import { api } from "../../api";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { CarrinhoDiv } from "./styled";

function Carrinho() {
  const { pedidos, setPedidos } = useCarrinho();
  const { userLogged, isLogged } = useAuth();
  const navigate = useNavigate();

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  const calcularValorTotal = () => {
    return pedidos.reduce((total, produto) => total + produto.valorTotal, 0);
  };

  const removerProdutoDoCarrinho = (produtoId) => {
    setPedidos((prevPedidos) =>
      prevPedidos.filter((pedido) => pedido.itens[0].idProduto !== produtoId)
    );
  };

  const ValorTotalProdutos = (valor, quantidade) => {
    return valor * quantidade;
  };

  const finalizarCompra = async () => {
    const response = await api.get(`pedidos?idUser=${userLogged.id}`);

    if (response.data.length === 0) {
      const novoValorTotal = pedidos.reduce((total, produto) => {
        return total + produto.itens[0].valor * produto.itens[0].quantidade;
      }, 0);

      const newOrder = {
        valorTotal: novoValorTotal,
        idUser: userLogged.id,
        itens: pedidos.map((produto) => ({
          idProduto: produto.itens[0].idProduto,
          imgurl: produto.itens[0].imgurl,
          nome: produto.itens[0].nome,
          valor: ValorTotalProdutos(
            produto.itens[0].valor,
            produto.itens[0].quantidade
          ),
          quantidade: produto.itens[0].quantidade,
        })),
      };

      try {
        const createResponse = await api.post("pedidos", newOrder);

        if (createResponse.status === 201) {
          console.log("Pedido adicionado com sucesso!");
          setPedidos([]);
          navigate("/home/pedidos");
        } else {
          console.error("Erro ao adicionar pedido.");
        }
      } catch (error) {
        console.error("Erro ao adicionar pedido:", error);
      }
    } else {
      const existingOrder = response.data[0];

      const novoValorTotal = pedidos.reduce((total, produto) => {
        return total + produto.itens[0].valor * produto.itens[0].quantidade;
      }, existingOrder.valorTotal);

      const updatedOrder = {
        ...existingOrder,
        valorTotal: novoValorTotal,
        itens: [
          ...existingOrder.itens,
          ...pedidos.map((produto) => ({
            idProduto: produto.itens[0].idProduto,
            imgurl: produto.itens[0].imgurl,
            nome: produto.itens[0].nome,
            valor: ValorTotalProdutos(
              produto.itens[0].valor,
              produto.itens[0].quantidade
            ),
            quantidade: produto.itens[0].quantidade,
          })),
        ],
      };

      try {
        const updateResponse = await api.put(
          `pedidos/${existingOrder.id}`,
          updatedOrder
        );
        if (updateResponse.status === 200) {
          console.log("Pedido atualizado com sucesso!");
          setPedidos([]);
          navigate("/home/pedidos");
        } else {
          console.error("Erro ao atualizar pedido.");
        }
      } catch (error) {
        console.error("Erro ao atualizar pedido:", error);
      }
    }
  };

  const clearCart = () => {
    setPedidos([]);
  };

  return (
    <CarrinhoDiv>
      <h1>Seu Carrinho {pedidos == "" ? "está vazio" : ""}</h1>
      <div className="wrapper">
        <div className="products">
          {pedidos.map((produto) => (
            <div key={produto.itens[0].idProduto} className="produto-carrinho">
              <img src={produto.itens[0].imgurl} alt="imagemDoProduto" />
              <div className="infos">
                <h2>{produto.itens[0].nome}</h2>
                <p>Quantidade: {produto.itens[0].quantidade}</p>
                <p>Preço: {formatPrice(produto.valorTotal)}</p>
                <button
                  onClick={() =>
                    removerProdutoDoCarrinho(produto.itens[0].idProduto)
                  }
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>

        {pedidos != "" && (
          <div className="options">
            <p>Valor Total: {formatPrice(calcularValorTotal())}</p>
            <button onClick={finalizarCompra}>Finalizar compra</button>
            <button onClick={clearCart}>Esvaziar carrinho</button>
            <button>
              <Link to={`/home/produtos`}>Continuar comprando</Link>
            </button>
          </div>
        )}
      </div>
    </CarrinhoDiv>
  );
}

export default Carrinho;
