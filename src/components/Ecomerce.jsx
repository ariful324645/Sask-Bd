

import React, { useState } from "react";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";

const Ecomerce = () => {
  const products = [
    {
      id: 1,
      name: "সাফল্যের সিঁড়ি – ১",
      price: 200,
      oldPrice: 300,
      image: "https://i.ibb.co.com/1YP0L68V/b-1.jpg",
      writer: "ড. রেবেকা সুলতানা",
    },
    {
      id: 2,
      name: "সাফল্যের সিঁড়ি – 2",
      price: 200,
      oldPrice: 350,
      image: "https://i.ibb.co.com/xKkkC4Vd/b-3.jpg",
      writer: "ড. রেবেকা সুলতানা",
    },
    {
      id: 3,
      name: "রূপান্তর",
      price: 200,
      oldPrice: 300,
      image: "https://i.ibb.co.com/j942w7qv/b-2.jpg",
      writer: "ড. রেবেকা সুলতানা",
    },
    {
      id: 4,
      name: "জীবনের ধারাপাত",
      price: 200,
      oldPrice: 400,
      image: "https://i.ibb.co.com/v4QkPMzT/b-4.jpg",
      writer: "ড. রেবেকা সুলতানা",
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
    <div className="min-h-screen bg-gray-50 pb-8 relative">
      {!selectedProduct ? (
        <>
          <h1 className="text-4xl font-bold text-center bg-gray-700 pt-32 rounded-lg pb-8 text-white">
            বইসমূহ
          </h1>

          <div className="w-11/12 mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <h3 className="text-lg font-bold text-gray-800">
                      {p.name}
                    </h3>

                    <h3 className="text-lg font-bold text-gray-800">
                      {p.writer}
                    </h3>

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
                      বিস্তারিত দেখুন
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div>
          <h1 className="text-4xl font-bold text-center bg-gray-700 pt-32 rounded-lg pb-8 text-white"></h1>

          <div className="grid md:grid-cols-2 gap-8 w-11/12 mx-auto mt-14">
            {/* DETAILS CARD */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Card Header */}
              <div className="bg-gray-800 px-5 py-4">
                <h2 className="text-xl font-bold text-white">
                  বইয়ের বিস্তারিত
                </h2>
              </div>

              <div className="p-5">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="mb-4 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:shadow"
                >
                  <FaArrowLeft />
                  <span>ফিরে যান</span>
                </button>

                {/* Product Image */}
                <div className="overflow-hidden rounded-xl bg-gray-50">
                  <img
                    src={selectedProduct.image}
                    className="h-90 w-full object-cover transition duration-300 hover:scale-105"
                    alt={selectedProduct.name}
                  />
                </div>

                {/* Product Info */}
                <div className="mt-5">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedProduct.name}
                  </h2>

                  <p className="mt-1 text-gray-500">
                    লেখক: {selectedProduct.writer}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-2xl font-extrabold text-green-600">
                      ৳ {selectedProduct.price}
                    </span>

                    <span className="text-base text-gray-400 line-through">
                      ৳ {selectedProduct.oldPrice}
                    </span>

                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-500">
                      অফার
                    </span>
                  </div>

                  {/* Quantity */}
                  <div className="mt-5">
                    <p className="mb-2 text-sm font-semibold text-gray-700">
                      পরিমাণ
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-lg font-bold text-gray-700 transition hover:bg-gray-200"
                      >
                        -
                      </button>

                      <span className="flex h-9 min-w-12 items-center justify-center rounded-lg border border-gray-200 bg-white font-bold text-gray-800">
                        {qty}
                      </span>

                      <button
                        onClick={() => setQty(qty + 1)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-lg font-bold text-gray-700 transition hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Add Cart */}
                  <button
                    onClick={() => addToCart(selectedProduct, qty)}
                    className="mt-6 w-full rounded-xl bg-green-600 py-3 font-bold text-white shadow-md transition hover:bg-green-700 hover:shadow-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* CART + PAYMENT CARD */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Cart Header */}
              <div className="bg-gray-800 px-5 py-4">
                <h2 className="text-xl font-bold text-white">🛒 Cart</h2>
              </div>

              <div className="p-5">
                {cart.length === 0 && (
                  <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 py-10 text-center">
                    <div className="text-4xl mb-2">🛒</div>

                    <p className="font-semibold text-gray-700">No items</p>

                    <p className="mt-1 text-sm text-gray-500">
                      আপনার কার্টে এখনো কোনো বই যোগ করা হয়নি।
                    </p>
                  </div>
                )}

                {/* Cart Items */}
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-4 mb-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-bold text-gray-800">{item.name}</p>

                      <p className="font-bold text-green-600">
                        ৳ {item.price * item.quantity}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-800 font-bold hover:bg-gray-100"
                      >
                        -
                      </button>

                      <span className="flex h-8 min-w-10 items-center justify-center rounded-lg bg-white border border-gray-200 font-bold text-gray-800">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-800 font-bold hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}

                {/* Total */}
                <div className="flex items-center justify-between rounded-xl bg-gray-50 border border-gray-100 px-4 py-4">
                  <span className="font-bold text-gray-700">সর্বমোট</span>

                  <span className="text-xl font-extrabold text-green-600">
                    ৳ {total}
                  </span>
                </div>

                {/* PAYMENT */}
                {cart.length > 0 && (
                  <div className="mt-6 border-t border-gray-200 pt-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      💳 Payment
                    </h3>

                    {/* Send Money */}
                    <div className="rounded-xl bg-green-50 border border-green-100 p-4">
                      <p className="text-sm text-gray-600">
                        টাকা পাঠানোর নম্বর
                      </p>

                      <p className="mt-1 text-lg font-extrabold text-green-600">
                        +৮৮০১৩০১-৫০০৩৯৬
                      </p>

                      <p className="mt-2 text-sm font-semibold text-gray-700">
                        Amount: ৳ {total}
                      </p>
                    </div>

                    {/* Payment Methods */}
                    <div className="mt-4">
                      <p className="mb-2 text-sm font-semibold text-gray-700">
                        Payment Method
                      </p>

                      <div className="flex gap-2">
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
                            className={`flex-1 flex items-center justify-center rounded-xl border p-2 transition ${
                              paymentMethod === m.name
                                ? m.color
                                : "bg-white hover:bg-gray-100 border-gray-300"
                            }`}
                          >
                            <img
                              src={m.logo}
                              alt={m.name}
                              className="w-16 h-16 object-contain"
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Transaction ID */}
                    <input
                      value={trxId}
                      onChange={(e) => setTrxId(e.target.value)}
                      placeholder="Transaction ID"
                      className="border border-gray-300 p-3 w-full mt-4 rounded-xl text-gray-800 placeholder:text-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                    {/* Confirm */}
                    <button
                      onClick={handleConfirm}
                      className="mt-4 w-full rounded-xl bg-black py-3 font-bold text-white transition hover:bg-gray-800"
                    >
                      Confirm Order
                    </button>
                  </div>
                )}
              </div>
            </div>
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