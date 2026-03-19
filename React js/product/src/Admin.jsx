import React, { useEffect, useState } from "react";

function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      {orders.map((order) => (
        <div key={order.id}>
          <p>{order.name} bought {order.product}</p>
        </div>
      ))}
    </div>
  );
}

export default Admin;