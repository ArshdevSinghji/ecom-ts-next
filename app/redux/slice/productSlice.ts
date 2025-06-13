import { Product } from "@/app/lib/definations";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  product: Product[];
}

const initialState: ProductState = {
  product: [],
};

const productSlice = createSlice({
  name: "cartProduct",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product>) => {
      state.product.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<{ id: number }>) => {
      state.product = state.product.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { setProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
