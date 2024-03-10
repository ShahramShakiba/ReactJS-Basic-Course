import CartContext from './cart-context';

export default function CartProvider({ children }) {
  const addItemHandler = (item) => {};

  const removeItemHandler = (id) => {};

  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
