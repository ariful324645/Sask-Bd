// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="w-full shadow-md">
//       <div className="px-4 md:px-8 py-3 flex items-center justify-between">
//         {/* Left Section */}
//         <div className="flex items-center gap-3 max-w-[75%]">
//           <img
//             src="https://i.ibb.co.com/xqdR8kZJ/website-logo-e1754679330283.png"
//             alt="logo"
//             className="w-12 h-12 md:w-24 md:h-24 object-contain"
//           />
//           <h1 className="text-blue-700 font-bold text-xs sm:text-sm md:text-lg leading-tight break-words">
//             ডাঃ শামসুল হুদা ও আঞ্জুমান আরা সেবাকেন্দ্র
//           </h1>
//         </div>

//         {/* Desktop Right Section */}
//         <div className="hidden md:flex items-center gap-4">
//           <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
//             আমার একাউন্ট
//           </button>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
//             সেবা দিন
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white px-4 pb-4 shadow-md">
//           <div className="flex flex-col gap-3">
//             <button className="bg-red-600 text-white py-2 rounded-md">
//               আমার একাউন্ট
//             </button>
//             <button className="bg-blue-600 text-white py-2 rounded-md">
//               সেবা দিন
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;
