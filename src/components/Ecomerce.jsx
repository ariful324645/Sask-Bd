import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Ecomerce = () => {
  const products = [
    {
      id: 1,
      name: "সাফল্যের সিঁড়ি – ১",
      price: 200,
      oldPrice: 300,
      image: "https://i.ibb.co.com/1YP0L68V/b-1.jpg",
    },
    {
      id: 2,
      name: "সাফল্যের সিঁড়ি – 2",
      price: 200,
      oldPrice: 350,
      image: "https://i.ibb.co.com/xKkkC4Vd/b-3.jpg",
    },
    {
      id: 3,
      name: "রূপান্তর",
      price: 200,
      oldPrice: 300,
      image: "https://i.ibb.co.com/j942w7qv/b-2.jpg",
    },
    {
      id: 4,
      name: "জীবনের ধারাপাত",
      price: 200,
      oldPrice: 400,
      image: "https://i.ibb.co.com/v4QkPMzT/b-4.jpg",
    },
  ];

  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [trxId, setTrxId] = useState("");

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
    <div className="w-11/12 mx-auto min-h-screen bg-gray-50 p-6 relative">
      {!selectedProduct ? (
        <>
          <h2 className="text-3xl text-center font-bold mb-6">বইসমূহ</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => {
              const discount = Math.round(
                ((p.oldPrice - p.price) / p.oldPrice) * 100,
              );

              return (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={p.image}
                      className="h-86 w-full object-cover bg-white"
                      alt={p.name}
                    />

                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {discount}% OFF
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-lg">{p.name}</h3>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-green-600 font-bold text-lg">
                        ৳ {p.price}
                      </span>

                      <span className="text-gray-400 line-through text-sm">
                        ৳ {p.oldPrice}
                      </span>
                    </div>

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
              );
            })}
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
              className="h-90 w-full object-cover bg-white"
              alt={selectedProduct.name}
            />

            <h2 className="text-2xl font-bold mt-3">{selectedProduct.name}</h2>

            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-bold text-green-600">
                ৳ {selectedProduct.price}
              </span>

              <span className="text-gray-400 line-through">
                ৳ {selectedProduct.oldPrice}
              </span>
            </div>

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

            {cart.length > 0 && (
              <div className="mt-5 border-t pt-4">
                <h3 className="font-bold mb-2">💳 Payment</h3>

                <p className="text-green-600 font-bold">
                  Send to: +৮৮০১৩০১-৫০০৩৯৬
                </p>

                <p>Amount: ৳ {total}</p>

                <div className="flex gap-2 mt-3">
                  {[
                    {
                      name: "bKash",
                      logo: "https://i.ibb.co.com/4RQwvtRs/bkash.webp",
                      color: "bg-pink-500 border-pink-500 text-white",
                    },
                    {
                      name: "Nagad",
                      logo: "https://i.ibb.co.com/SX2mdRYk/Nagad-1.png",
                      color: "bg-orange-500 border-orange-500 text-white",
                    },
                    {
                      name: "Rocket",
                      logo: "https://i.ibb.co.com/DfVvnVWT/Rocket.png",
                      color: "bg-purple-600 border-purple-600 text-white",
                    },
                  ].map((m) => (
                    <button
                      key={m.name}
                      onClick={() => setPaymentMethod(m.name)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
                        paymentMethod === m.name
                          ? m.color
                          : "bg-white hover:bg-gray-100 border-gray-300"
                      }`}
                    >
                      <img
                        src={m.logo}
                        alt={m.name}
                        className="w-20 h-20 object-contain"
                      />
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

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/8801846737645"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition duration-300 hover:scale-110"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default Ecomerce;
