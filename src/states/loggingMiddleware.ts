import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "./Store";

export const loggingMiddleware:  Middleware<
{}, // Most middleware do not modify the dispatch return value
RootState
> = store => next => action => {

    const snapshot = next(action);

    console.log(store.getState())

    return snapshot
}
