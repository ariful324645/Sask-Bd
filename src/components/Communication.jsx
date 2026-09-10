import React, { useState } from "react";

const Communication = () => {
  const mapUrl =
    "https://www.google.com/maps/place/%E0%A6%A1%E0%A6%BE%E0%A6%83+%E0%A6%B6%E0%A6%BE%E0%A6%AE%E0%A6%B8%E0%A7%81%E0%A6%B2+%E0%A6%B9%E0%A7%81%E0%A6%A6%E0%A6%BE+%E0%A6%93+%E0%A6%86%E0%A6%9E%E0%A7%8D%E0%A6%9C%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%A8+%E0%A6%86%E0%A6%B0%E0%A6%BE+%E0%A6%B8%E0%A7%87%E0%A6%AC%E0%A6%BE%E0%A6%95%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A7%8D%E0%A6%B0/@22.7516185,90.1063036,17z";

  const phone = "+৮৮০১৩০১-৫০০৩৯৬";
  const email = "saskofficials@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "আপনার নাম লিখুন";
    }

    if (!formData.email.trim()) {
      newErrors.email = "আপনার ই-মেইল লিখুন";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "সঠিক ই-মেইল ঠিকানা লিখুন";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "আপনার মোবাইল নম্বর লিখুন";
    } else if (!/^01[3-9]\d{8}$/.test(formData.mobile)) {
      newErrors.mobile = "সঠিক ১১ সংখ্যার মোবাইল নম্বর লিখুন";
    }

    if (!formData.subject) {
      newErrors.subject = "যোগাযোগের বিষয় নির্বাচন করুন";
    }

    if (!formData.message.trim()) {
      newErrors.message = "আপনার বার্তা লিখুন";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "বার্তাটি কমপক্ষে ১০ অক্ষরের হতে হবে";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmittedData({
      ...formData,
      submittedAt: new Date().toLocaleString("bn-BD"),
    });
  };

  const handleNewMessage = () => {
    setSubmittedData(null);

    setFormData({
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <section className="w-full overflow-hidden bg-gray-50 text-gray-900">
      {/* =====================================================
          HERO
      ====================================================== */}
      <div className="relative overflow-hidden bg-gray-700">
        <div className="absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full border-[70px] border-blue-400/10" />

        <div className="absolute -bottom-40 -left-32 h-[430px] w-[430px] rounded-full border-[70px] border-white/5" />

        <div className="absolute right-[12%] top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="flex h-48 w-48 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20">
                <svg
                  viewBox="0 0 24 24"
                  className="h-9 w-9 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z"
                  />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24 lg:py-28">
          <h1 className="max-w-3xl text-4xl font-black mt-4 pt-10 leading-[1.12] tracking-tight text-white md:text-3xl lg:text-4xl">
            আপনার কথা,
            <br />
            <span className="relative inline-block text-blue-400">
              আমাদের কাছে গুরুত্বপূর্ণ
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-200 md:text-base md:leading-8">
            কোনো তথ্য জানতে, পরামর্শ দিতে অথবা আমাদের কার্যক্রম সম্পর্কে জানতে
            আমাদের সাথে যোগাযোগ করুন। আপনার প্রয়োজনীয় বিষয়টি আমাদের জানাতে নিচের
            মাধ্যমগুলো ব্যবহার করুন।
          </p>
        </div>
      </div>

      {/* =====================================================
          QUICK CONTACT
      ====================================================== */}
      <div className="relative z-10 mx-auto -mt-8 max-w-7xl px-5 md:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)] md:grid-cols-3">
          {/* PHONE */}
          <a
            href={`tel:${phone}`}
            className="group relative overflow-hidden border-b border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50/40 md:border-b-0 md:border-r"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-600/5 transition-all duration-500 group-hover:h-32 group-hover:w-32" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-700/25">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 4h3l2 5-2 2c1 2 3 4 5 5l2-2 5 2v3c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2Z"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-lg font-medium text-gray-500">
                  ফোনে যোগাযোগ
                </p>

                <p className="mt-1 truncate text-base font-bold text-gray-900">
                  {phone}
                </p>
              </div>
            </div>
          </a>

          {/* EMAIL */}
          <a
            href={`mailto:${email}`}
            className="group relative overflow-hidden border-b border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50/40 md:border-b-0 md:border-r"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-600/5 transition-all duration-500 group-hover:h-32 group-hover:w-32" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-700/25">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4 7 8 6 8-6"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-lg font-medium text-gray-500">
                  ই-মেইলে যোগাযোগ
                </p>

                <p className="mt-1 truncate text-base font-bold text-gray-900">
                  {email}
                </p>
              </div>
            </div>
          </a>

          {/* LOCATION */}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50/40"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-600/5 transition-all duration-500 group-hover:h-32 group-hover:w-32" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-700/25">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                  />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-lg font-medium text-gray-500">
                  আমাদের ঠিকানা
                </p>

                <p className="mt-1 text-base font-bold text-gray-900">
                  ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্র
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* =====================================================
          CONTACT + FORM
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-blue-100 px-3 py-1.5">
              <span className="text-xs font-bold text-blue-700">
                সরাসরি যোগাযোগ
              </span>
            </div>

            <h2 className="text-2xl font-black leading-tight tracking-tight text-gray-900 md:text-2xl">
              আমরা আছি আপনার
              <br />
              পাশে।
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-600">
              আপনার কোনো প্রশ্ন, মতামত, পরামর্শ কিংবা সহযোগিতার প্রয়োজন হলে
              আমাদের জানাতে পারেন। আপনার বার্তা আমাদের কাছে পৌঁছানোই যোগাযোগের
              প্রথম ধাপ।
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-8 space-y-3">
              {/* PHONE */}
              <a className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-all group-hover:bg-blue-700 group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 4h3l2 5-2 2c1 2 3 4 5 5l2-2 5 2v3c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2Z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm text-gray-500">ফোন</p>

                  <p className="mt-1 text-sm font-bold text-gray-900">
                    {phone}
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-all group-hover:bg-blue-700 group-hover:text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />

                    <path strokeLinecap="round" d="m4 7 8 6 8-6" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-500">ই-মেইল</p>

                  <p className="mt-1 truncate text-sm font-bold text-gray-900">
                    {email}
                  </p>
                </div>
              </a>
            </div>

            {/* SERVICE CENTER */}
            <div className="group relative mt-5 overflow-hidden rounded-2xl bg-gray-700 p-6 text-white shadow-xl">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-600/20 transition-all duration-500 group-hover:scale-125" />

              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                    />

                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-medium text-blue-300">
                    আমাদের সেবাকেন্দ্র
                  </p>

                  <h3 className="mt-1 text-base font-bold leading-6">
                    ডাঃ শামসুল হুদা ও
                    <br />
                    আঞ্জুমান আরা সেবাকেন্দ্র
                  </h3>

                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-white transition hover:text-blue-300"
                  >
                    লোকেশন দেখুন
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              FORM / SUCCESS
          ================================================== */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-9">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-blue-600/5" />

            {/* =================================================
                SUCCESS SCREEN
            ================================================== */}
            {submittedData ? (
              <div className="relative">
                {/* SUCCESS ICON */}
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg shadow-blue-700/30">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-7 w-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m5 12 4 4L19 6"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-gray-900 md:text-3xl">
                    আপনার বার্তা সফলভাবে
                    <br />
                    <span className="text-blue-700">প্রেরণ হয়েছে!</span>
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                    আপনার দেওয়া তথ্য আমরা সফলভাবে পেয়েছি। প্রয়োজন অনুযায়ী আমাদের
                    টিম আপনার সাথে যোগাযোগ করবে।
                  </p>
                </div>

                {/* SUBMITTED DATA */}
                <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        আপনার তথ্য
                      </p>

                      <h4 className="mt-1 text-lg font-black text-gray-900">
                        প্রেরিত বার্তার বিবরণ
                      </h4>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* NAME */}
                  <div className="border-b border-gray-200 py-3">
                    <p className="text-xs font-medium text-gray-500">নাম</p>

                    <p className="mt-1 text-sm font-bold text-gray-900">
                      {submittedData.name}
                    </p>
                  </div>

                  {/* EMAIL */}
                  <div className="border-b border-gray-200 py-3">
                    <p className="text-xs font-medium text-gray-500">ই-মেইল</p>

                    <p className="mt-1 break-all text-sm font-bold text-gray-900">
                      {submittedData.email}
                    </p>
                  </div>

                  {/* MOBILE */}
                  <div className="border-b border-gray-200 py-3">
                    <p className="text-xs font-medium text-gray-500">মোবাইল</p>

                    <p className="mt-1 text-sm font-bold text-gray-900">
                      {submittedData.mobile}
                    </p>
                  </div>

                  {/* SUBJECT */}
                  <div className="border-b border-gray-200 py-3">
                    <p className="text-xs font-medium text-gray-500">বিষয়</p>

                    <p className="mt-1 text-sm font-bold text-gray-900">
                      {submittedData.subject}
                    </p>
                  </div>

                  {/* MESSAGE */}
                  <div className="py-3">
                    <p className="text-xs font-medium text-gray-500">
                      আপনার বার্তা
                    </p>

                    <p className="mt-2 whitespace-pre-wrap rounded-xl bg-white p-3 text-sm leading-6 text-gray-700">
                      {submittedData.message}
                    </p>
                  </div>

                  {/* TIME */}
                  <div className="mt-2 rounded-xl bg-blue-50 px-4 py-3">
                    <p className="text-xs text-blue-700">প্রেরণের সময়</p>

                    <p className="mt-1 text-xs font-bold text-blue-900">
                      {submittedData.submittedAt}
                    </p>
                  </div>
                </div>

                {/* NEW MESSAGE */}
                <button
                  type="button"
                  onClick={handleNewMessage}
                  className="group mt-6 flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-6 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
                >
                  নতুন বার্তা পাঠান
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h5M20 20v-5h-5M5.5 18.5A8 8 0 0 1 5 6.2L9 9M19 15l-4-3"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              /* =================================================
                  FORM
              ================================================== */
              <div className="relative">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 inline-flex rounded-lg bg-blue-100 px-3 py-1.5">
                      <span className="text-xs font-bold text-blue-700">
                        বার্তা পাঠান
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-gray-900">
                      যোগাযোগ ফর্ম
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      আপনার সকল তথ্য পূরণ করে বার্তা পাঠান।
                    </p>
                  </div>

                  <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700 sm:flex">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4 4 16 8-16 8 3-8-3-8Z"
                      />

                      <path strokeLinecap="round" d="M7 12h8" />
                    </svg>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* NAME */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      আপনার নাম
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="আপনার পূর্ণ নাম লিখুন"
                      className={`h-13 w-full rounded-xl border ${
                        errors.name
                          ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                          : "border-gray-200 bg-gray-50 focus:border-blue-600 focus:bg-white focus:ring-blue-600/10"
                      } px-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:ring-4`}
                    />

                    {errors.name && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* EMAIL + PHONE */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* EMAIL */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-gray-700">
                        ই-মেইল
                        <span className="ml-1 text-red-500">*</span>
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="আপনার ই-মেইল"
                        className={`h-13 w-full rounded-xl border ${
                          errors.email
                            ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                            : "border-gray-200 bg-gray-50 focus:border-blue-600 focus:bg-white focus:ring-blue-600/10"
                        } px-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:ring-4`}
                      />

                      {errors.email && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* MOBILE */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-gray-700">
                        মোবাইল
                        <span className="ml-1 text-red-500">*</span>
                      </label>

                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="01XXXXXXXXX"
                        maxLength={11}
                        className={`h-13 w-full rounded-xl border ${
                          errors.mobile
                            ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                            : "border-gray-200 bg-gray-50 focus:border-blue-600 focus:bg-white focus:ring-blue-600/10"
                        } px-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:ring-4`}
                      />

                      {errors.mobile && (
                        <p className="mt-1.5 text-xs font-medium text-red-500">
                          {errors.mobile}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* SUBJECT */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      বিষয়
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`h-13 w-full rounded-xl border ${
                        errors.subject
                          ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                          : "border-gray-200 bg-gray-50 focus:border-blue-600 focus:bg-white focus:ring-blue-600/10"
                      } px-4 text-sm text-gray-600 outline-none transition-all focus:ring-4`}
                    >
                      <option value="" disabled>
                        যোগাযোগের বিষয় নির্বাচন করুন
                      </option>

                      <option value="সাধারণ তথ্য">সাধারণ তথ্য</option>

                      <option value="সেবার বিষয়ে জানতে চাই">
                        সেবার বিষয়ে জানতে চাই
                      </option>

                      <option value="পরামর্শ">পরামর্শ</option>

                      <option value="সহযোগিতা">সহযোগিতা</option>

                      <option value="অন্যান্য">অন্যান্য</option>
                    </select>

                    {errors.subject && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      আপনার বার্তা
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="আপনার কথা বিস্তারিত লিখুন..."
                      className={`w-full resize-none rounded-xl border ${
                        errors.message
                          ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/10"
                          : "border-gray-200 bg-gray-50 focus:border-blue-600 focus:bg-white focus:ring-blue-600/10"
                      } px-4 py-3 text-sm outline-none transition-all placeholder:text-gray-400 focus:ring-4`}
                    />

                    {errors.message && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* REQUIRED NOTICE */}
                  <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
                    <p className="text-xs leading-5 text-blue-700">
                      <span className="font-bold">*</span> চিহ্নিত সকল তথ্য পূরণ
                      করা বাধ্যতামূলক।
                    </p>
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="group flex h-13 w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-6 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-700/30 active:translate-y-0"
                  >
                    বার্তা প্রেরণ করুন
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M13 6l6 6-6 6"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
          LOCATION
      ====================================================== */}
      <div className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
             

              <h2 className="text-2xl font-black tracking-tight text-gray-900 md:text-2xl">
                আমাদের অবস্থান
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
                ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্রে আসতে Google Maps-এর
                লোকেশন ব্যবহার করুন।
              </p>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
            >
              Google Maps খুলুন
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>

          {/* MAP */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-200 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">
            <iframe
              title="সেবাকেন্দ্রের লোকেশন"
              src="https://www.google.com/maps?q=22.7516185,90.1063036&z=17&output=embed"
              className="h-[360px] w-full border-0 grayscale-[15%] transition-all duration-500 group-hover:grayscale-0 md:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* LOCATION LABEL */}
            <div className="absolute bottom-5 left-5 right-5 md:left-6 md:right-auto">
              <div className="flex max-w-sm items-center gap-3 rounded-2xl border border-white/50 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                    />

                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-500">
                    সেবাকেন্দ্র
                  </p>

                  <p className="text-sm font-bold text-gray-900">
                    ডাঃ শামসুল হুদা ও আঞ্জুমান আরা
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communication;
