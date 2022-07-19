import { ThunkDispatch } from "redux-thunk"
import { ThunkAction, AnyAction } from "@reduxjs/toolkit"
import { uiSliceActions } from "../slices/uiSlice"
import { loginActions } from "../slices/loginSlice"


export const signupNewUser = (username: string, password: string): any/* ThunkAction<Promise<void>, {}, {}, AnyAction> */ => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const fetchDB = async () => {
            const response = await fetch('https://react-cart-demo-f429b-default-rtdb.europe-west1.firebasedatabase.app/users.json')

            if (!response.ok) {
                throw new Error('Fetching data failed')
            }

            const data = await response.json() || []
            console.log('userdata', ...data)

            if (data.some((item: { username: string }) => item.username === username)) {
                dispatch(uiSliceActions.showNotification({
                    status: 'error',
                    title: `User ${data.username} already exists`,
                    message: 'Please enter a different username'
                }))
                throw new Error('Existing user')
            } else {
                const usersToUpload: { username: string, password: string }[] = [...data, { username: username, password: password }]

                fetch('https://react-cart-demo-f429b-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
                    method: 'PUT',
                    body: JSON.stringify(usersToUpload),
                })
            }
        }
        try {
            await fetchDB()

        } catch (err: any) {
            // otherwise the notification will send a negative message
            dispatch(uiSliceActions.showNotification({
                status: 'error',
                title: 'Data sending failed',
                message: err.message
            }))
            console.log('failed signup', err)
        }
    }
}

export const loginUser = (username: string, password: string): any /* ThunkAction<Promise<void>, {}, {}, AnyAction> */ => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        const fetchDB = async () => {
            const response = await fetch('https://react-cart-demo-f429b-default-rtdb.europe-west1.firebasedatabase.app/users.json')

            if (!response.ok) {
                throw new Error('Fetching data failed')
            }

            const data = await response.json()

            if (!data.some((item: { username: string, password: string }) => (item.username === username && item.password === password))) {
                dispatch(uiSliceActions.showNotification({
                    status: 'error',
                    title: `Invalid credentials`,
                    message: 'Please check again'
                }))
                throw new Error('Invalid credentials')
            } else {
                dispatch(loginActions.login())
            }
        }
        try {
            await fetchDB()
        } catch (err: any) {
            // otherwise the notification will send a negative message
            dispatch(uiSliceActions.showNotification({
                status: 'error',
                title: 'Data retrieve failed',
                message: err.message
            }))
        }
    }
}
