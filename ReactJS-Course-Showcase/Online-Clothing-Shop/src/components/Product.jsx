import { useContext, useState } from 'react';
import { CartContext } from '../Context/Cart-Context';

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext);
  const [addedItem, setAddedItem] = useState(false);

  const handleAddToCart = () => {
    addItemToCart(id);
    setAddedItem(true);
  };

  return (
    <article className="product">
      <img src={image} alt={title} />

      <div className="product-content">
        <div>
          <h3> {title} </h3>
          <p className="product-price"> ${price} </p>
          <p> {description} </p>
        </div>

        <p className="product-actions">
          <button onClick={handleAddToCart} disabled={addedItem}>
            {addedItem ? 'Already Added' : '+ Add to Cart'}
          </button>
        </p>
      </div>
    </article>
  );
}
