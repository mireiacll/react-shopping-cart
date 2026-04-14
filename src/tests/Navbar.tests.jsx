import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";

test("renders navigation links", () => {
  render(
    <BrowserRouter>
      <CartProvider>
        <Navbar />
      </CartProvider>
    </BrowserRouter>
  );

  expect(screen.getByText(/home/i)).toBeInTheDocument();
  expect(screen.getByText(/shop/i)).toBeInTheDocument();
  expect(screen.getByText(/cart/i)).toBeInTheDocument();
});