import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Search,
  Sparkles,
  BookOpen,
  Share2,
} from "lucide-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("সব");

  // ==========================================
  // CATEGORIES
  // ==========================================

  const categories = [
    "সব",
    "ইফতার কর্মসূচি",
    "কেন্দ্রীয় সম্মেলন",
    "ফ্রি মেডিকেল ক্যাম্প",
  ];

  // ==========================================
  // BLOG DATA
  // ==========================================

  const blogs = [
    {
      id: 1,

      title:
        "ঢাবি অধ্যাপকের সেবাকেন্দ্র থেকে সারা দেশে একযোগে ইফতার কর্মসূচি অনুষ্ঠিত",

      description:
        "সারা দেশে মানবিক উদ্যোগের এক অনন্য দৃষ্টান্ত স্থাপন করেছে ডা. শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্র।",

      category: "ইফতার কর্মসূচি",

      date: "১০ সেপ্টেম্বর, ২০২৬",

      image: "https://i.ibb.co.com/wr4HLhCY/Pics-Art-03-17-12-16-42-scaled.jpg",

      content: [
        `সারা দেশে মানবিক উদ্যোগের এক অনন্য দৃষ্টান্ত স্থাপন করেছে ডা. শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্র।

সোমবার (১৬ মার্চ) দেশের ৬৪টি জেলায় একযোগে দুস্থ ও সুবিধাবঞ্চিত মানুষের অংশগ্রহণে ইফতার কর্মসূচি পালন করেছে সেবা প্রতিষ্ঠানটি। দেশের বিভিন্ন অঞ্চলে কর্মরত সেবাকেন্দ্রের স্বেচ্ছাসেবকেরা স্থানীয় পর্যায়ে এই কর্মসূচি বাস্তবায়ন করেছেন।

ইফতার মাহফিলে অংশ নেন সমাজের প্রান্তিক জনগোষ্ঠীর মানুষ—দুস্থ পরিবার, কৃষিজীবী, বিধবা নারী, এতিম শিশু, বৃদ্ধ এবং সুবিধাবঞ্চিত অনেকেই। সারাদেশে একই দিনে এভাবে মানবিক উদ্যোগে ইফতার আয়োজনকে একটি বিরল ও ব্যতিক্রমী সামাজিক উদ্যোগ হিসেবে দেখা হচ্ছে।

ডা. শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্র একটি অরাজনৈতিক, অসাম্প্রদায়িক ও অলাভজনক মানবসেবামূলক প্রতিষ্ঠান। পিরোজপুর জেলার স্বরূপকাঠি উপজেলার উত্তর জগন্নাথকাঠী গ্রামের মনোরম পরিবেশে এর মূল কেন্দ্র অবস্থিত।

সমাজের পিছিয়ে পড়া, দুঃস্থ, এতিম, অসহায় ও মেধাবী শিক্ষার্থীসহ সমস্যাগ্রস্ত মানুষের পাশে দাঁড়ানোই প্রতিষ্ঠানটির প্রধান লক্ষ্য।

সেবাকেন্দ্রটির প্রতিষ্ঠাতা পরিচালক ঢাকা বিশ্ববিদ্যালয়ের দর্শন বিভাগের অধ্যাপক ড. রেবেকা সুলতানা। তিনি তাঁর শ্রদ্ধেয় পিতা-মাতা ডা. শামসুল হুদা ও আঞ্জুমান আরার স্মৃতিকে ধারণ করে এই প্রতিষ্ঠানটি প্রতিষ্ঠা করেন। ২০১১ সালে পারিবারিক উদ্যোগে যাত্রা শুরু করলেও ২০১২ সাল থেকে এটি প্রাতিষ্ঠানিকভাবে কার্যক্রম পরিচালনা করে আসছে।

প্রতিষ্ঠালগ্ন থেকেই সেবাকেন্দ্রটি নানা মানবিক কার্যক্রম পরিচালনা করছে। এর মধ্যে রয়েছে ফ্রি মেডিকেল ক্যাম্প আয়োজন ও বিনামূল্যে ওষুধ বিতরণ, শীতবস্ত্র বিতরণ, প্রাকৃতিক দুর্যোগে ত্রাণ সহায়তা প্রদান, বৃক্ষরোপণ কর্মসূচি, শিক্ষা সহায়তা, নারী স্বাবলম্বিতা কর্মসূচি, অসহায়দের মানবিক সহায়তা এবং বিভিন্ন সামাজিক সচেতনতামূলক কার্যক্রম।

বর্তমানে দেশের ৬৪টি জেলায় সেবাকেন্দ্রটির নিবেদিতপ্রাণ স্বেচ্ছাসেবকরা স্থানীয় পর্যায়ে মানবিক ও সামাজিক কার্যক্রম পরিচালনা করছেন।

প্রতিষ্ঠাতা পরিচালক ড. রেবেকা সুলতানা বলেন, “সেবা এক ধরণের মানসিক প্রশান্তি। এটি এমন শক্তি যা দিয়ে মহাজগতের সাথে যুক্ত হওয়া যায়৷ সারাদেশে একযোগে এই কর্মসূচি বাস্তবায়নে যারা নিরলস কাজ করেছে তাঁদেরকে ধন্যবাদ৷ ছোট ছোট মানবিক উদ্যোগই একসময় বড় সামাজিক পরিবর্তনের পথ তৈরি করে।”

তিনি আরও জানান, এই সেবাকেন্দ্র কোনো প্রাতিষ্ঠানিক অর্থায়ন বা দান-অনুদানের ওপর নির্ভর করে পরিচালিত হয় না; বরং আত্মনির্ভরতা, সততা ও আন্তরিকতার ভিত্তিতেই এর কার্যক্রম পরিচালিত হচ্ছে।`,
      ],
    },

    // ==========================================
    // BLOG 02
    // ==========================================

    {
      id: 2,

      title:
        "ঢাকা বিশ্ববিদ্যালয়ে দিনব্যাপী সেবাকেন্দ্রের কেন্দ্রীয় সম্মেলন অনুষ্ঠিত",

      description:
        "ঢাকা বিশ্ববিদ্যালয়ের আরসি মজুমদার অডিটোরিয়ামে ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্রের কেন্দ্রীয় স্বেচ্ছাসেবক সম্মেলন ২০২৫ অনুষ্ঠিত হয়েছে।",

      category: "কেন্দ্রীয় সম্মেলন",

      date: "আগস্ট ১০, ২০২৫",

      image: "https://i.ibb.co.com/PsD7fCG9/image1.jpg",

      detailImages: [
        "https://i.ibb.co.com/PsD7fCG9/image1.jpg",

        "https://i.ibb.co.com/TBpMFsKv/r1.jpg",

        "https://i.ibb.co.com/DDDSBrZJ/image3.jpg",

        "https://i.ibb.co.com/ksbnLS84/r2.jpg",
        "https://i.ibb.co.com/FkkTB5ZX/miss-image.jpg",
        "https://i.ibb.co.com/MDJwyvBy/r3.jpg",
      ],

      detailSections: [
        {
          title: "",

          text: `ঢাকা বিশ্ববিদ্যালয়ের আরসি মজুমদার অডিটোরিয়ামে ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্রের কেন্দ্রীয় স্বেচ্ছাসেবক সম্মেলন ২০২৫ অনুষ্ঠিত হয়েছে।
শনিবার (৯ আগস্ট) দিনব্যাপী বিভিন্ন আয়োজনের মধ্য দিয়ে এ সম্মেলন অনুষ্ঠিত হয়।

`,
        },
        {
          title: "",

          text: "সারা দেশের বিভিন্ন জেলা থেকে আগত স্বেচ্ছাসেবকদের অংশগ্রহণে এ আয়োজন স্বেচ্ছাসেবী কর্মীদের এক মিলনমেলায় পরিণত হয়।",
        },

        {
          title: "",

          text: `অনুষ্ঠানে প্রধান অতিথি ছিলেন নবম জাতীয় সংসদের সাবেক সংসদ সদস্য ও শহীদ স্মৃতি ডিগ্রি কলেজের প্রতিষ্ঠাতা অধ্যক্ষ মোঃ শাহ্ আলম। সম্মানিত অতিথি ছিলেন ঢাকা বিশ্ববিদ্যালয়ের কলা অনুষদের ডিন অধ্যাপক ড. মোহাম্মদ ছিদ্দিকুর রহমান খান। বিশেষ অতিথি হিসেবে উপস্থিত ছিলেন ঢাকা বিশ্ববিদ্যালয়ের ইতিহাস বিভাগের অধ্যাপক ড. মিলটন কুমার দেব এবং জাতীয় রাজস্ব বোর্ডের ট্যাক্স লিগ্যাল এন্ড এনফোর্সমেন্ট বিভাগের সদস্য ব্যারিস্টার মুতাসিম বিল্লাহ ফারুকী।`,
        },
        {
          title: "",

          text: `সম্মেলনে কি-নোট স্পিকার হিসেবে বক্তব্য দেন ইসলামের ইতিহাস ও সংস্কৃতি বিভাগের অধ্যাপক ড. এ.টি.এম শামছুজ্জোহা। সভাপতিত্ব করেন ঢাকা বিশ্ববিদ্যালয়ের অধ্যাপক ও সেবাকেন্দ্রের প্রতিষ্ঠাতা পরিচালক ড. রেবেকা সুলতানা। সঞ্চালকের দায়িত্ব পালন করেন আয়কর আইনজীবী ও সেবাকেন্দ্রের উপদেষ্টা এস এম ইমরান আজাদ। অনুষ্ঠানের দ্বিতীয় পর্বে সঞ্চালনা করেন সেবাকেন্দ্রের কেন্দ্রীয় টিমের সদস্য জাহিদুল ইসলাম আকাশ।`,
        },

        {
          title: "",

          text: `দিনব্যাপী এ সম্মেলনে ছিলো ডকুমেন্টারি প্রদর্শন, অতিথিদের আলোচনা, স্বেচ্ছাসেবকদের অ্যাওয়ার্ড প্রদান, ওয়েবসাইট উদ্বোধন, প্রজেক্ট উপস্থাপন প্রতিযোগিতা ও সাংস্কৃতিক অনুষ্ঠান।`,
        },
        {
          title: "",

          text: ` আয়োজকরা জানান, এই সম্মেলনের মাধ্যমে স্বেচ্ছাসেবকদের অভিজ্ঞতা বিনিময়, নতুন কর্মপরিকল্পনা প্রণয়ন এবং মানবসেবায় তরুণদের সম্পৃক্ত করার লক্ষ্য বাস্তবায়িত হয়েছে।`,
        },
      ],

      content: [
        "শিক্ষা মানুষের জীবনের সবচেয়ে গুরুত্বপূর্ণ ভিত্তিগুলোর একটি। একটি শিশু যখন শিক্ষার সুযোগ পায়, তখন তার সামনে নতুন সম্ভাবনার দরজা খুলে যায়।",

        "সমাজের সুবিধাবঞ্চিত শিশুদের জন্য শিক্ষার সুযোগ তৈরি করা আমাদের অন্যতম গুরুত্বপূর্ণ লক্ষ্য। বই, শিক্ষা উপকরণ এবং প্রয়োজনীয় সহযোগিতার মাধ্যমে আমরা তাদের পাশে দাঁড়াতে চাই।",

        "একটি শিশুর হাতে বই তুলে দেওয়া মানে শুধু একটি বই দেওয়া নয়; বরং তার ভবিষ্যতের জন্য একটি নতুন সম্ভাবনার দরজা খুলে দেওয়া।",

        "আমরা চাই প্রতিটি শিশু তার স্বপ্ন পূরণের জন্য প্রয়োজনীয় শিক্ষা ও সুযোগ পাবে।",
      ],
    },

    // ==========================================
    // BLOG 03
    // ==========================================

    {
      id: 3,

      title:
        "স্বরূপকাঠিতে ঢাবি অধ্যাপকের ফ্রি মেডিকেল ক্যাম্প, সেবা পেলো দুই শতাধিক রোগী",

      description:
        "ঢাকা বিশ্ববিদ্যালয়ের দর্শন বিভাগের অধ্যাপক ড. রেবেকা সুলতানা প্রতিষ্ঠিত ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্রের উদ্যোগে ফ্রি মেডিক্যাল ক্যাম্প ও অন্যান্য সেবা কার্যক্রম অনুষ্ঠিত হয়েছে।",

      category: "ফ্রি মেডিকেল ক্যাম্প",

      date: "ডিসেম্বর ২৮, ২০২৪",

      image: "https://i.ibb.co.com/Mxm0BTm0/mdc.jpg",

      content: [
        `স্বেচ্ছাসেবা হচ্ছে মানুষের জন্য নিজের সময়, শ্রম এবং দক্ষতা উৎসর্গ করার একটি সুন্দর মাধ্যম।

ঢাকা বিশ্ববিদ্যালয়ের দর্শন বিভাগের অধ্যাপক ড. রেবেকা সুলতানা প্রতিষ্ঠিত ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্রের উদ্যোগে ফ্রি মেডিক্যাল ক্যাম্প ও অন্যান্য সেবা কার্যক্রম অনুষ্ঠিত হয়েছে।

শনিবার সকাল ১১টা থেকে পিরোজপুর জেলার স্বরূপকাঠির উত্তর জগন্নাথকাঠিতে দিনব্যাপী চলে এই ফ্রি মেডিক্যাল ক্যাম্প। সেবা পান দুই শতাধিক দুস্থ ও সুবিধাবঞ্চিত মানুষ।

অনুষ্ঠানে প্রধান অতিথি হিসেবে উপস্থিত ছিলেন বিধু ভূষণ দত্ত। তিনি স্থানীয় সমাজসেবক ও সমাজসংস্কারক। প্রধান অতিথির বক্তব্যে তিনি বলেন,আমি অত্যন্ত আনন্দিত যে রেবেকা গত বারো বছর থেকে এ ধরণের অনুষ্ঠান করে আসছে। আমি আরও আনন্দিত এ কারণে যে তার শিক্ষকরাও এখানে রয়েছেন।

সেবাকেন্দ্রের প্রতিষ্ঠাতা পরিচালক ড. রেবেকা সুলতানা তার বক্তব্যে বলেন, এটি একটি অরাজনৈতিক, অসাম্প্রদায়িক এবং অলাভজনক প্রতিষ্ঠান। এখানে সব ধরণের মানুষ সার্ভিস পায়।

তিনি বলেন, আমি নিজেকে তখনই ভাগ্যবান মনে করি যখন অন্যরা আমার সেবাটা নেয়। আমরা ডাকলে তারা যে আসে এটাই অনেক বড় ব্যাপার।

তিনি আরও বলেন, যদি আমরা অসহায়ের সহায়,নিরুপায়ের উপায়, দয়ার সিন্ধু, বিপদের বন্ধু না হতে পারি তাহলে আমাদের মনুষ্যত্ব কোথায়? মনুষ্যত্ব আছে বলেই আমরা শ্রেষ্ঠ জীব। কিন্তু কয়জন মানুষইবা শ্রেষ্ঠ হতে পারে।

অনুষ্ঠানের সঞ্চালক ঢাকা ট্যাক্সেস বার এসোসিয়েশনের সিনিয়র আইনজীবী ও ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্রের অন্যতম পৃষ্ঠপোষক এস এম ইমরান আজাদ বলেন, দেশের ৫০টি জেলায় এই সেবাকেন্দ্রের কাজ চলমান। সেখানে শুধু ফ্রি মেডিকেল ক্যাম্প না, আরও বিভিন্ন সেবা দেয়া হয়। দেশের যে কোন প্রান্তে যে কেউ সমস্যায় পড়লে আমরা সেবা কার্যক্রম পরিচালনা করি। ড. রেবেকা সুলতানার পরিকল্পনায় ২০১২ সাল থেকে ক্রমান্বয়ে বৃদ্ধি পেয়েছে সেবার পরিসর।

ফ্রি মেডিকেল ক্যাম্পে প্রধান চিকিৎসক হিসেবে ছিলেন শের-ই-বাংলা মেডিকেল কলেজ হাসপাতালের প্যাথলজি বিভাগের প্রধান ডাঃ আশিক দত্ত। তিনি ড. রেবেকা সুলতানার স্কুল-জীবনের বন্ধু। সেবাকেন্দ্রের এই কার্যক্রমের শুরু থেকেই তিনি বিনামূল্যে এই সেবা দিয়ে আসছেন।

ডাঃ আশিক দত্ত তার বক্তব্যে বলেন, সত্যিকার অর্থে মানুষের জন্য কিছু করার যে উদ্যোগ সেটা রেবেকার মধ্যে সবসময়ই ছিল। এখনও আছে। এখানে শুধু ডাক্তাররা ফ্রি দেখেন না, ওষুধও ফ্রি দেয়া হয়। শুধু স্বরূপকাঠি নয়, বাংলাদেশের যে কোন এলাকায় দুর্যোগপূর্ণ কিছু হলে সে সাহায্যের হাত বাড়িয়ে দেয়।

ডাঃ আশিক দত্ত ছাড়াও দিনব্যাপী সেবা কার্যক্রম পরিচালনা করেন শের-ই-বাংলা মেডিকেল কলেজ হাসপাতালের চিকিৎসক ডাঃ প্রমথ মন্ডল ও ডাঃ প্রজ্ঞা লাবনী। এছাড়া ডাঃ সৌভিক সরকারও চিকিৎসা সেবা দেন।

চিকিৎসকরা ছাড়াও অভিজ্ঞ নার্স এবং কম্পাউন্ডাররাও অনুষ্ঠানে উপস্থিত ছিলেন। তারা বিনামূল্যে রোগীদের ডায়াবেটিস পরীক্ষা, ওজোন পরিমাপ এবং প্রেশার মাপার কাজ করেন।

বিনামূল্যে বিশেষজ্ঞ চিকিৎসকদের কাছ থেকে সেবা নিতে পেরে রোগীরা অত্যন্ত খুশি। এমন অনেক রোগী এসেছেন, যারা ঠিকমতো হাটতেও পারেন না।

প্রসঙ্গত, ২০১২ সালে ড. রেবেকা সুলতানা বাবা ও মায়ের নামে ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্র গড়ে তোলেন। প্রতিষ্ঠার পর প্রতিবছরই সেবাকেন্দ্র প্রাঙ্গনে ফ্রি মেডিকেল ক্যাম্প অনুষ্ঠিত হয়ে আসছে। বর্তমানে সারা বাংলাদেশের ৫০টি জেলায় এই সেবাকেন্দ্রের স্বেচ্ছাসেবকরা কাজ করছেন। ফ্রি মেডিকেল ক্যাম্প ছাড়াও সেবাকেন্দ্রটি থেকে বহুমুখী সেবা দেয়া হয়।`,
      ],
    },
  ];

  // ==========================================
  // FILTER
  // ==========================================

  const filteredBlogs = blogs.filter((blog) => {
    const categoryMatch =
      activeCategory === "সব" || blog.category === activeCategory;

    const searchText = search.toLowerCase().trim();

    const searchMatch =
      blog.title.toLowerCase().includes(searchText) ||
      blog.description.toLowerCase().includes(searchText) ||
      blog.category.toLowerCase().includes(searchText);

    return categoryMatch && searchMatch;
  });

  // ==========================================
  // OPEN BLOG
  // ==========================================

  const openBlog = (blog) => {
    setSelectedBlog(blog);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==========================================
  // CLOSE BLOG
  // ==========================================

  const closeBlog = () => {
    setSelectedBlog(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==========================================
  // SHARE BLOG
  // ==========================================

  const shareBlog = async () => {
    if (!selectedBlog) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: selectedBlog.title,
          text: selectedBlog.description,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("ব্লগের লিংক কপি হয়েছে");
      } catch (error) {
        console.log(error);
      }
    }
  };

  // ==========================================
  // BLOG DETAILS PAGE
  // ==========================================

  if (selectedBlog) {
    return (
      <main className="min-h-screen bg-gray-50">
        {/* =====================================
            DETAIL COVER BANNER
        ====================================== */}

        <section className="relative isolate overflow-hidden bg-gray-950">
          {/* BACKGROUND IMAGE */}

          <div className="absolute inset-0">
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              loading="eager"
              className="h-full w-full object-cover"
            />

            {/* DARK OVERLAY */}

            <div className="absolute inset-0 bg-gray-950/65" />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-gray-950/10" />

            {/* BLUE LIGHT */}

            <div className="absolute -right-32 top-10 h-[450px] w-[450px] rounded-full bg-blue-700/20 blur-[110px]" />

            <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-900/20 blur-[100px]" />
          </div>

          {/* BANNER CONTENT */}

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-5 pb-12 pt-36 md:px-8 md:pb-16">
            {/* HERO TEXT */}

            <div className="max-w-5xl">
              {/* CATEGORY */}

              <div className="mb-5">
                <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-700 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-950/30">
                  {selectedBlog.category}
                </span>
              </div>

              {/* TITLE */}

              <h1 className="max-w-5xl text-2xl font-black leading-[1.15] tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
                {selectedBlog.title}
              </h1>

              {/* DESCRIPTION */}

              <p className="mt-6 max-w-3xl text-base leading-8 text-gray-200 sm:text-lg md:text-xl md:leading-9">
                {selectedBlog.description}
              </p>

              {/* DATE */}

              <div className="mt-7 flex items-center gap-2 text-sm font-medium text-gray-300">
                <CalendarDays size={17} className="text-blue-400" />

                {selectedBlog.date}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================
            BLOG 02 DETAILS
        ====================================== */}

        {selectedBlog.id === 2 ? (
          <section className="relative px-4 py-10 sm:px-5 md:px-8 md:py-14">
            <div className="mx-auto max-w-6xl">
              {/* MAIN ARTICLE CARD */}

              <div className="relative overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.08)] md:rounded-[40px]">
                <div className="p-5 sm:p-8 md:p-12 lg:p-16">
                  {/* INTRODUCTION */}

                  <div className="relative overflow-hidden rounded-[28px] bg-gray-800 p-7 md:p-9">
                    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-700/20 blur-3xl" />

                    <Sparkles size={22} className="relative text-blue-400" />

                    <p className="relative mt-5 text-lg font-bold leading-9 text-white md:text-xl md:leading-10">
                      {selectedBlog.description}
                    </p>
                  </div>

                  {/* DETAIL SECTIONS */}

                  <div className="mt-6 md:mt-8">
                    {selectedBlog.detailSections.map((section, index) => (
                      <div key={index}>
                        {/* IMAGE */}

                        <div className="group relative overflow-hidden rounded-[26px] bg-gray-100 md:rounded-[32px]">
                          <div className="flex min-h-[280px] w-full items-center justify-center bg-gray-100 sm:min-h-[380px] md:min-h-[450px] lg:min-h-[500px]">
                            <img
                              src={selectedBlog.detailImages[index]}
                              alt={section.title}
                              loading={index === 0 ? "eager" : "lazy"}
                              className="block h-auto max-h-[700px] w-full object-contain object-center"
                            />
                          </div>

                          {/* IMAGE GRADIENT */}

                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                          {/* CATEGORY */}

                          <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7">
                            <span className="rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-gray-900 shadow-xl">
                              {selectedBlog.category}
                            </span>
                          </div>
                        </div>

                        {/* TEXT BETWEEN IMAGES */}

                        <div
                          className={
                            index !== selectedBlog.detailSections.length - 1
                              ? "mt-3 mb-5 md:mt-4 md:mb-7"
                              : "mt-3 md:mt-4"
                          }
                        >
                          {section.title && (
                            <>
                              <div className="mb-3 h-1 w-14 rounded-full bg-blue-700" />

                              <h2 className="text-2xl font-black leading-tight text-gray-950 sm:text-3xl md:text-4xl">
                                {section.title}
                              </h2>
                            </>
                          )}

                          {section.text && (
                            <p className="whitespace-pre-line text-base leading-8 text-gray-600 sm:text-lg md:leading-9">
                              {section.text}
                            </p>
                          )}
                        </div>

                        {/* SMALL DIVIDER BETWEEN SECTIONS */}

                        {index !== selectedBlog.detailSections.length - 1 && (
                          <div className="mb-5 border-b border-gray-100 md:mb-7" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* BACK BUTTON */}

                  <div className="mt-10 flex justify-center">
                    <button
                      onClick={closeBlog}
                      className="group inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-800 hover:shadow-xl"
                    >
                      <FaArrowLeft size={15} />
                      সব ব্লগ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* =====================================
             BLOG 01 & BLOG 03 DETAILS
          ====================================== */

          <section className="relative px-5 py-10 md:px-8 md:py-14">
            <div className="mx-auto max-w-5xl">
              {/* ARTICLE CARD */}

              <article className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)] md:rounded-[40px]">
                <div className="p-7 md:p-12 lg:p-16">
                  {/* INTRO */}

                  <div className="relative overflow-hidden rounded-[28px] bg-gray-800 p-7 md:p-9">
                    <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-blue-700/20 blur-3xl" />

                    <Sparkles size={21} className="relative text-blue-400" />

                    <p className="relative mt-5 text-lg font-bold leading-9 text-white md:text-xl md:leading-10">
                      {selectedBlog.description}
                    </p>
                  </div>

                  {/* CONTENT */}

                  <article className="mt-10 md:mt-14">
                    {selectedBlog.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-7 whitespace-pre-line text-base leading-9 text-gray-600 last:mb-0 sm:text-lg md:mb-8 md:leading-10"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </article>

                  {/* BOTTOM CATEGORY */}

                  <div className="mt-12 border-t border-gray-100 pt-8">
                    <div className="flex flex-wrap items-center justify-between gap-5">
                      <span className="rounded-full bg-blue-50 px-5 py-2.5 text-xs font-bold text-blue-700">
                        {selectedBlog.category}
                      </span>

                      <span className="flex items-center gap-2 text-sm text-gray-400">
                        <CalendarDays size={16} />

                        {selectedBlog.date}
                      </span>
                    </div>
                  </div>

                  {/* BACK */}

                  <div className="mt-10 flex justify-center">
                    <button
                      onClick={closeBlog}
                      className="group inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-800 hover:shadow-xl"
                    >
                      <FaArrowLeft size={15} />
                      সব ব্লগ
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}
      </main>
    );
  }

  // ==========================================
  // MAIN BLOG PAGE
  // ==========================================

  return (
    <main className="min-h-screen bg-gray-50">
      {/* =====================================
          BLOG PAGE HERO
      ====================================== */}

      <section className="relative overflow-hidden rounded-lg bg-gray-700">
        {/* BLUE GLOW */}

        <div className="absolute -right-32 -top-40 h-[550px] w-[550px] rounded-full bg-blue-700/20 blur-3xl" />

        <div className="absolute -bottom-52 left-[20%] h-[400px] w-[400px] rounded-full bg-gray-600/40 blur-3xl" />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* CONTENT */}

        <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-28 md:px-8 md:pb-16 md:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="pb-2 text-2xl font-black tracking-tight text-white sm:pb-0 sm:text-3xl md:text-4xl">
              ব্লগ
            </h1>
          </div>
        </div>
      </section>

      {/* =====================================
          FILTER BAR
      ====================================== */}

      <section className="relative z-20 mx-auto -mt-8 max-w-7xl px-5 md:px-8">
        <div className="rounded-[24px] border border-gray-200 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* FILTERS */}

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-blue-700 text-white shadow-lg shadow-blue-700/20"
                      : "bg-gray-50 text-gray-500 hover:bg-blue-700 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* SEARCH */}

            <div className="flex h-12 w-full items-center rounded-xl border border-gray-200 bg-gray-50 px-4 lg:w-[300px]">
              <Search size={17} className="shrink-0 text-gray-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ব্লগ খুঁজুন..."
                className="w-full bg-transparent px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          BLOG CONTENT
      ====================================== */}

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        {filteredBlogs.length > 0 && (
          <>
            {/* =================================
                FEATURED BLOG
            ================================== */}

            <div
              onClick={() => openBlog(filteredBlogs[0])}
              className="group relative cursor-pointer"
            >
              {/* DECORATIVE BORDER */}

              <div className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-[35px] border-2 border-blue-700/15 lg:block" />

              {/* CARD */}

              <div className="relative grid overflow-hidden rounded-[35px] border border-gray-100 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.10)] lg:grid-cols-[1.1fr_0.9fr]">
                {/* IMAGE */}

                <div className="relative h-[380px] overflow-hidden md:h-[500px]">
                  <img
                    src={filteredBlogs[0].image}
                    alt={filteredBlogs[0].title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />

                  {/* CATEGORY */}

                  <div className="absolute left-6 top-6">
                    <span className="rounded-lg bg-blue-700 px-5 py-2.5 text-xs font-bold text-white shadow-lg">
                      {filteredBlogs[0].category}
                    </span>
                  </div>

                  {/* FEATURED */}

                  <div className="absolute bottom-6 left-6">
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                      Featured Story
                    </span>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                  <div className="py-5 lg:py-10">
                    <div className="mb-5 flex items-center gap-2 text-lg font-semibold text-gray-400">
                      <CalendarDays size={14} />

                      {filteredBlogs[0].date}
                    </div>

                    <h2 className="text-xl font-black leading-tight text-blue-700 md:text-2xl">
                      {filteredBlogs[0].title}
                    </h2>

                    <p className="mt-6 text-sm leading-8 text-gray-600 md:text-lg">
                      {filteredBlogs[0].description}
                    </p>
                  </div>

                  {/* BUTTON */}

                  <div className="border-t border-gray-100 pt-6">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white transition-all duration-300 group-hover:bg-blue-800">
                      বিস্তারিত
                      <FaArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================
                MORE STORIES
            ================================== */}

            {filteredBlogs.length > 1 && (
              <div className="mt-20">
                <div className="grid gap-8 lg:grid-cols-2">
                  {filteredBlogs.slice(1).map((blog) => (
                    <article
                      key={blog.id}
                      onClick={() => openBlog(blog)}
                      className="group cursor-pointer"
                    >
                      <div className="relative h-full">
                        {/* DECORATION */}

                        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[30px] border-2 border-blue-700/10" />

                        {/* CARD */}

                        <div className="relative flex h-full flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                          {/* IMAGE */}

                          <div className="relative h-[300px] overflow-hidden md:h-[340px]">
                            <img
                              src={blog.image}
                              alt={blog.title}
                              loading="lazy"
                              className="h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/10 to-transparent" />

                            {/* CATEGORY */}

                            <div className="absolute top-5 left-6">
                              <span className="rounded-lg bg-blue-700 px-4 py-2.5 text-xs font-bold text-white shadow-lg">
                                {blog.category}
                              </span>
                            </div>
                          </div>

                          {/* CONTENT */}

                          <div className="flex flex-1 flex-col p-7 md:p-8">
                            {/* DATE */}

                            <div className="flex items-center gap-2 border-b border-gray-100 pb-5 text-lg font-semibold text-gray-400">
                              <CalendarDays size={14} />

                              {blog.date}
                            </div>

                            {/* TITLE */}

                            <h3 className="mt-6 min-h-[72px] text-xl font-black leading-tight text-blue-700 md:text-[24px]">
                              {blog.title}
                            </h3>

                            {/* DESCRIPTION */}

                            <p className="mt-4 min-h-[84px] text-sm leading-7 text-gray-600 md:text-lg">
                              {blog.description}
                            </p>

                            {/* BUTTON */}

                            <div className="mt-auto border-t border-gray-100 pt-6">
                              <span className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-md">
                                বিস্তারিত
                                <FaArrowRight size={15} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* =====================================
            EMPTY STATE
        ====================================== */}

        {filteredBlogs.length === 0 && (
          <div className="flex min-h-[400px] items-center justify-center rounded-[35px] border border-gray-200 bg-white">
            <div className="px-5 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Search size={27} />
              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900">
                কোনো ব্লগ পাওয়া যায়নি
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                অন্য কোনো শব্দ অথবা ক্যাটাগরি দিয়ে চেষ্টা করুন।
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("সব");
                }}
                className="mt-5 rounded-xl bg-blue-700 px-5 py-3 text-xs font-bold text-white transition hover:bg-blue-800"
              >
                সব ব্লগ দেখুন
              </button>
            </div>
          </div>
        )}
      </section>

      {/* =====================================
          CTA
      ====================================== */}
    </main>
  );
};

export default Blog;
