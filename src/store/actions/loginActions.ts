// Types
import { ThunkDispatch } from "redux-thunk"
import { /* ThunkAction, */ AnyAction } from "@reduxjs/toolkit"
// Actions
import { uiSliceActions } from "../slices/uiSlice"
import { loginActions } from "../slices/loginSlice"

// Sign Up logic
export const signupNewUser = (email: string, password: string): any /* ThunkAction<Promise<void>, {}, {}, AnyAction> */ => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        // function declaration
        const signupFunc = async () => {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBOQgPotFQHiJjP6qnGw9ODAGf2dVF5Z74',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: email, password: password, returnSecureToken: true })
                })

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
export const loginUser = (email: string, password: string): any /* ThunkAction<Promise<void>, {}, {}, AnyAction> */ => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        // function declaration
        const loginFunc = async () => {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBOQgPotFQHiJjP6qnGw9ODAGf2dVF5Z74',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: email, password: password, returnSecureToken: true })
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
                dispatch(loginActions.login({ email: data.email, token: data.idToken }))
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
