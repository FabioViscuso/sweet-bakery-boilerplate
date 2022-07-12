import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: {
        cartIsVisible: true,
        notification: {},
    },
    reducers: {
        toggleCart(state) { state.cartIsVisible = !state.cartIsVisible },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export const uiSliceActions = uiSlice.actions;