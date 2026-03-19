import React from "react";
import { toast } from "react-toastify";

function Product() {
  const handleBuy = () => {
    const order = {
      id: Date.now(),
      name: "Rahul",
      product: "iPhone 14"
    };

    // Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));

    // Toast notification
    toast.success("Order Placed ✅");

    // Browser notification
    if (Notification.permission === "granted") {
      new Notification("New Order 🛒", {
        body: `${order.name} bought ${order.product}`
      });
    } else {
      Notification.requestPermission();
    }

    // Sound alert
    const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
    audio.play();
  };

  return (
    <div>
      <h2>Product</h2>
      <button onClick={handleBuy}>Buy Now</button>
    </div>
  );
}

export default Product;