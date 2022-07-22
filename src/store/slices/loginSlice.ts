import { createSlice } from "@reduxjs/toolkit";

export interface loginState {
    isUserLogged: boolean,
    currentUser: {
        username: string
    }
}

const initialLoginState: loginState = {
    isUserLogged: false,
    currentUser: {
        username: ''
    }
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
