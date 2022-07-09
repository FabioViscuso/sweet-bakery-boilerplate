import { createSlice } from "@reduxjs/toolkit";

const initialLoginState : loginState = {
    isUserLogged: false
}

export interface loginState {
    isUserLogged: boolean
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