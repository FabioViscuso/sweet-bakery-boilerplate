import { createSlice } from "@reduxjs/toolkit";

export interface loginState {
    isUserLogged: boolean
}

const initialLoginState : loginState = {
    isUserLogged: false
}

export const userLoginStatus = createSlice({
    name: 'userLoginStatus',
    initialState: initialLoginState,
    reducers: {
        login(state) { state.isUserLogged = true },
        logout(state) { state.isUserLogged = false }
    }
})

export const loginActions = userLoginStatus.actions;