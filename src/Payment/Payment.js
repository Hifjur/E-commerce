import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Jx5DqJ8BbjJfr4C3I3MZcKJ6w8ahM4uSsZBCJgOivywGZqcDrayV4LsfZoGvy9womiNLKFhj0vN9lYyfqYecNu300vgw93X9a"
);

const Payment = () => {
  const {total} = useParams();
  return (
    <div
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        backgroundColor: "#1D2440",
        color: "white",
        borderRadius: 20,
      }}
    >
      <h2>Pay ${total}</h2>

      {total && (
        <Elements stripe={stripePromise}>
          <CheckoutForm bookings={total}></CheckoutForm>
        </Elements>
      )}
      <p style={{ color: "gray", fontSize: 20 }}>
        Test Card Number for Demo only 4242424242424242
      </p>
    </div>
  );
};

export default Payment;
