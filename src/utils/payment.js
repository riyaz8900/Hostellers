export const initiatePayment = (event, userData) => {
  if (!window.Razorpay) {
    alert("Razorpay SDK not loaded. Please try again later.");
    return;
  }

  const options = {
    key: "YOUR_RAZORPAY_KEY_ID", // 🔁 Replace with your Razorpay key
    amount: 50000, // Amount in paisa (50000 = ₹500)
    currency: "INR",
    name: event.title,
    description: event.description,
    image: event.image, // Optional: Event image/logo
    handler: function (response) {
      alert(`Payment successful!\nPayment ID: ${response.razorpay_payment_id}`);
      // TODO: Send userData & payment info to backend, email/SMS services
    },
    prefill: {
      name: userData.name,
      email: userData.email,
      contact: userData.phone,
    },
    notes: {
      event_title: event.title,
      user_name: userData.name,
    },
    theme: {
      color: "#0d9488", // Tailwind teal-600
    },
    modal: {
      ondismiss: function () {
        alert("Payment cancelled.");
      },
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};
