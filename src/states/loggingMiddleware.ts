// Import middleware type definition
import { Middleware } from "@reduxjs/toolkit";

export const loggingMiddleware: Middleware = store => next => action => {

    const snapshot = next(action);

    console.log(store.getState())

    return snapshot
}
