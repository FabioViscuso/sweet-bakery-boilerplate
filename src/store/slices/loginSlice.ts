import { createSlice } from "@reduxjs/toolkit";

export interface loginState {
    isUserLogged: boolean,
    currentUser: {
        username: string,
        token: string
    }
}

const initialLoginState: loginState = {
    isUserLogged: false,
    currentUser: {
        username: '',
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
                username: action.payload.username,
                token: action.payload.token
            };
        },
        logout(state) {
            state.isUserLogged = false;
            state.currentUser = {
                username: '',
                token: ''
            }
        }
    }
})

export const loginActions = userLoginStatus.actions;
