import { useState } from "react";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <div className="quantity">
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
          -
        </button>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={() => setQuantity(quantity + 1)}>
          +
        </button>
      </div>

      <button onClick={() => addToCart(product, quantity)}>
        Add To Cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;