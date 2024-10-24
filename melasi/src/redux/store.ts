import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice"
import productReducer from "../features/product/productSlice"
import cartReducer from "../features/cart/cartSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        product: productReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
