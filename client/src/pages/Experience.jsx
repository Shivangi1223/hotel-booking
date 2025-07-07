// import React from 'react';
// import { motion } from 'framer-motion';

// const Experience = () => {
//   return (
//     <div className="pt-28 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50 min-h-screen">
//       {/* Animated Heading */}
//       <motion.h1
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="text-4xl bold mb-6 text-gray-800"
//       >
//         Our Experience
//       </motion.h1>

//       {/* Intro Paragraph */}
//       <p className="text-lg text-gray-700 leading-relaxed mb-8 font-normal">
//         At QuickStay, we’re creating a better way to experience travel — right from the moment you book.
//         Every stay is carefully selected to offer comfort, style, and peace of mind.
//         We're new, but built with passion and real understanding of what travelers truly value.
//         From your first click to check-in, we keep things smooth, secure, and stress-free.
//         This is what the future of travel feels like — the QuickStay experience.
//       </p>

//       {/* Experience Highlights */}
//       <div className="grid md:grid-cols-3 gap-6 mt-8">
//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
//           <h3 className="text-xl font-medium mb-2">💡 Built on real travel insights</h3>
//           <p className="text-gray-600">We may be new, but we know what makes a stay unforgettable</p>
//         </div>
//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
//           <h3 className="text-xl font-medium mb-2">🤝 Starting small, growing fast</h3>
//           <p className="text-gray-600">QuickStay is the beginning of a new journey — where every booking is a happy experience.</p>
//         </div>
//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
//           <h3 className="text-xl font-medium mb-2">🛎️ Exceptional Service</h3>
//           <p className="text-gray-600">From booking to check-out, we ensure your comfort and convenience at every step.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;


// import React from 'react';
// import { motion } from 'framer-motion';

// const Experience = () => {
//   return (
//     <div className="pt-24 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50 min-h-screen">
//       {/* Animated Heading */}
//       <motion.h1
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 text-center md:text-left"
//       >
//         Our Experience
//       </motion.h1>

//       {/* Intro Paragraph */}
//       <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 font-normal text-center md:text-left">
//         At QuickStay, we’re creating a better way to experience travel — right from the moment you book.
//         Every stay is carefully selected to offer comfort, style, and peace of mind.
//         We're new, but built with passion and real understanding of what travelers truly value.
//         From your first click to check-in, we keep things smooth, secure, and stress-free.
//         This is what the future of travel feels like — the QuickStay experience.
//       </p>

//       {/* Experience Highlights */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
//         <div className="bg-white p-5 sm:p-6 rounded-xl shadow hover:shadow-lg transition-all">
//           <h3 className="text-lg sm:text-xl font-medium mb-2">💡 Built on real travel insights</h3>
//           <p className="text-gray-600 text-sm sm:text-base">We may be new, but we know what makes a stay unforgettable.</p>
//         </div>

//         <div className="bg-white p-5 sm:p-6 rounded-xl shadow hover:shadow-lg transition-all">
//           <h3 className="text-lg sm:text-xl font-medium mb-2">🤝 Starting small, growing fast</h3>
//           <p className="text-gray-600 text-sm sm:text-base">QuickStay is the beginning of a new journey — where every booking is a happy experience.</p>
//         </div>

//         <div className="bg-white p-5 sm:p-6 rounded-xl shadow hover:shadow-lg transition-all">
//           <h3 className="text-lg sm:text-xl font-medium mb-2">🛎️ Exceptional Service</h3>
//           <p className="text-gray-600 text-sm sm:text-base">From booking to check-out, we ensure your comfort and convenience at every step.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;


import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="pt-28 pb-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50 min-h-screen">

      {/* Animated Heading */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-4xl bold mb-6 text-gray-800"
      >
        Our Experience
      </motion.h1>

      {/* Intro Paragraph */}
      <p className="text-lg text-gray-700 leading-relaxed mb-8 font-normal">
        At QuickStay, we’re creating a better way to experience travel — right from the moment you book.
        Every stay is carefully selected to offer comfort, style, and peace of mind.
        We're new, but built with passion and real understanding of what travelers truly value.
        From your first click to check-in, we keep things smooth, secure, and stress-free.
        This is what the future of travel feels like — the QuickStay experience.
      </p>

      {/* Experience Highlights */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {[
          {
            icon: '💡',
            title: 'Built on real travel insights',
            text: 'We may be new, but we know what makes a stay unforgettable',
          },
          {
            icon: '🤝',
            title: 'Starting small, growing fast',
            text: 'QuickStay is the beginning of a new journey — where every booking is a happy experience.',
          },
          {
            icon: '🛎️',
            title: 'Exceptional Service',
            text: 'From booking to check-out, we ensure your comfort and convenience at every step.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all flex flex-col justify-between min-h-[200px]"
          >
            <div>
              <h3 className="text-xl font-medium mb-2">{item.icon} {item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
