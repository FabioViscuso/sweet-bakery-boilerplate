import { Link } from "react-router-dom";
// useLogin custom hook
import { useLogin } from '../../utils/useLogin'
import { CartButton } from "../shop/CartButton";

export const Navbar = () => {
    // recall the useLogin custom hook
    const { login, loginHandler, logoutHandler } = useLogin()

    return (
        <nav className="flex flex-row justify-between items-center px-10 py-4 bg-slate-300 border-b-2 border-b-slate-900">
            <Link to='/'><img src="" alt="nav-logo" /></Link>
            <div className="flex flex-row items-center gap-6">
                {!login && <button onClick={loginHandler} className="text-lg">Log In</button>}
                {login && <button onClick={logoutHandler} className="text-lg">Log Out</button>}
                {!login && <button className="text-lg">Sign Up</button>}
                {login && <Link to='/shop'><button className="text-lg">Shop</button></Link>}
                {login && <CartButton />}
            </div>
        </nav>
    )
}