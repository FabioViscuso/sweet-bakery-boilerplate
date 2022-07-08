import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
            <Link to='/'><img src="" alt="nav-logo" /></Link>
            <div>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </nav>
    )
}