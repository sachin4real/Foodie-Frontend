import { useEffect, useState } from "react";
import axios from "axios";


function Orders() {
    const [orders, setOrders] = useState([]);
    const [payments, setPayments] = useState([]);
   let customerId = "cus01"

    useEffect(() => {
      if (!customerId) return;
  
      // Fetch orders by customer
      axios.get(`http://localhost:8080/api/orders/customer/${customerId}`)
        .then((res) => {
          setOrders(res.data);
        })
        .catch((err) => {
          console.error("Failed to fetch orders:", err);
        });
  
      // Fetch all payments
      axios.get("http://localhost:8080/api/payments")
        .then((res) => {
          setPayments(res.data);
        })
        .catch((err) => {
          console.error("Failed to fetch payments:", err);
        });
    }, [customerId]);
  
    const getPaymentForOrder = (orderId) =>
      payments.find((p) => p.orderId === orderId);
  
    return (
      <div className="flex flex-col bg-gray-50 min-h-screen">
        <div className="sticky top-0 z-20 bg-white shadow-sm p-4">
          <h1 className="text-2xl font-bold text-orange-500">My Orders</h1>
        </div>
  
        <main className="p-6 pt-4">
          {orders.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">You haven’t placed any orders yet.</p>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => {
                const payment = getPaymentForOrder(order.id);
                return (
                  <div
                    key={order.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-[1.01] duration-300 overflow-hidden"
                  >
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">Order ID: {order.id}</h3>
                        <p className="text-sm text-gray-500">Placed on: {new Date(order.createdAt).toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-orange-500">Total: Rs. {order.totalPrice}</p>
                        <p className={`text-xs font-medium ${payment?.paymentStatus === 'SUCCESS' ? 'text-green-600' : 'text-red-500'}`}>
                          Payment: {payment?.paymentStatus || "Pending"}
                        </p>
                      </div>
                    </div>
  
                    <div className="p-4 bg-gray-50">
                      <h4 className="text-sm font-semibold mb-2 text-orange-500">Items</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {order.items.map((item) => (
                          <div
                            key={item.itemId}
                            className="flex items-center space-x-3 border border-gray-200 p-2 rounded-md bg-white"
                          >
                            <img
                              src={item.imagePath}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                              <h5 className="font-medium text-sm">{item.name}</h5>
                              <p className="text-xs text-gray-500">{item.description}</p>
                              <span className="text-orange-500 text-sm font-semibold">
                                Rs. {item.price} * {item.quantity}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      </div>
    );
  }
  
  
  export default Orders;
  