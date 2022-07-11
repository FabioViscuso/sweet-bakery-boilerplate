// Redux hooks import
import { useDispatch, useSelector } from "react-redux";

// Login slice import
import { loginActions, loginState } from "../store/loginSlice";


export const useLogin = () => {

    const login = useSelector((state: { login: loginState }) => state.login.isUserLogged)

    const dispatch = useDispatch()

    const loginHandler = () => {
        dispatch(loginActions.login())
    }

    const logoutHandler = () => {
        dispatch(loginActions.logout())
    }

    return {
        login,
        loginHandler,
        logoutHandler
    }
}