import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
        <nav className="flex flex-row justify-between px-10 py-4 bg-slate-400 border-b-2 border-b-slate-900">
            <Link to='/'><img src="" alt="nav-logo" /></Link>
            <div className="flex flex-row gap-6">
                <button>Log In</button>
                <button>Log Out</button>
                <button>Sign Up</button>
            </div>
        </nav>
    )
}