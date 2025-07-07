// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <div className="pt-28 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50 min-h-screen">

//       {/* 🔁 Looping Left-to-Right Animation in Place */}
//       <div className="overflow-hidden w-full mb-6">
//         <motion.h1
//           animate={{ x: [0, 30, 0] }} // forward and back
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           className="text-4xl bold text-gray-800 text-center"
//         >
//           Welcome to QuickStay
//         </motion.h1>
//       </div>

//       {/* Main Description */}
//       <p className="text-lg text-gray-700 leading-relaxed font-normal">
//         Your trusted global partner for premium hotel bookings in iconic cities like New York, London, and beyond. <br />
//         We believe in making international travel easy, joyful, and unforgettable. Whether you're booking a chic city apartment or a luxury resort, our curated stays deliver the perfect balance of comfort and convenience. <br />
//         From the moment you explore to the moment you check in, QuickStay ensures a smooth and secure booking journey — bringing you the finest stays worldwide.
//       </p>

//       {/* Features Section */}
//       <div className="grid md:grid-cols-3 gap-6 mt-12">
//         <div className="bg-white p-6 shadow rounded-xl hover:shadow-md transition">
//           <h3 className="text-xl font-semibold mb-2">🌍 Global Coverage</h3>
//           <p className="text-gray-600">Book stays in top destinations like New York, London, Dubai, and more — all in one place.</p>
//         </div>
//         <div className="bg-white p-6 shadow rounded-xl hover:shadow-md transition">
//           <h3 className="text-xl font-semibold mb-2">🏨 Curated Hotels</h3>
//           <p className="text-gray-600">We select every property with care — ensuring a stay that’s relaxing, refined, and right where you need it.
//           </p>
//         </div>
//         <div className="bg-white p-6 shadow rounded-xl hover:shadow-md transition">
//           <h3 className="text-xl font-semibold mb-2">🔒 Secure Booking</h3>
//           <p className="text-gray-600">End-to-end encrypted, reliable, and fast booking — just the way modern travel should be.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <div className="pt-28 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50 min-h-screen">

//       {/* 🔁 Looping Left-to-Right Animation in Place */}
//       <div className="overflow-hidden w-full mb-6">
//         <motion.h1
//           animate={{ x: [0, 30, 0] }} // forward and back
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           className="text-4xl bold text-gray-800 text-center"
//         >
//           Welcome to QuickStay
//         </motion.h1>
//       </div>

//       {/* Main Description */}
//       <p className="text-lg text-gray-700 leading-relaxed font-normal">
//         Your trusted global partner for premium hotel bookings in iconic cities like New York, London, and beyond. <br />
//         We believe in making international travel easy, joyful, and unforgettable. Whether you're booking a chic city apartment or a luxury resort, our curated stays deliver the perfect balance of comfort and convenience. <br />
//         From the moment you explore to the moment you check in, QuickStay ensures a smooth and secure booking journey — bringing you the finest stays worldwide.
//       </p>

//       {/* Features Section */}
//       <div className="grid md:grid-cols-3 gap-6 mt-12">
//         <div className="bg-white p-6 shadow rounded-xl hover:shadow-md transition">
//           <h3 className="text-xl font-semibold mb-2">🌍 Global Coverage</h3>
//           <p className="text-gray-600">Book stays in top destinations like New York, London, Dubai, and more — all in one place.</p>
//         </div>
//         <div className="bg-white p-6 shadow rounded-xl hover:shadow-md transition">
//           <h3 className="text-xl font-semibold mb-2">🏨 Curated Hotels</h3>
//           <p className="text-gray-600">We select every property with care — ensuring a stay that’s relaxing, refined, and right where you need it.</p>
//         </div>
//         <div className="bg-white p-6 shadow rounded-xl hover:shadow-md transition mb-10">
//           <h3 className="text-xl font-semibold mb-2">🔒 Secure Booking</h3>
//           <p className="text-gray-600">End-to-end encrypted, reliable, and fast booking — just the way modern travel should be.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-28 pb-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50 min-h-screen">

      {/* 🔁 Looping Left-to-Right Animation in Place */}
      <div className="overflow-hidden w-full mb-6">
        <motion.h1
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-4xl bold text-gray-800 text-center"
        >
          Welcome to QuickStay
        </motion.h1>
      </div>

      {/* Main Description */}
      <p className="text-lg text-gray-700 leading-relaxed font-normal">
        Your trusted global partner for premium hotel bookings in iconic cities like New York, London, and beyond. <br />
        We believe in making international travel easy, joyful, and unforgettable. Whether you're booking a chic city apartment or a luxury resort, our curated stays deliver the perfect balance of comfort and convenience. <br />
        From the moment you explore to the moment you check in, QuickStay ensures a smooth and secure booking journey — bringing you the finest stays worldwide.
      </p>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {[{
          icon: '🌍',
          title: 'Global Coverage',
          text: 'Book stays in top destinations like New York, London, Dubai, and more — all in one place.'
        }, {
          icon: '🏨',
          title: 'Curated Hotels',
          text: 'We select every property with care — ensuring a stay that’s relaxing, refined, and right where you need it.'
        }, {
          icon: '🔒',
          title: 'Secure Booking',
          text: 'End-to-end encrypted, reliable, and fast booking — just the way modern travel should be.'
        }].map((item, index) => (
          <div key={index} className="bg-white p-6 shadow rounded-xl hover:shadow-md transition flex flex-col justify-between min-h-[200px]">
            <div>
              <h3 className="text-xl font-semibold mb-2">{item.icon} {item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default About;
