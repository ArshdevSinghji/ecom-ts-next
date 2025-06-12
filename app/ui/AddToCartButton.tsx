"use client";

import React from "react";
import { Button } from "@mui/material";
import { Product } from "../lib/definations";
import { getDataById } from "../lib/data";
import { useAppDispatch } from "../redux/hooks";
import { setProduct } from "../redux/slice/productSlice";

const AddToCartButton: React.FC<{ productId: number }> = ({ productId }) => {
  const dispatch = useAppDispatch();
  const handleClick = async () => {
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
