import { useAppSelector } from "@/app/redux/hooks";
import { Container, Typography } from "@mui/material";
import React from "react";

const Cart = () => {
  const products = useAppSelector((state) => state.product.product);
  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ margin: "20px 0" }}>
        Your Shopping Cart
      </Typography>
      {products.length === 0 ? (
        <Typography align="center">Your cart is empty.</Typography>
      ) : (
        products.map((product) => (
          <Typography key={product.id}>{product.title}</Typography>
        ))
      )}
    </Container>
  );
};

export default Cart;
