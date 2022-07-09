import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginActions, loginState } from "../states/logStates";

export const Navbar: React.FC = () => {
    const login = useSelector((state: { login: loginState }) => state.login.isUserLogged)
    const dispatch = useDispatch()

    const loginHandler = () => {
        dispatch(loginActions.login())
    }

    const logoutHandler = () => {
        dispatch(loginActions.logout())
    }

    return (
        <nav className="flex flex-row justify-between px-10 py-4 bg-slate-400 border-b-2 border-b-slate-900">
            <Link to='/'><img src="" alt="nav-logo" /></Link>
            <div className="flex flex-row gap-6">
                {!login && <button onClick={loginHandler}>Log In</button>}
                {login && <button onClick={logoutHandler}>Log Out</button>}
                {!login && <button>Sign Up</button>}
            </div>
        </nav>
    )
}