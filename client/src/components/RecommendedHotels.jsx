// // src/components/RecommendedHotels.jsx

// import React from 'react';
// import Title from './Title';
// import StaticHotelCard from './StaticHotelCard';

// // ✅ Import your static room images
// import roomImg1 from '../assets/roomImg1.png';
// import roomImg2 from '../assets/roomImg2.png';
// import roomImg3 from '../assets/roomImg3.png';
// import roomImg4 from '../assets/roomImg4.png';

// const staticHotelData = [
//   {
//     name: 'The Grand Palace',
//     city: 'Mumbai',
//     image: roomImg1,
//   },
//   {
//     name: 'Sea Breeze Resort',
//     city: 'Goa',
//     image: roomImg2,
//   },
//   {
//     name: 'Mountain Retreat',
//     city: 'Manali',
//     image: roomImg3,
//   },
//   {
//     name: 'Royal Heritage',
//     city: 'Jaipur',
//     image: roomImg4,
//   },
// ];

// const RecommendedHotels = () => {
//   return (
//     <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
//       <Title
//         title='Recommended Hotels'
//         subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'
//       />

//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full'>
//         {staticHotelData.map((hotel, index) => (
//           <StaticHotelCard
//             key={index}
//             image={hotel.image}
//             name={hotel.name}
//             city={hotel.city}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecommendedHotels;


// src/components/RecommendedHotels.jsx

// import React from 'react';
// import Title from './Title';
// import StaticHotelCard from './StaticHotelCard';

// import roomImg1 from '../assets/roomImg1.png';
// import roomImg2 from '../assets/roomImg2.png';
// import roomImg3 from '../assets/roomImg3.png';
// import roomImg4 from '../assets/roomImg4.png';

// const staticHotelData = [
//   { image: roomImg1, price: 399 },
//   { image: roomImg2, price: 1299 },
//   { image: roomImg3, price: 269 },
//   { image: roomImg4, price: 199 },
// ];

// const RecommendedHotels = () => {
//   return (
//     <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
//       <Title
//         title='Recommended Hotels'
//         subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'
//       />

//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full'>
//         {staticHotelData.map((hotel, index) => (
//           <StaticHotelCard
//             key={index}
//             image={hotel.image}
//             price={hotel.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecommendedHotels;



// src/components/RecommendedHotels.jsx

// import React from 'react';
// import Title from './Title';
// import StaticHotelCard from './StaticHotelCard';

// import roomImg1 from '../assets/roomImg1.png';
// import roomImg2 from '../assets/roomImg2.png';
// import roomImg3 from '../assets/roomImg3.png';
// import roomImg4 from '../assets/roomImg4.png';

// const staticHotelData = [
//   { image: roomImg1, price: 199, isBestSeller: true },
//   { image: roomImg2, price: 249, isBestSeller: false },
//   { image: roomImg3, price: 299, isBestSeller: true },
//   { image: roomImg4, price: 399, isBestSeller: false },
// ];

// const RecommendedHotels = () => {
//   return (
//     <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
//       <Title
//         title='Recommended Hotels'
//         subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'
//       />
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full'>
//         {staticHotelData.map((hotel, index) => (
//           <StaticHotelCard
//             key={index}
//             image={hotel.image}
//             price={hotel.price}
//             isBestSeller={hotel.isBestSeller}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecommendedHotels;


// src/components/RecommendedHotels.jsx

// import React from 'react';
// import Title from './Title';
// import StaticHotelCard from './StaticHotelCard';

// import roomImg1 from '../assets/roomImg1.png';
// import roomImg2 from '../assets/roomImg2.png';
// import roomImg3 from '../assets/roomImg3.png';
// import roomImg4 from '../assets/roomImg4.png';

// const staticHotelData = [
//   { id: '1', image: roomImg1, price: 199, isBestSeller: true },
//   { id: '2', image: roomImg2, price: 249, isBestSeller: false },
//   { id: '3', image: roomImg3, price: 299, isBestSeller: true },
//   { id: '4', image: roomImg4, price: 399, isBestSeller: false },
// ];

// const RecommendedHotels = () => {
//   return (
//     <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
//       <Title
//         title='Recommended Hotels'
//         subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'
//       />
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full'>
//         {staticHotelData.map((hotel, index) => (
//           <StaticHotelCard
//             key={index}
//             id={hotel.id}
//             image={hotel.image}
//             price={hotel.price}
//             isBestSeller={hotel.isBestSeller}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecommendedHotels;



import React from 'react';
import Title from './Title';
import StaticHotelCard from './StaticHotelCard';

import roomImg1 from '../assets/roomImg1.png';
import roomImg2 from '../assets/roomImg2.png';
import roomImg3 from '../assets/roomImg3.png';
import roomImg4 from '../assets/roomImg4.png';

const staticHotelData = [
  {
    id: '1',
    image: roomImg1,
    price: 199,
    isBestSeller: true,
    amenities: ['Free WiFi', 'Room Service', 'Pool Access'],
  },
  {
    id: '2',
    image: roomImg2,
    price: 249,
    isBestSeller: false,
    amenities: ['Free WiFi', 'Room Service'],
  },
  {
    id: '3',
    image: roomImg3,
    price: 299,
    isBestSeller: true,
    amenities: ['Free WiFi', 'Pool Access'],
  },
  {
    id: '4',
    image: roomImg4,
    price: 399,
    isBestSeller: false,
    amenities: ['Room Service', 'Pool Access'],
  },
];

const RecommendedHotels = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
      <Title
        title='Recommended Hotels'
        subTitle='Explore our curated collection of world-class stays that blend luxury, comfort, and unforgettable moments.'
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 w-full'>
        {staticHotelData.map((hotel, index) => (
          <StaticHotelCard
            key={index}
            id={hotel.id}
            image={hotel.image}
            price={hotel.price}
            isBestSeller={hotel.isBestSeller}
            amenities={hotel.amenities}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedHotels;

