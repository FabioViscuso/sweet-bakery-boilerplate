import { Link } from "react-router-dom";
// useLogin custom hook
import { useLogin } from '../utils/useLogin'

export const Navbar: React.FC = () => {
    // recall the useLogin custom hook
    const { login, loginHandler, logoutHandler } = useLogin()

    return (
        <nav className="flex flex-row justify-between px-10 py-4 bg-slate-300 border-b-2 border-b-slate-900">
            <Link to='/'><img src="" alt="nav-logo" /></Link>
            <div className="flex flex-row gap-6">
                {!login && <button onClick={loginHandler} className="text-lg">Log In</button>}
                {login && <button onClick={logoutHandler} className="text-lg">Log Out</button>}
                {!login && <button className="text-lg">Sign Up</button>}
                {login && <Link to='/dashboard'><button className="text-lg">Dashboard</button></Link>}
            </div>
        </nav>
    )
}