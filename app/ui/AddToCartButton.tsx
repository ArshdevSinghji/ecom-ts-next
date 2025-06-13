"use client";

import React from "react";
import { Button } from "@mui/material";
import { Product } from "../lib/definations";
import { getDataById } from "../lib/data";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setProduct } from "../redux/slice/productSlice";

const AddToCartButton: React.FC<{ productId: number }> = ({ productId }) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.product.product);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const index = cart.findIndex((item) => item.id === productId);
    if (index !== -1) {
      alert("Product already in cart");
      return;
    }
    const product: Product = await getDataById(productId);
    dispatch(setProduct(product));
  };
  return (
    <Button
      variant="contained"
      size="small"
      sx={{ backgroundColor: "#000", color: "#fff" }}
      onClick={handleClick}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
