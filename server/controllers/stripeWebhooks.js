import Stripe from 'stripe';
import Booking from "../models/Booking.js";

const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeWebhooks = async (request, response) => {
  console.log("📥 Stripe Webhook hit!"); 
  const sig = request.headers['stripe-signature'];
  let event;

  try {
    event = stripeInstance.webhooks.constructEvent(
      request.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle checkout session completed
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const bookingId = session.metadata?.bookingId;

    console.log("✅ Stripe Webhook: Payment completed for Booking ID:", bookingId);

    if (!bookingId) {
      console.error("❌ No bookingId found in session metadata");
      return response.status(400).json({ error: "No bookingId in metadata" });
    }

    try {
      const updatedBooking = await Booking.findByIdAndUpdate(
        bookingId,
        {
          isPaid: true,
          status: "paid", 
          paymentMethod: "Stripe",
        },
        { new: true }
      );

      if (updatedBooking) {
        console.log("Booking updated to 'paid':", updatedBooking._id);
      } else {
        console.warn("Booking not found for ID:", bookingId);
      }
    } catch (err) {
      console.error("Failed to update booking:", bookingId, "Error:", err.message);
    }
  } else {
    console.log("Unhandled Stripe event type:", event.type);
  }

 
  response.status(200).json({ received: true });
};
