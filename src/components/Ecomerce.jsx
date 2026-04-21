import React, { useState } from "react";

const Ecomerce = () => {
const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 15000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    name: "Laptop",
    price: 55000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 3,
    name: "LED Light",
    price: 800,
    image: "https://images.unsplash.com/photo-1555696958-c6c6c4f9c5f6",
  },
  {
    id: 4,
    name: "Desktop PC",
    price: 65000,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: 1200,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },
  {
    id: 6,
    name: "Smart Watch",
    price: 3500,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },

  // 🔥 NEW 6 PRODUCTS

  {
    id: 7,
    name: "Bluetooth Headphones",
    price: 2500,
    image: "https://images.unsplash.com/photo-1580894908361-967195033215",
  },
  {
    id: 8,
    name: "Tablet",
    price: 22000,
    image: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126",
  },
  {
    id: 9,
    name: "Office Chair",
    price: 8000,
    image: "https://images.unsplash.com/photo-1582582494700-8e7b6b2a8d6d",
  },
  {
    id: 10,
    name: "Mechanical Keyboard",
    price: 3500,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
  },
  {
    id: 11,
    name: "VR Headset",
    price: 18000,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
  },
  {
    id: 12,
    name: "Power Bank",
    price: 1500,
    image: "https://images.unsplash.com/photo-1609592806596-4d5f5c7b3b5e",
  },
];

  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [qty, setQty] = useState(1);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [trxId, setTrxId] = useState("");

  // Add to cart
  const addToCart = (product, quantity) => {
    const exist = cart.find((i) => i.id === product.id);

    if (exist) {
      setCart(
        cart.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)),
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((i) =>
        i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i,
      ),
    );
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleConfirm = () => {
    if (!paymentMethod) return alert("Select payment method");
    if (!trxId) return alert("Enter Transaction ID");

    alert(`
🎉 Order Confirmed
Method: ${paymentMethod}
Amount: ৳${total}
TRX ID: ${trxId}
    `);

    setCart([]);
    setSelectedProduct(null);
    setQty(1);
    setPaymentMethod("");
    setTrxId("");
  };

  return (
    <div className="w-11/12 mx-auto min-h-screen bg-gray-50 p-6">
      {/* PRODUCT GRID */}
      {!selectedProduct ? (
        <>
          <h2 className="text-3xl font-bold mb-6">🛍️ Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={p.image}
                  className="h-48 w-full object-cover hover:scale-105 transition"
                />

                <div className="p-4">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <p className="text-gray-600">৳ {p.price}</p>

                  <button
                    onClick={() => {
                      setSelectedProduct(p);
                      setQty(1);
                    }}
                    className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {/* DETAILS */}
          <div className="bg-white p-5 rounded-xl shadow">
            <button
              onClick={() => setSelectedProduct(null)}
              className="text-blue-500 mb-3"
            >
              ← Back
            </button>

            <img
              src={selectedProduct.image}
              className="w-full h-60 object-cover rounded-lg"
            />

            <h2 className="text-2xl font-bold mt-3">{selectedProduct.name}</h2>

            <p className="text-lg text-gray-600">৳ {selectedProduct.price}</p>

            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>

              <span>{qty}</span>

              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => addToCart(selectedProduct, qty)}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>

          {/* CART + PAYMENT */}
          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-3">🛒 Cart</h2>

            {cart.length === 0 && <p>No items</p>}

            {cart.map((item) => (
              <div key={item.id} className="border-b py-3">
                <p className="font-bold">{item.name}</p>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 bg-gray-200"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 bg-gray-200"
                  >
                    +
                  </button>
                </div>

                <p className="text-sm">৳ {item.price * item.quantity}</p>
              </div>
            ))}

            <h3 className="mt-3 font-bold">Total: ৳ {total}</h3>

            {/* PAYMENT */}
            {cart.length > 0 && (
              <div className="mt-5 border-t pt-4">
                <h3 className="font-bold mb-2">💳 Payment</h3>

                <p className="text-green-600 font-bold">Send to: 01785288324</p>

                <p>Amount: ৳ {total}</p>

                <div className="flex gap-2 mt-3">
                  {["bKash", "Nagad", "Rocket"].map((m) => (
                    <button
                      key={m}
                      onClick={() => setPaymentMethod(m)}
                      className={`px-3 py-1 rounded ${
                        paymentMethod === m
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>

                <input
                  value={trxId}
                  onChange={(e) => setTrxId(e.target.value)}
                  placeholder="Transaction ID"
                  className="border p-2 w-full mt-3 rounded"
                />

                <button
                  onClick={handleConfirm}
                  className="mt-3 w-full bg-black text-white py-2 rounded-lg"
                >
                  Confirm Order
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Ecomerce;
