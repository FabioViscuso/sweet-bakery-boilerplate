// Core dependencies
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Middleware
import ThunkMiddleware from "redux-thunk";
import { loggingMiddleware } from "./loggingMiddleware";

// Other dependencies
import { userLogStatus } from "./logStates";

const rootReducer = combineReducers({
    userLogStatus: userLogStatus.reducer
})

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer,
    middleware: [loggingMiddleware, ThunkMiddleware]
})