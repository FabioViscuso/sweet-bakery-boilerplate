import { createSlice } from "@reduxjs/toolkit";

export interface loginState {
    isUserLogged: boolean,
    currentUser: {
        email: string,
        token: string
    }
}

const initialLoginState: loginState = {
    isUserLogged: false,
    currentUser: {
        email: '',
        token: ''
    }
}

export const userLoginStatus = createSlice({
    name: 'userLoginStatus',
    initialState: initialLoginState,
    reducers: {
        login(state, action) {
            state.isUserLogged = true;
            state.currentUser = {
                email: action.payload.email,
                token: action.payload.token
            };
        },
        logout(state) {
            state.isUserLogged = false;
            state.currentUser = {
                email: '',
                token: ''
            }
        }
    }
})

export const loginActions = userLoginStatus.actions;
