import React from 'react'
// import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const FeaturedDestination = () => {
    const { rooms, navigate } = useAppContext();

    return rooms.length > 0 && (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-8'>

            <Title
                title='FeaturedDestination'
                subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.'
            />

            {/* Increased margin between title & cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 w-full'>
                {rooms.slice(0, 4).map((room, index) => (
                    <HotelCard key={room._id} room={room} index={index} />
                ))}
            </div>

            {/* <button
                onClick={() => { navigate('/rooms'); scrollTo(0, 0) }}
                className='my-8 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'
            >
                View All Destinations
            </button> */}

            <button
  onClick={() => { navigate('/rooms'); scrollTo(0, 0) }}
  className='mt-12 mb-8 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'
>
  View All Destinations
</button>

        </div>
    )
}

export default FeaturedDestination
