import { Product } from "@/app/lib/definations";
import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  product: Product[];
}

const initialState: ProductState = {
  product: [] as Product[],
};

const productSlice = createSlice({
  name: "cartProduct",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
