import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { Container } from "@mui/material";
import useAuth from "../Hooks/useAuth";
import Header from "../components/Shared/Header";

const stripePromise = loadStripe(
  "pk_test_51Jx5DqJ8BbjJfr4C3I3MZcKJ6w8ahM4uSsZBCJgOivywGZqcDrayV4LsfZoGvy9womiNLKFhj0vN9lYyfqYecNu300vgw93X9a"
);

const Payment = () => {
  const {total} = useParams();
  const {user} = useAuth();
  const totali=1
  return (
    <>
    <Header/>
    <Container
      style={{
        marginTop:'50px',
        paddingTop: "120px",
        paddingBottom: "120px",
        backgroundColor: "#0A479F",
        color: "white",
        borderRadius: 20,
      }}
    >
      <h2 style={{paddingBottom:'40px', justifyContet:"center", textAlign :'center'}}>Hello {user.displayName}</h2>
      <h2 style={{paddingBottom:'40px', justifyContet:"center", textAlign :'center'}}>Pay ${total}</h2>

      {totali && (
        <Elements stripe={stripePromise}>
          <CheckoutForm bookings={total}></CheckoutForm>
        </Elements>
      )}
      <p style={{ color: "gray", fontSize: 20 }}>
        Test Card Number for Demo only 4242424242424242
      </p>
    </Container></>
  );
};

export default Payment;
