import React from 'react';
import '../payments/PaymentPage.css';

const PaymentPage = () => {
  const payWithPaystack = (e) => {
    e.preventDefault();

    let handler = window.PaystackPop.setup({
      key: 'pk_test_c0a30850d1d38937ccbcc0b6ee194c8051d10ef0', 
      email: document.getElementById("email-address").value,
      amount: document.getElementById("amount").value * 100,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1),
      onClose: function(){
        alert('Window closed.');
      },
      callback: function(response){
        let message = 'Payment complete! Reference: ' + response.reference;
        alert(message);
      }
    });

    handler.openIframe();
  };

  return (
    <div className="payment-container">
      <form id="paymentForm" onSubmit={payWithPaystack}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email-address" required />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="tel" id="amount" required />
        </div>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
        </div>
        <div className="form-submit">
          <button type="submit">Pay</button>
        </div>
      </form>
      <script src="https://js.paystack.co/v1/inline.js"></script>
    </div>
  );
};

export default PaymentPage;
