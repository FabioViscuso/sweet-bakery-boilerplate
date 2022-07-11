import { createSlice } from "@reduxjs/toolkit";

export const toggleCartSlice = createSlice({
    name: 'uiSlice',
    initialState: {
        cartIsVisible: true,
    },
    reducers: {
        toggle(state) { state.cartIsVisible = !state.cartIsVisible },
    }
})

export const toggleCartSliceActions = toggleCartSlice.actions;