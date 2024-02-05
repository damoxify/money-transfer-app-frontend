// import React, { useState } from 'react';
// import axios from 'axios';

// const PaymentPage = () => {
//   const [paymentAmount, setPaymentAmount] = useState(0);

//   const handlePayment = async () => {
//     try {
//       const response = await axios.post('/api/create-payment-intent', {
//         amount: paymentAmount * 100, // Convert amount to cents (Stripe expects amount in cents)
//       });

//       const clientSecret = response.data.clientSecret;

//       const stripe = Stripe('your_stripe_publishable_key');

//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: stripe.elements.getElement('card'),
//         },
//       });

//       if (result.paymentIntent.status === 'succeeded') {
//         // Payment succeeded, you can handle success here
//         alert('Payment succeeded!');
//       } else {
//         // Payment failed, handle the error
//         console.error('Payment failed:', result.error.message);
//       }
//     } catch (error) {
//       console.error('Error processing payment:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Payment Page</h2>
//       <label>
//         Amount: $
//         <input
//           type="number"
//           value={paymentAmount}
//           onChange={(e) => setPaymentAmount(e.target.value)}
//         />
//       </label>
//       <div id="card-element">
//         {/* Include a card element here using Stripe.js */}
//         {/* For simplicity, you can use an external Stripe.js library like react-stripe-elements */}
//       </div>
//       <button onClick={handlePayment}>Pay Now</button>
//     </div>
//   );
// };

// export default PaymentPage;
