import { createSlice } from "@reduxjs/toolkit";

interface cartState {
    items: CartItemWithStats[],
    totalQuantity: number,
    totalAmount: number
}

export type CartItem = {
    id: string,
    title: string,
    description: string,
    price: number,
}

type CartStats = {
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

            state.totalQuantity++;
            if (typeof existingItem === 'undefined') {
                // if existingItem is undefined, take the newItem 
                // and assign it 'quantity' and 'totalamount' props
                const existingItem: CartItemWithStats = { ...newItem, quantity: 1, totalAmount: newItem.price };
                state.items.push(existingItem);
            } else {
                existingItem.quantity++;
                existingItem.totalAmount += newItem.price
            }
        },
        removeFromCart(state, action: { payload: CartItem["id"] }) {
            const id = action.payload;
            const existingItem: any = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalAmount -= existingItem.price;
            }
        }
    },
})

export const cartSliceActions = cartSlice.actions;