// Core dependencies
import { configureStore } from "@reduxjs/toolkit";

// Middleware
import ThunkMiddleware from "redux-thunk";
import { loggingMiddleware } from "./loggingMiddleware";

// Slices
import { userLoginStatus } from "./loginSlice";

export const store = configureStore({
    reducer: {
        login: userLoginStatus.reducer
    },
    middleware: [loggingMiddleware, ThunkMiddleware]
})
