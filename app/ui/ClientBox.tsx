"use client";

import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { Product } from "../lib/definations";

const ClientBox = ({
  product,
  children,
}: {
  product: Product;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/products/" + product.id);
  };

  return (
    <Box onClick={handleClick} sx={{ cursor: "pointer" }}>
      {children}
    </Box>
  );
};

export default ClientBox;
