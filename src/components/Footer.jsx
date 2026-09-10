// import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-16">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {/* Column 1 */}
//         <div>
//           <h2 className="text-xl font-bold mb-3">সেবাকেন্দ্রের নাম</h2>
//           <p className="mb-2">প্রতিষ্ঠাতা ও পরিচালক: ড. রেবেকা সুলতানা</p>
//           <p>স্থাপিত: ২০১২ সাল</p>
//         </div>

//         {/* Column 2 */}
//         <div>
//           <h2 className="text-xl font-bold mb-3">সেবাকেন্দ্রের যোগাযোগ</h2>
//           <p className="mb-2">ফোন: +৮৮০১৩০১-৫০০৩৯৬</p>
//           <p>ইমেইল: saskofficials@gmail.com</p>
//         </div>

//         {/* Column 3 */}
//         <div>
//           <h2 className="text-xl font-bold mb-3">লিংকসমূহ</h2>
//           <ul className="space-y-2">
//             <li className="cursor-pointer hover:text-gray-400">
//               আমাদের সম্পর্কে
//             </li>
//             <li className="cursor-pointer hover:text-gray-400">
//               আমাদের সেবাসমূহ
//             </li>
//           </ul>
//         </div>

//         {/* Column 4 (Social Media) */}
//         <div>
//           <h2 className="text-xl font-bold mb-3">সোশাল মিডিয়া</h2>
//           <div className="flex gap-3 mt-2">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-600 p-2 rounded text-white hover:scale-110 transition"
//             >
//               <FaFacebookF />
//             </a>

//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-500 p-2 rounded text-white hover:scale-110 transition"
//             >
//               <FaFacebookF />
//             </a>

//             <a
//               href="https://youtube.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-red-600 p-2 rounded text-white hover:scale-110 transition"
//             >
//               <FaYoutube />
//             </a>

//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-700 p-2 rounded text-white hover:scale-110 transition"
//             >
//               <FaLinkedinIn />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       {/* <div className="text-center text-gray-400 mt-10 text-sm">
//         © 2026 All Rights Reserved
//       </div> */}
//     </footer>
//   );
// };

// export default Footer;
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#07152f] via-[#0b2550] to-[#092f4f] py-16 text-white">
      {/* Decorative Background */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1 */}
        <div className="rounded-2xl border border-blue-300/15 bg-white/[0.07] p-6 shadow-xl backdrop-blur-sm">
          <h2 className="mb-4 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-xl font-extrabold text-transparent">
            সেবাকেন্দ্রের নাম
          </h2>

          <div className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>

          <p className="mb-3 text-sm leading-7 text-blue-50">
            প্রতিষ্ঠাতা ও পরিচালক: ড. রেবেকা সুলতানা
          </p>

          <p className="text-sm text-blue-100">স্থাপিত: ২০১২ সাল</p>
        </div>

        {/* Column 2 */}
        <div className="rounded-2xl border border-blue-300/15 bg-white/[0.07] p-6 shadow-xl backdrop-blur-sm">
          <h2 className="mb-4 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-xl font-extrabold text-transparent">
            সেবাকেন্দ্রের যোগাযোগ
          </h2>

          <div className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>

          <p className="mb-3 text-sm leading-7 text-blue-50">
            ফোন: +৮৮০১৩০১-৫০০৩৯৬
          </p>

          <p className="break-all text-sm leading-7 text-blue-100">
            ইমেইল: saskofficials@gmail.com
          </p>
        </div>

        {/* Column 3 */}
        <div className="rounded-2xl border border-blue-300/15 bg-white/[0.07] p-6 shadow-xl backdrop-blur-sm">
          <h2 className="mb-4 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-xl font-extrabold text-transparent">
            লিংকসমূহ
          </h2>

          <div className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>

          <ul className="space-y-4 text-sm text-blue-50">
            <Link to="/identity">
              <li>
                <a
                  href="#about"
                  className="group flex cursor-pointer items-center gap-3 transition duration-300 hover:translate-x-1 hover:text-cyan-300"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-400 transition group-hover:bg-cyan-300"></span>
                  আমাদের সম্পর্কে
                </a>
              </li>
            </Link>

            <Link to="/OurSheba">
              <li>
                <a
                  href="#services"
                  className="group flex cursor-pointer items-center gap-3 transition duration-300 hover:translate-x-1 hover:text-cyan-300"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-400 transition group-hover:bg-cyan-300"></span>
                  আমাদের সেবাসমূহ
                </a>
              </li>
            </Link>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="rounded-2xl border border-blue-300/15 bg-white/[0.07] p-6 shadow-xl backdrop-blur-sm">
          <h2 className="mb-4 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-xl font-extrabold text-transparent">
            সোশাল মিডিয়া
          </h2>

          <div className="mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>

          <div className="mt-2 flex gap-3">
            <a
              href="https://web.facebook.com/profile.php?id=100094222038622&rdid=OT4mb5yEqnp4uRzQ&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1BovMX3JYb%2F%3F_rdc%3D1%26_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/@dr.rebekasultana5160"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg shadow-red-500/20 transition duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <FaYoutube />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative mx-auto mt-12 max-w-7xl border-t border-blue-200/15 px-6 pt-6 text-center">
        <p className="text-sm text-blue-100">
          © ২০২৬ সেবাকেন্দ্রের নাম। সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
};

export default Footer;