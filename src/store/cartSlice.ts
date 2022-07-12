import { AnyAction, createSlice, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

// we need the uiSlice for the notification functionality here
import { uiSliceActions } from "./uiSlice"
interface cartState {
    items: CartItemWithStats[],
    totalQuantity: number,
    totalAmount: number
}

export type CartItem = {
    id: string,
    imgUrl: string,
    title: string,
    description: string,
    price: number,
}

export type CartStats = {
    quantity: number,
    totalAmount: number
}

export type CartItemWithStats = CartItem & CartStats;

const initialState: cartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: initialState,
    reducers: {
        addToCart(state, action: { type: string, payload: CartItem }) {
            // retrieve the cart item from the payload
            const newItem = action.payload;

            // use .find() to retrieve, if existing, the cart item
            const existingItem = state.items.find((item) => item.id === newItem.id);

            if (typeof existingItem === 'undefined') {
                // if existingItem is undefined, take the newItem 
                // and assign it 'quantity' and 'totalamount' props
                const existingItem: CartItemWithStats = { ...newItem, quantity: 1, totalAmount: newItem.price };
                state.items.push(existingItem);
            } else {
                existingItem.quantity++;
                existingItem.totalAmount += newItem.price
            }
            state.totalQuantity++;
        },
        removeFromCart(state, action: { payload: CartItem["id"] }) {
            // extract the ID
            const id = action.payload;

            // remove funct is only available in places where "existingItem" exists
            // so no need to check if the element is undefined
            const existingItem: any = state.items.find((item) => item.id === id);

            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalAmount -= existingItem.price;
            }
            state.totalQuantity--;
        }
    },
})

export const sendCartData = (cartData: CartItemWithStats[]): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        // declaring the fetch function
        const fetchDB = async (): Promise<void> => {
            const response = await fetch('https://react-cart-demo-f429b-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
                { method: 'PUT', body: JSON.stringify(cartData) })

            if (!response.ok) {
                throw new Error('Data sync failed, refresh and retry')
            }
        }

        try {
            // call the fetch function and wait for results
            await fetchDB();
            // if the fetch response is "ok" the notification will be positive
            dispatch(uiSliceActions.showNotification({
                status: 'success',
                title: 'Data sent',
                message: 'Cart data has been successfully sent'
            }))
        } catch (err: any) {
            // otherwise the notification will send a negative message
            dispatch(uiSliceActions.showNotification({
                status: 'error',
                title: 'Data sending failed',
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

export const cartSliceActions = cartSlice.actions;