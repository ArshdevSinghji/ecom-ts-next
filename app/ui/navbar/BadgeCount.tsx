"use client";

import { useAppSelector } from "@/app/redux/hooks";
import { Badge } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const BadgeCount = () => {
  const count = useAppSelector((state) => state.product.product.length);
  return (
    <Badge badgeContent={count} color="primary">
      <ShoppingCartIcon />
    </Badge>
  );
};

export default BadgeCount;
