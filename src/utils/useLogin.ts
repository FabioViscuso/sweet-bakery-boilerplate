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

export const useLogin = () => {

    const dispatch = useDispatch()

    const isLogged = useSelector((state: RootState) => state.login.isUserLogged)

    const status = useSelector((state: RootState) => state.uiSlice.notification.status)

    const loginHandler = (event: any) => {
        event.preventDefault()
        const username: string = event.target.elements.loginusername.value
        const password: string = event.target.elements.loginpassword.value
        if (typeof username === 'string' && typeof password === 'string') {
            dispatch(loginUser(username, password))
        }
    }

    const logoutHandler = () => {
        dispatch(loginActions.logout())
    }

    const signUpHandler = async (event: any) => {
        event.preventDefault()
        const username: string = event.target.elements.signupusername.value
        const password: string = event.target.elements.signuppassword.value
        if (typeof username === 'string' && typeof password === 'string') {
            await dispatch(signupNewUser(username, password))
        }
    }

    return {
        isLogged,
        status,
        loginHandler,
        logoutHandler,
        signUpHandler
    }
}
