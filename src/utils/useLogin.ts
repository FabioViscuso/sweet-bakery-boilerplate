// Redux hooks import
import { useDispatch, useSelector } from "react-redux";

// Login slice import
import { loginActions } from "../store/loginSlice";

// RootState type import
import { RootState } from "../store/Store";


export const useLogin = () => {

    const login = useSelector((state: RootState) => state.login.isUserLogged)

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