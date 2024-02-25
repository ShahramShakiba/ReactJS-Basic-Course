import { useRef } from 'react';
import CartModal from './CartModal.jsx';
import logo from '../../public/logo.png';

export default function Header({ cart, onUpdateCartItemQuantity }) {
  const modal = useRef();

  const handleCart = () => {
    modal.current.open();
  };

  const cartQuantity = cart.items.length;
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
      <CartModal
        ref={modal}
        cartItems={cart.items}
        onUpdateCartItemQuantity={onUpdateCartItemQuantity}
        title="Your Cart"
        actions={modalActions}
      />

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
