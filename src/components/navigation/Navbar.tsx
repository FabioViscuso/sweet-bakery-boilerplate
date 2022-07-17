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
    const { isLogged, logoutHandler } = useLogin()
    const { showLogin, showSignup, openLoginHandler, openSignupHandler } = useModals()

    return (
        <nav className="flex flex-row justify-between items-center px-2 md:px-10 h-24 sticky top-0 left-0 right-0 z-100 bg-[#e2c3c8]">
            <Link to='/'><img className="w-20 h-20 rounded-full border-2 border-red-200" src={process.env.PUBLIC_URL + 'images/bakery-logo.png'} alt="nav-logo" /></Link>
            <div className="flex flex-row items-center gap-6">
                {!isLogged && <button onClick={openLoginHandler} className="font-indieflower text-2xl">Log In</button>}
                {isLogged && <button onClick={logoutHandler} className="font-indieflower text-2xl">Log Out</button>}
                {!isLogged && <button onClick={openSignupHandler} className="font-indieflower text-2xl">Sign Up</button>}
                {isLogged && <Link to='/shop'><button className="font-indieflower text-2xl">Shop</button></Link>}
                {isLogged && <CartButton />}
            </div>
            {showLogin && <Login />}
            {showSignup && <SignUp />}
        </nav>
    )
}
