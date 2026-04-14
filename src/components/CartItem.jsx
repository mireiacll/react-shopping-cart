import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />

      <div className="cart-details">
        <h4>{item.title}</h4>
      </div>

      <div className="cart-price">
        ${item.price.toFixed(2)}
      </div>

      <div className="cart-controls">
        <button
          onClick={() =>
            updateQuantity(item.id, item.quantity - 1)
          }
        >
          −
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() =>
            updateQuantity(item.id, item.quantity + 1)
          }
        >
          +
        </button>

        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;