/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types'; 


const CarrinhoContext = createContext();


export const CarrinhoProvider = ({ children }) => {
 
  const [pedidos, setPedidos] = useState([]);

 
  const carrinhoContextValue = useMemo(() => ({ pedidos, setPedidos }), [pedidos, setPedidos]);

  return (
    <CarrinhoContext.Provider value={carrinhoContextValue}>
      {children}
    </CarrinhoContext.Provider>
  );
};


CarrinhoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
  }
  return context;
};
