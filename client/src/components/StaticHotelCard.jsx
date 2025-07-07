// // src/components/StaticHotelCard.jsx

// import React from 'react';

// const StaticHotelCard = ({ image, name, city }) => {
//   return (
//     <div className='bg-white rounded-xl shadow-md overflow-hidden'>
//       <img
//         src={image}
//         alt='Hotel'
//         className='w-full h-48 object-cover'
//       />
//       <div className='p-4'>
//         <h2 className='text-xl font-semibold'>{name}</h2>
//         <p className='text-gray-500'>{city}</p>
//       </div>
//     </div>
//   );
// };

// export default StaticHotelCard;


// src/components/StaticHotelCard.jsx

// import React from 'react';

// const StaticHotelCard = ({ image, price }) => {
//   return (
//     <div className='bg-white rounded-xl shadow-md overflow-hidden w-64'>
//       <img
//         src={image}
//         alt='Hotel'
//         className='w-full h-40 object-cover'
//       />
//       <div className='p-4'>
//         <h2 className='text-lg font-semibold'>Urbanaya Suites</h2>
//         <p className='text-gray-600 text-sm'>5 Star Hotel in Las Vegas</p>
//         <p className='text-gray-400 text-sm'>Near Road 145 | 1.1 km</p>
//         <div className='flex justify-between items-center mt-2'>
//           <span className='text-gray-800 font-bold'>${price} <span className='text-sm font-normal'>/night</span></span>
//           <button className='bg-gray-900 text-white text-sm px-3 py-1 rounded-md'>Book Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StaticHotelCard;


// src/components/StaticHotelCard.jsx

// import React from 'react';

// const StaticHotelCard = ({ image, price }) => {
//   return (
//     <div className='bg-white rounded-xl shadow-md overflow-hidden w-64'>
//       <img
//         src={image}
//         alt='Hotel'
//         className='w-full h-40 object-cover'
//       />
//       <div className='p-4'>
//         <h2 className='text-lg font-semibold'>Urbanaya Suites</h2>
//         <p className='text-gray-600 text-sm'>5 Star Hotel in Las Vegas</p>
//         <p className='text-gray-400 text-sm'>Near Road 145 | 1.1 km</p>
//         <div className='flex justify-between items-center mt-2'>
//           <span className='text-gray-800 font-bold'>${price} <span className='text-sm font-normal'>/night</span></span>
//           <button className='bg-gray-900 text-white text-sm px-3 py-1 rounded-md'>Book Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StaticHotelCard;

// src/components/StaticHotelCard.jsx

// import React from 'react';
// import { FaStar } from 'react-icons/fa';
// import { FaMapMarkerAlt } from 'react-icons/fa';

// const StaticHotelCard = ({ image, price, isBestSeller }) => {
//   return (
//     <div className='bg-white rounded-xl shadow-md overflow-hidden w-64 relative'>
//       <img
//         src={image}
//         alt='Hotel'
//         className='w-full h-40 object-cover'
//       />
      
//       {/* Best Seller badge */}
//       {isBestSeller && (
//         <div className='absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded-full shadow'>
//           Best Seller
//         </div>
//       )}

//       <div className='p-4'>
//         <h2 className='text-md font-semibold text-gray-900'>Urbanza Suites</h2>
//         <p className='flex items-center text-sm text-gray-500 mt-1'>
//           <FaMapMarkerAlt className='mr-1 text-gray-400' /> Main Road 123 Street , 23 Colony
//         </p>
//         <div className='flex items-center text-sm text-gray-700 mt-1'>
//           <FaStar className='text-orange-400 mr-1' />
//           4.5
//         </div>
//         <div className='flex justify-between items-center mt-3'>
//           <span className='text-gray-800 font-bold'>${price}<span className='text-sm font-normal'>/night</span></span>
//           <button className='bg-gray-900 text-white text-sm px-3 py-1 rounded-md'>Book Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StaticHotelCard;


// src/components/StaticHotelCard.jsx

import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StaticHotelCard = ({ image, price, isBestSeller, id }) => {
  return (
    <Link to={`/rooms/${id}`} className="no-underline">
      <div className='bg-white rounded-xl shadow-md overflow-hidden w-64 relative cursor-pointer hover:shadow-lg transition'>
        <img
          src={image}
          alt='Hotel'
          className='w-full h-40 object-cover'
        />

        {/* Best Seller badge */}
        {isBestSeller && (
          <div className='absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded-full shadow'>
            Best Seller
          </div>
        )}

        <div className='p-4'>
          <h2 className='text-md font-semibold text-gray-900'>Urbanza Suites</h2>
          <p className='flex items-center text-sm text-gray-500 mt-1'>
            <FaMapMarkerAlt className='mr-1 text-gray-400' /> Main Road 123 Street, 23 Colony
          </p>
          <div className='flex items-center text-sm text-gray-700 mt-1'>
            <FaStar className='text-orange-400 mr-1' />
            4.5
          </div>
          <div className='flex justify-between items-center mt-3'>
            <span className='text-gray-800 font-bold'>
              ${price}<span className='text-sm font-normal'>/night</span>
            </span>
            <button className='bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm px-3 py-1 rounded-md font-medium'>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StaticHotelCard;


// import React from 'react';
// import { FaStar } from 'react-icons/fa';
// import { FaMapMarkerAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { facilityIcons } from '../assets/assets'; // ✅ import facility icons

// const StaticHotelCard = ({ image, price, isBestSeller, id, amenities = [] }) => {
//   return (
//     <Link to={`/rooms/${id}`} className="no-underline">
//       <div className='bg-white rounded-xl shadow-md overflow-hidden w-64 relative cursor-pointer hover:shadow-lg transition'>
//         <img
//           src={image}
//           alt='Hotel'
//           className='w-full h-40 object-cover'
//         />

//         {/* Best Seller badge */}
//         {isBestSeller && (
//           <div className='absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded-full shadow'>
//             Best Seller
//           </div>
//         )}

//         <div className='p-4'>
//           <h2 className='text-md font-semibold text-gray-900'>Urbanza Suites</h2>
//           <p className='flex items-center text-sm text-gray-500 mt-1'>
//             <FaMapMarkerAlt className='mr-1 text-gray-400' /> Main Road 123 Street, 23 Colony
//           </p>
//           <div className='flex items-center text-sm text-gray-700 mt-1'>
//             <FaStar className='text-orange-400 mr-1' />
//             4.5
//           </div>

//           {/* ✅ Amenities */}
//           <div className='flex gap-2 mt-3 flex-wrap'>
//             {amenities.slice(0, 3).map((amenity, i) => (
//               facilityIcons[amenity] && (
//                 <div key={i} className='flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md text-xs'>
//                   <img src={facilityIcons[amenity]} alt={amenity} className='w-4 h-4' />
//                   <span>{amenity}</span>
//                 </div>
//               )
//             ))}
//           </div>

//           <div className='flex justify-between items-center mt-4'>
//             <span className='text-gray-800 font-bold'>
//               ${price}<span className='text-sm font-normal'>/night</span>
//             </span>
//             <button className='bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm px-3 py-1 rounded-md font-medium'>
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default StaticHotelCard;


