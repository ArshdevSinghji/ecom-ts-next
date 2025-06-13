import { Product } from "@/app/lib/definations";
import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import AddToCartButton from "../AddToCartButton";
import ClientBox from "../ClientBox";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <ClientBox product={product}>
      <Paper variant="outlined" style={{ padding: "16px", margin: "16px 0" }}>
        <Stack spacing={2} alignItems="center">
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: "300px" }}
          />
          <Typography alignSelf={"flex-start"} variant="body2">
            {product.brand}
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body2">${product.price}</Typography>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          flexDirection={"row-reverse"}
          sx={{ marginTop: 2 }}
        >
          <AddToCartButton productId={product.id} />
        </Stack>
      </Paper>
    </ClientBox>
  );
};

export default ProductCard;
