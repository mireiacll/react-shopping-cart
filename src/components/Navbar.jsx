import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { getCartCount } = useCart();

  return (
    <nav className="navbar">
      <h1>React Shop</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({getCartCount()})</Link>
      </div>
    </nav>
  );
}

export default Navbar;