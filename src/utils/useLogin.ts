/*
    This custom hook exposes functions and state variables
    regarding the login/signup functionality
    For thunks, refer to the store/actions/loginActions.ts file
*/


// Redux hooks import
import { useDispatch, useSelector } from "react-redux";

// Login slice import
import { loginActions } from "../store/slices/loginSlice";

// RootState type import
import { RootState } from "../store/Store";

// Custom imports
import { loginUser, signupNewUser } from "../store/actions/loginActions";
import React, { useRef } from "react";

export const useLogin = () => {

    const dispatch = useDispatch()

    const emailInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)

    const isLogged = useSelector((state: RootState) => state.login.isUserLogged)

    const username = useSelector((state: RootState) => state.login.currentUser.email)

    const status = useSelector((state: RootState) => state.uiSlice.notification.status)

    const loginHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const email = emailInput.current?.value
        const password = passwordInput.current?.value
        if (typeof email === 'string' && typeof password === 'string') {
            dispatch(loginUser(email, password))
        }
    }

    const logoutHandler = () => {
        dispatch(loginActions.logout())
    }

    const signUpHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        const email = emailInput.current?.value
        const password = passwordInput.current?.value
        if (typeof email === 'string' && typeof password === 'string') {
            await dispatch(signupNewUser(email, password))
        }
    }

    return {
        isLogged,
        username,
        status,
        emailInput,
        passwordInput,
        loginHandler,
        logoutHandler,
        signUpHandler
    }
}
