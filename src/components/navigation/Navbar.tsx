import { Link } from "react-router-dom";

// useLogin custom hook
import { useLogin } from '../../utils/useLogin'
import { useModals } from "../../utils/useModals";
import { CartButton } from "../shop/CartButton";

// Import modals
import { Login } from "../modals/Login";
import { SignUp } from "../modals/SignUp";

export const Navbar = () => {
    // recall the useLogin custom hook
    const { login, logoutHandler } = useLogin()
    const { showLogin, showSignup, openLoginHandler, openSignupHandler } = useModals()

    return (
        <nav className="flex flex-row justify-between items-center px-10 py-4">
            <Link to='/'><img className="w-20 h-20 rounded-full border-2 border-red-200" src={process.env.PUBLIC_URL + 'images/bakery-logo.png'} alt="nav-logo" /></Link>
            <div className="flex flex-row items-center gap-6">
                {!login && <button onClick={openLoginHandler} className="font-indieflower text-2xl">Log In</button>}
                {login && <button onClick={logoutHandler} className="font-indieflower text-2xl">Log Out</button>}
                {!login && <button onClick={openSignupHandler} className="font-indieflower text-2xl">Sign Up</button>}
                {login && <Link to='/shop'><button className="font-indieflower text-2xl">Shop</button></Link>}
                {login && <CartButton />}
            </div>
            {showLogin && <Login />}
            {showSignup && <SignUp />}
        </nav>
    )
}
