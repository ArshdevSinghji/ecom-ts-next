"use client";

import { useEffect, useState } from "react";
import { getData } from "@/app/lib/data";
import { type Product } from "@/app/lib/definations";
import PaginationRounded from "@/app/ui/Pagination";
import ProductCard from "@/app/ui/products/ProductCard";
import { Container, Grid, Stack } from "@mui/material";
import { useAppSelector } from "@/app/redux/hooks";

const Product = () => {
  const currentPage = useAppSelector((state) => state.page.page);

  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getData(currentPage).then(({ products, total }) => {
      setProducts(products);
      setTotal(total);
    });
  }, [currentPage]);

  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid size={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" justifyContent="flex-end" sx={{ marginTop: 4 }}>
        <PaginationRounded total={total} />
      </Stack>
    </Container>
  );
};

export default Product;
