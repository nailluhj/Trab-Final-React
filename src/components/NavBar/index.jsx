import { Link } from "react-router-dom";
import { Navegacao } from "./styled";
import logo from "../../assets/logo.png"

const NavBar = () => {
  return (
    <Navegacao>
      <div className="logo"> 
        <img src={logo} alt="logo" />
      </div>
      <div className="paginas">
        <Link to={`pedidos`}>Pedidos</Link>
        <Link to={`produtos`}>Produtos</Link>
        <Link to={`carrinho`}>Carrinho</Link>
      </div>
        <div className="logout">
          <Link to={`/`}>logout</Link>
        </div>
    </Navegacao>
  );
};

export default NavBar;
