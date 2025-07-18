import Stripe from 'stripe';
import Booking from "../models/Booking.js";

const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeWebhooks = async (request, response) => {
  const sig = request.headers['stripe-signature'];
  let event;

  try {
    event = stripeInstance.webhooks.constructEvent(
      request.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const bookingId = session.metadata?.bookingId;

    console.log("✅ Webhook received for booking:", bookingId);

    if (!bookingId) {
      console.error("❌ No bookingId found in session metadata");
      return response.status(400).json({ error: "No bookingId in metadata" });
    }

    try {
      const updatedBooking = await Booking.findByIdAndUpdate(
        bookingId,
        {
          isPaid: true,
          status: "confirmed", // ✅ Matches your schema enum
          paymentMethod: "Stripe",
        },
        { new: true }
      );

      console.log("✅ Booking updated successfully:", updatedBooking);
    } catch (err) {
      console.error("❌ Failed to update booking:", bookingId, "Error:", err.message);
      // Still return 200 so Stripe doesn't retry the webhook
    }
  } else {
    console.log("ℹ️ Unhandled event type:", event.type);
  }

  response.json({ received: true });
};
