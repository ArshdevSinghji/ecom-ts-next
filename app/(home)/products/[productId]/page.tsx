import { getDataById } from "@/app/lib/data";
import { Product } from "@/app/lib/definations";
import AddToCartButton from "@/app/ui/AddToCartButton";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ProductById = async (props: { params: { productId: number } }) => {
  const { params } = props;
  const product: Product = await getDataById(params.productId);

  return (
    <Container>
      {product ? (
        <Box>
          <Typography variant="h2">{product.title}</Typography>
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: "200px" }}
          />
          <Typography>{product.description}</Typography>
          <Typography>Price: ${product.price}</Typography>
          <Typography>Category: {product.category}</Typography>
          <AddToCartButton productId={product.id} />
        </Box>
      ) : (
        <Typography>Product not found.</Typography>
      )}
    </Container>
  );
};

export default ProductById;
