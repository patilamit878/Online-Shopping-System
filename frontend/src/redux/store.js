import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./features/cartSlice";
import { userSlice } from "./features/userSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  },
});
