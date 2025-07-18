import React from 'react';
import About from './pages/About';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import MyBooking from './pages/MyBooking';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import Dashboard from './pages/hotelOwner/Dashboard';
import AddRoom from './pages/AddRoom';
import ListRoom from './pages/ListRoom';
import { Toaster } from 'react-hot-toast';
import { useAppContext } from './context/AppContext';
import Loader from './components/Loader';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const { showHotelReg } = useAppContext();

  return (
    <div className='flex flex-col min-h-screen'>
      <Toaster />
      {!isOwnerPath && <Navbar />}
      {showHotelReg && <HotelReg />}

      {/* Page content */}
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />

          {/* Room Detail Page */}
          <Route path='/rooms/:id' element={<RoomDetails />} />

          {/* User Bookings */}
          <Route path='/my-bookings' element={<MyBooking />} />

          {/* Newly Added Pages */}
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />

          {/* Routes for Loader -->> */}
          <Route path='/loader/:nextUrl' element={<Loader />} />
          {/* Owner Dashboard Layout */}
          <Route path='/owner' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='add-room' element={<AddRoom />} />
            <Route path='list-room' element={<ListRoom />} />
          </Route>
        </Routes>
      </main>

      {!isOwnerPath && <Footer />}
    </div>
  );
};

export default App;
