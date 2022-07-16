import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: {
        cartIsVisible: true,
        loginModalIsVisible: false,
        signupModalIsVisible: false,
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
        },
        showLoginModal(state) { state.loginModalIsVisible = true },
        hideLoginModal(state) { state.loginModalIsVisible = false },
        showSignupModal(state) { state.signupModalIsVisible = true },
        hideSignupModal(state) { state.signupModalIsVisible = false },
    }
})

export const uiSliceActions = uiSlice.actions;
