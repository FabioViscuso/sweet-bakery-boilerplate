// import types
/*
    This file contain functions to retrieve and update cart
    These functions manage:
    - communications with DB
    - state updates
    - notifications trigger
*/

import { CartItemWithStats } from "../slices/cartSlice"
import { ThunkDispatch } from "redux-thunk"
import { ThunkAction, AnyAction } from "@reduxjs/toolkit"

// uiSliceAction import
import { uiSliceActions } from "../slices/uiSlice"
import { cartSliceActions } from "../slices/cartSlice"

export const retrieveCartData = () => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const fetchCart = async () => {
            const data = JSON.parse(localStorage.getItem('cart') as any);

            return data
        }

        try {
            const cartData = await fetchCart();
            dispatch(cartSliceActions.replaceCart({
                items: cartData || []
            }))
        } catch (err: any) {
            // otherwise the notification will send a negative message
            dispatch(uiSliceActions.pushNotificationState({
                status: 'error',
                title: 'Data retrieve failed',
                message: err.message
            }))
        }
    }
}

export const sendCartData = (cartData: CartItemWithStats[]): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        // declaring the fetch function
        const sendCart = () => {
            localStorage.setItem('cart', JSON.stringify(cartData))
        }

        try {
            sendCart();
        } catch (err: any) {
            // otherwise the notification will send a negative message
            dispatch(uiSliceActions.pushNotificationState({
                status: 'error',
                title: 'Data send failed',
                message: err.message
            }))
        }
    }
}
