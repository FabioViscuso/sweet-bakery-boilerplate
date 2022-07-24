/*
    This custom hook exposes functions and state variables
    regarding the login/signup functionality
    For thunks, refer to the store/actions/loginActions.ts file
*/

// hooks import
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// login slice import
import { loginActions } from "../store/slices/loginSlice";

// RootState type import
import { RootState } from "../store/Store";

// custom imports
import { loginUser, signupNewUser } from "../store/actions/loginActions";

export const useLogin = () => {

    // conveniently import dispatch once
    const dispatch = useDispatch()

    // refs to attach to any username+password form
    const emailInput = useRef<HTMLInputElement>(null)
    const passwordInput = useRef<HTMLInputElement>(null)

    // elements taken from login slice
    const isLogged = useSelector((state: RootState) => state.login.isUserLogged)
    const username = useSelector((state: RootState) => state.login.currentUser.email)
    const token = useSelector((state: RootState) => state.login.currentUser.token)
    // this is actually not from login slice, might be moved in the future
    const status = useSelector((state: RootState) => state.uiSlice.notification.status)

    // checks user data and dispatches the signup action
    const signUpHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const email = emailInput.current?.value
        const password = passwordInput.current?.value
        if (typeof email === 'string' && typeof password === 'string' && password.length >= 6) {
            dispatch(signupNewUser(email, password))
        }
    }

    // checks user data and dispatches the login action
    const loginHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const email = emailInput.current?.value
        const password = passwordInput.current?.value
        if (typeof email === 'string' && typeof password === 'string') {
            dispatch(loginUser(email, password))
        }
    }

    // dispatches the logout action
    const logoutHandler = () => {
        dispatch(loginActions.logout())
        localStorage.removeItem('auth')
    }

    return {
        isLogged,
        username,
        token,
        status,
        emailInput,
        passwordInput,
        loginHandler,
        logoutHandler,
        signUpHandler
    }
}
