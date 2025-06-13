"use client";

import { useAppSelector, useAppDispatch } from "@/app/redux/hooks";
import {
  Container,
  Typography,
  Paper,
  Stack,
  Button,
  Box,
} from "@mui/material";
import React from "react";
import { removeProduct } from "@/app/redux/slice/productSlice";

const Cart = () => {
  const products = useAppSelector((state) => state.product.product);
  const dispatch = useAppDispatch();

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" sx={{ margin: "20px 0" }}>
        Your Shopping Cart
      </Typography>
      {products.length === 0 ? (
        <Typography align="center">Your cart is empty.</Typography>
      ) : (
        <Stack spacing={3}>
          {products.map((product) => (
            <Paper
              key={product.id}
              elevation={2}
              sx={{ p: 2, display: "flex", alignItems: "center" }}
            >
              <Box
                component="img"
                src={product.thumbnail}
                alt={product.title}
                sx={{
                  width: 80,
                  height: 80,
                  objectFit: "cover",
                  borderRadius: 2,
                  mr: 2,
                }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{product.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  ${product.price}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                color="error"
                onClick={() => dispatch(removeProduct({ id: product.id }))}
              >
                Remove
              </Button>
            </Paper>
          ))}
        </Stack>
      )}
    </Container>
  );
};

export default Cart;
