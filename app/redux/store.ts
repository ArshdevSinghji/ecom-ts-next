import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import productReducer from "./slice/productSlice";
import userReducer from "./slice/userSlice";
import pageReducers from "./slice/pageSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "product", "page"],
};

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  page: pageReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware({
        serializableCheck: false,
      });
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
