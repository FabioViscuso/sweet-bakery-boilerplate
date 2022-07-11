// Core dependencies
import { configureStore } from "@reduxjs/toolkit";

// Middleware
import ThunkMiddleware from "redux-thunk";
import { loggingMiddleware } from "./loggingMiddleware";

// Slices
import { userLoginStatus } from "./loginSlice";
import { cartSlice } from "./cartSlice";
import { toggleCartSlice } from "./toggleCartSlice"

export const store = configureStore({
    reducer: {
        login: userLoginStatus.reducer,
        cartSlice: cartSlice.reducer,
        toggleCart: toggleCartSlice.reducer,
    },
    middleware: [loggingMiddleware, ThunkMiddleware]
})
