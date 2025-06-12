import { getData } from "@/app/lib/data";
import { type Product } from "@/app/lib/definations";
import PaginationRounded from "@/app/ui/Pagination";
import ProductCard from "@/app/ui/products/ProductCard";
import { Container, Grid, Stack } from "@mui/material";
import React from "react";

const Product = async () => {
  const products: Product[] = await getData();
  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product) => {
          return (
            <Grid size={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
      <Stack direction="row" justifyContent="flex-end" sx={{ marginTop: 4 }}>
        <PaginationRounded />
      </Stack>
    </Container>
  );
};

export default Product;
