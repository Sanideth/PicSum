import React, { useContext, useState } from "react";
import { Context } from "../../components/context/Context";
import CartItem from "../../components/CartItem";

function Cart() {
  const { cartItems, clearCart } = useContext(Context);
  const [buttonText, setButtonText] = useState("Place Order");
  const totalCost = (cartItems.length * 5.99).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const cartElements = cartItems.map((item) => (
    <CartItem key={item.id} data={item} />
  ));

  // Order logic to simulate the delay
  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place Order");
      clearCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check Out</h1>
      {cartElements}
      <p className="total-cost">Total: {totalCost}</p>
      <div className="order-button">
        {cartItems.length > 0 ? (
          <button onClick={placeOrder}>{buttonText}</button>
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </div>
    </main>
  );
}

export default Cart;
