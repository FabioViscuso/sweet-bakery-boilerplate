import { Link } from "react-router-dom";
// useLogin custom hook
import { useLogin } from '../utils/useLogin'

export const Navbar: React.FC = () => {
    // recall the useLogin custom hook
    const { login, loginHandler, logoutHandler } = useLogin()

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