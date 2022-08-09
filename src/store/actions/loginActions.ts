/*
    This file includes the login and signup functions,
    each managing:
    - fetching api endpoints
    - state updates
    - persistent logging
    - notification triggers
*/

// Types
import { ThunkDispatch } from "redux-thunk"
import { /* ThunkAction, */ AnyAction } from "@reduxjs/toolkit"
// Actions
import { uiSliceActions } from "../slices/uiSlice"
import { loginActions } from "../slices/loginSlice"

// Sign Up logic
export const signupNewUser = (username: string, email: string, password: string): any /* ThunkAction<Promise<void>, {}, {}, AnyAction> */ => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        // function declaration
        const signupFunc = async () => {
            const response = await fetch(`http://localhost:8080/api/auth/signup`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username: username, email: email, password: password, roles: ['user'] })
                })

            console.log(username, password, email)
            // in case of networking issue, throw an error
            if (!response.ok) {
                throw new Error('Signup failed, please try again')
            } else {
                // dispatch success notification
                dispatch(uiSliceActions.pushNotificationState({
                    visible: true,
                    status: 'success',
                    title: `User with email ${email} registered`,
                    message: 'Please log in to start shopping!'
                }))
            }
        }

        try {
            await signupFunc()
        } catch (err: any) {
            // in case of errors, a notification will be dispatched
            dispatch(uiSliceActions.pushNotificationState({
                visible: true,
                status: 'error',
                title: 'Ops!',
                message: err.message
            }))
        }
    }
}

// Login logic
export const loginUser = (username: string, password: string): any /* ThunkAction<Promise<void>, {}, {}, AnyAction> */ => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        // function declaration
        const loginFunc = async () => {
            const response = await fetch(`http://localhost:8080/api/auth/signin`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username: username, password: password })
                })

            // in case of networking issue, throw an error
            if (!response.ok) {
                throw new Error('Fetching data failed')
            } else {
                const data = await response.json()
                // dispatch success notification
                dispatch(uiSliceActions.pushNotificationState({
                    visible: true,
                    status: 'success',
                    title: `Hello!`,
                    message: 'You logged in'
                }))
                // set the login state to true
                dispatch(loginActions.login({ username: data.username, token: data.accessToken }))
                // store the data in localStorage for persistent login feat
                localStorage.setItem('auth', JSON.stringify({ username: data.username, token: data.accessToken }))
            }
        }

        // function call
        try {
            await loginFunc()
        } catch (err: any) {
            // otherwise the notification will send a negative message
            dispatch(uiSliceActions.pushNotificationState({
                visible: true,
                status: 'error',
                title: 'Ops!',
                message: err.message
            }))
        }
    }
}
