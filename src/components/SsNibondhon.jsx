import React from "react";

const SsNibondhon = () => {
  return (
    <div className="">
      <h1 className="rounded-lg bg-gray-700 px-4 pt-32 pb-8 text-center text-4xl font-bold text-white">
        স্বেচ্ছাসেবক নিবন্ধন
      </h1>

      <div className="mx-auto mt-20 max-w-2xl rounded-xl border border-red-200 bg-red-50 p-8 text-center shadow-sm">
        <div className="mb-3 text-4xl">⚠️</div>

        <h2 className="text-2xl font-bold text-red-600">
          এখন নিবন্ধন বন্ধ আছে
        </h2>

        <p className="mt-3 text-gray-600">
          বর্তমানে স্বেচ্ছাসেবক নিবন্ধন কার্যক্রম বন্ধ রয়েছে। নিবন্ধন পুনরায়
          চালু হলে জানানো হবে।
        </p>
      </div>
    </div>
  );
};

export default SsNibondhon;
