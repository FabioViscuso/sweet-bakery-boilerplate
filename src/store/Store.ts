// Core dependencies
import { configureStore } from "@reduxjs/toolkit";

// Middleware
import ThunkMiddleware from "redux-thunk";
/* import { loggingMiddleware } from "./middleware/loggingMiddleware"; */

// Slices
import { userLoginStatus } from "./slices/loginSlice";
import { cartSlice } from "./slices/cartSlice";
import { uiSlice } from "./slices/uiSlice"

export const store = configureStore({
    reducer: {
        login: userLoginStatus.reducer,
        cartSlice: cartSlice.reducer,
        uiSlice: uiSlice.reducer,
    },
    middleware: [/* loggingMiddleware, */ ThunkMiddleware]
})

// This type export is useful for autocomplete on TypeScript
export type RootState = ReturnType<typeof store.getState>;
