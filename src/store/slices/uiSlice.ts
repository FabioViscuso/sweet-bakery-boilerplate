import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: {
        cartIsVisible: false,
        loginModalIsVisible: false,
        signupModalIsVisible: false,
        notification: {
            visible: false,
            status: '',
            title: '',
            message: ''
        },
    },
    reducers: {
        toggleCart(state) { state.cartIsVisible = !state.cartIsVisible },
        pushNotificationState(state, action) {
            state.notification = {
                visible: true,
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        },
        resetNotificationState(state) {
            state.notification = {
                visible: false,
                status: '',
                title: '',
                message: ''
            }
        },
        hideNotification(state) { state.notification = { ...state.notification, visible: false } },
        showLoginModal(state) { state.loginModalIsVisible = true },
        hideLoginModal(state) { state.loginModalIsVisible = false },
        showSignupModal(state) { state.signupModalIsVisible = true },
        hideSignupModal(state) { state.signupModalIsVisible = false },
    }
})

export const uiSliceActions = uiSlice.actions;
