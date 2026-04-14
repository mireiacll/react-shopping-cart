import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return <h2>Your cart is empty.</h2>;
  }

  return (
    <div className="page">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: ${getCartTotal().toFixed(2)}</h3>
    </div>
  );
}

export default Cart;