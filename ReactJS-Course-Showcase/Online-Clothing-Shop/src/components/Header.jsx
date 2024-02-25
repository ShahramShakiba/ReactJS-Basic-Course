import { useContext, useRef } from 'react';
import CartModal from './CartModal.jsx';
import logo from '../../public/logo.png';
import { CartContext } from '../Context/Cart-Context.jsx';

export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);

  const handleCart = () => {
    modal.current.open();
  };

  const cartQuantity = items.length;
  let modalActions = <button> Close </button>;
  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button> Close </button>
        <button> Checkout </button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" actions={modalActions} />

      <header id="main-header">
        <div id="main-title">
          <img src={logo} alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>

        <p>
          <button onClick={handleCart}> Cart ({cartQuantity}) </button>
        </p>
      </header>
    </>
  );
}
