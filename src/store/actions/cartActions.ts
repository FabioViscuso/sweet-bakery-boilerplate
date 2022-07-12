// import types
import { CartItemWithStats } from "../slices/cartSlice"
import { ThunkDispatch } from "redux-thunk"
import { ThunkAction, AnyAction } from "@reduxjs/toolkit"

// uiSliceAction import
import { uiSliceActions } from "../slices/uiSlice"
import { cartSliceActions } from "../slices/cartSlice"

export const retrieveCartData = () => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const fetchDB = async () => {
            const response = await fetch('https://react-cart-demo-f429b-default-rtdb.europe-west1.firebasedatabase.app/cart.json');

            if (!response.ok) {
                throw new Error('Fetching data failed')
            }

            const data = await response.json();
            console.log(data)
            return data
        }

        try {
            const cartData = await fetchDB();
            dispatch(cartSliceActions.replaceCart({
                items: cartData.items || []
            }))
        } catch (err: any) {
            // otherwise the notification will send a negative message
            dispatch(uiSliceActions.showNotification({
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
        const sendToDB = async (): Promise<void> => {
            const response = await fetch('https://react-cart-demo-f429b-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
                { method: 'PUT', body: JSON.stringify(cartData) })
            console.log(response)

            if (!response.ok) {
                throw new Error('Data sync failed, refresh and retry')
            }
        }

        try {
            // call the fetch function and wait for results
            await sendToDB();
            // if the fetch response is "ok" the notification will be positive
            dispatch(uiSliceActions.showNotification({
                status: 'success',
                title: 'Data sent',
                message: 'Data sent successfully'
            }))
        } catch (err: any) {
            // otherwise the notification will send a negative message
            dispatch(uiSliceActions.showNotification({
                status: 'error',
                title: 'Data send failed',
                message: err.message
            }))
        } finally {
            dispatch(uiSliceActions.showNotification({
                status: 'pending',
                title: 'Sending data',
                message: 'Cart data is being sent to server'
            }))
        }
    }
}