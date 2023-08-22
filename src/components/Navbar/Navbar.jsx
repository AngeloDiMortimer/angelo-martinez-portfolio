import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar sticky top-0 shadow-md mx-auto p-6 bg-red-500 text-slate-50 z-40">
                <div className="flex items-center justify-between">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <div className="logo">
                            <h1 className="text-2xl md:text-3xl">Angelo Martínez</h1>
                        </div>
                    </Link>

                    <div className="hidden md:flex space-x-6 mr-8 text-xl">
                            <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</ Link>
                            <Link to="about" onClick={() => window.scrollTo(0, 0)}>About</ Link>
                            <Link to="experience" onClick={() => window.scrollTo(0, 0)}>Experience</ Link>
                        </div>

                </div>

            </nav>
        </>
    )
}

export default Navbar;