import { getDataById } from "@/app/lib/data";
import { Product } from "@/app/lib/definations";
import AddToCartButton from "@/app/ui/AddToCartButton";
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Divider,
} from "@mui/material";
import React from "react";

const ProductById = async (props: { params: { productId: number } }) => {
  const { params } = props;
  const product: Product = await getDataById(params.productId);

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 6,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {product ? (
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            maxWidth: 700,
            mx: "auto",
            boxShadow: 3,
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={4}
            alignItems="center"
          >
            <Box
              component="img"
              src={product.thumbnail}
              alt={product.title}
              sx={{
                width: { xs: "100%", sm: 260 },
                height: 260,
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 2,
                mb: { xs: 2, sm: 0 },
              }}
            />
            <Stack spacing={2} flex={1} width="100%">
              <Typography variant="h4" fontWeight={700}>
                {product.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {product.brand}
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body1" color="text.secondary">
                {product.description}
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h5" color="success.main">
                  ${product.price}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="flex-end" sx={{ mt: 2 }}>
                <AddToCartButton productId={product.id} />
              </Stack>
            </Stack>
          </Stack>
        </Paper>
      ) : (
        <Typography align="center" variant="h6" color="error">
          Product not found.
        </Typography>
      )}
    </Container>
  );
};

export default ProductById;
