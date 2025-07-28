import transporter from "../configs/nodemailer.js";
import Booking from "../models/Booking.js";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import Stripe from 'stripe';


// Function to check availability of room
export const checkAvailability = async ({ checkInDate, checkOutDate, room }) => {
  try {
    const bookings = await Booking.find({
      room,
      checkInDate: { $lte: checkOutDate },
      checkOutDate: { $gte: checkInDate },
    });

    return bookings.length === 0;
  } catch (error) {
    console.error("Availability Check Failed:", error);
    return false;
  }
};

// API to check availability of room
export const checkAvailabilityAPI = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate } = req.body;

    if (!room || !checkInDate || !checkOutDate) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    const isAvailable = await checkAvailability({ checkInDate, checkOutDate, room });
    res.json({ success: true, isAvailable });
  } catch (error) {
    console.error("Availability API Error:", error);
    res.json({ success: false, message: error.message });
  }
};

// API to create a new booking
export const createBooking = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate, guests } = req.body;

    if (!room || !checkInDate || !checkOutDate || !guests) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    const user = req.user._id;

    const isAvailable = await checkAvailability({ checkInDate, checkOutDate, room });
    if (!isAvailable) {
      return res.json({ success: false, message: "Room is not available" });
    }

    const roomData = await Room.findById(room).populate("hotel");
    if (!roomData || !roomData.hotel) {
      return res.json({ success: false, message: "Invalid room or hotel" });
    }

    let totalPrice = roomData.pricePerNight;

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const nights = Math.max(1, Math.ceil(timeDiff / (1000 * 3600 * 24)));
    totalPrice *= nights;

    const booking = await Booking.create({
      user,
      room,
      hotel: roomData.hotel._id,
      guests: +guests,
      checkInDate,
      checkOutDate,
      totalPrice,
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: req.user.email,
      subject: "Hotel Booking Details",
      html: `
        <h2>Your Booking Details</h2>
        <p>Dear ${req.user.username},</p>
        <p>Thank you for your booking! Here are your details:</p>
        <ul>
          <li><strong>Booking ID:</strong> ${booking._id}</li>
          <li><strong>Hotel Name:</strong> ${roomData.hotel.name}</li>
          <li><strong>Location:</strong> ${roomData.hotel.address}</li>
          <li><strong>Check-in:</strong> ${booking.checkInDate.toDateString()}</li>
          <li><strong>Check-out:</strong> ${booking.checkOutDate.toDateString()}</li>
          <li><strong>Nights:</strong> ${nights}</li>
          <li><strong>Total Amount:</strong> ${process.env.CURRENCY || '$'} ${booking.totalPrice}</li>
        </ul>
        <p>We look forward to welcoming you!</p>
        <p>If you need to make any changes, feel free to contact us.</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (mailError) {
      console.error("📧 Mail sending failed:", mailError.message);
    }

    res.json({ success: true, message: "Booking created successfully" });
  } catch (error) {
    console.error(" Booking failed:", error);
    res.json({ success: false, message: "Failed to create booking" });
  }
};

// API to get all bookings for a user
export const getUserBookings = async (req, res) => {
  try {
    const user = req.user._id;
    const bookings = await Booking.find({ user })
      .populate("room hotel")
      .sort({ createdAt: -1 });

    res.json({ success: true, bookings });
  } catch (error) {
    console.error("Failed to fetch user bookings:", error);
    res.json({ success: false, message: "Failed to fetch bookings" });
  }
};

// API to get bookings for a hotel owned by the logged-in user
export const getHotelBookings = async (req, res) => {
  try {
    const hotel = await Hotel.findOne({ owner: req.auth.userId });

    if (!hotel) {
      return res.json({ success: false, message: "No Hotel Found" });
    }

    const bookings = await Booking.find({ hotel: hotel._id })
      .populate("room hotel user")
      .sort({ createdAt: -1 });

    const totalBookings = bookings.length;
    const totalRevenue = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0);

    res.json({
      success: true,
      dashboardData: {
        totalBookings,
        totalRevenue,
        bookings,
      },
    });
  } catch (error) {
    console.error("Failed to fetch hotel bookings:", error);
    res.json({ success: false, message: "Failed to fetch bookings" });
  }
};


const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripePayment = async (req, res) => {
  try {
    const { bookingId } = req.body;

    const booking = await Booking.findById(bookingId);
    if (!booking) return res.status(404).json({ success: false, message: "Booking not found" });

    const roomData = await Room.findById(booking.room).populate('hotel');
    if (!roomData) return res.status(404).json({ success: false, message: "Room not found" });

    const totalPrice = Math.round(booking.totalPrice * 100);
    const { origin } = req.headers;

    const line_items = [
      {
        price_data: {
          currency: "inr", // change if needed
          product_data: {
            name: roomData.hotel.name,
          },
          unit_amount: totalPrice,
        },
        quantity: 1,
      },
    ];

    const session = await stripeInstance.checkout.sessions.create({
  metadata: {
    bookingId: booking._id.toString(),
  },
  line_items,
  mode: "payment",
  success_url: `${origin}/loader/my-bookings`,
  cancel_url: `${origin}/my-bookings`,
});

    res.json({ success: true, url: session.url });
  } catch (error) {
    console.error("Stripe payment error:", error);
    res.status(500).json({ success: false, message: "Payment Failed", error: error.message });
  }
};