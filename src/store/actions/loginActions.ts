// Types
import { ThunkDispatch } from "redux-thunk"
import { /* ThunkAction, */ AnyAction } from "@reduxjs/toolkit"
// Actions
import { uiSliceActions } from "../slices/uiSlice"
import { loginActions } from "../slices/loginSlice"

// Sign Up logic
export const signupNewUser = (username: string, password: string): any /* ThunkAction<Promise<void>, {}, {}, AnyAction> */ => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        // function declaration
        const fetchDB = async () => {
            const response = await fetch('https://react-cart-demo-f429b-default-rtdb.europe-west1.firebasedatabase.app/users.json')

            // in case of networking issue, throw an error
            if (!response.ok) {
                throw new Error('Fetching data failed')
            }

            const data = await response.json() || []
            console.log('userdata', ...data)

            if (data.some((item: { username: string }) => item.username === username)) {
                // if the input username already exists, show notification and throw error
                dispatch(uiSliceActions.pushNotificationState({
                    visible: true,
                    status: 'error',
                    title: `User ${data.username} already exists`,
                    message: 'Please enter a different username'
                }))
                throw new Error('Please enter a different username')
            } else {
                const usersToUpload: { username: string, password: string }[] = [...data, { username: username, password: password }]

                const request = await fetch('https://react-cart-demo-f429b-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
                    method: 'PUT',
                    body: JSON.stringify(usersToUpload),
                })

                // in case of networking issue, throw an error
                if (!request.ok) {
                    throw new Error('Something went wrong while sending data. \nTry again')
                }

                // dispatch success notification
                dispatch(uiSliceActions.pushNotificationState({
                    visible: true,
                    status: 'success',
                    title: `User ${username} registered`,
                    message: 'Please log in to start shopping!'
                }))
            }
        }
        try {
            await fetchDB()
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
        const fetchDB = async () => {
            const response = await fetch('https://react-cart-demo-f429b-default-rtdb.europe-west1.firebasedatabase.app/users.json')

            // in case of networking issue, throw an error
            if (!response.ok) {
                throw new Error('Fetching data failed')
            }

            // we expect an array of users
            const data: [] = await response.json()

            if (!data.some((item: { username: string, password: string }) => (item.username === username && item.password === password))) {
                // this error will feed the notification with the message below
                throw new Error('Invalid credentials, please try again')
            } else {
                // dispatch success notification
                dispatch(uiSliceActions.pushNotificationState({
                    visible: true,
                    status: 'success',
                    title: `Hello!`,
                    message: 'You logged in'
                }))
                // set the login state to true
                dispatch(loginActions.login())
            }
        }

        // function call
        try {
            await fetchDB()
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
