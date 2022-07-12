// Core dependencies
import { configureStore } from "@reduxjs/toolkit";

// Middleware
import ThunkMiddleware from "redux-thunk";
import { loggingMiddleware } from "./loggingMiddleware";

// Slices
import { userLoginStatus } from "./loginSlice";
import { cartSlice } from "./cartSlice";
import { uiSlice } from "./uiSlice"

export const store = configureStore({
    reducer: {
        login: userLoginStatus.reducer,
        cartSlice: cartSlice.reducer,
        uiSlice: uiSlice.reducer,
    },
    middleware: [loggingMiddleware, ThunkMiddleware]
})

export type RootState = ReturnType<typeof store.getState>;
