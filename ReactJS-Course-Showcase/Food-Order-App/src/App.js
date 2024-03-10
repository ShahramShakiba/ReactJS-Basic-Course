import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './context/CartProvider';

export default function App() {
  const [cartVisibility, setCartVisibility] = useState(false);

  const showCartHandler = () => {
    setCartVisibility(true);
  };
  const hideCartHandler = () => {
    setCartVisibility(false);
  };

  return (
    <CartProvider>
      {cartVisibility && <Cart onHideCart={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
