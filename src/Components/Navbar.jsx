import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="sticky top-0 z-50">
            <div className="navbar bg-base-100 font-bold shadow-lg">
                {/* Mobile Menu */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {[
                                { path: "/", label: "Home" },
                                { path: "/about", label: "About" },
                                { path: "/skill", label: "Skills" },
                                { path: "/achivement", label: "Achievements" },
                                { path: "/Project", label: "Projects" },
                                { path: "/contact", label: "Contact" }
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path} className="hover:bg-primary/10 rounded-lg">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">
                        SIDDESH
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {[
                            { path: "/", label: "Home" },
                            { path: "/about", label: "About" },
                            { path: "/skill", label: "Skills" },
                            { path: "/achivement", label: "Achievements" },
                            { path: "/Project", label: "Projects" },
                            { path: "/contact", label: "Contact" }
                        ].map((item, index) => (
                            <li key={index}>
                                <Link 
                                    to={item.path} 
                                    className="hover:bg-primary/10 rounded-lg"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Navbar End (Optional) */}
                <div className="navbar-end">
                    {/* Add any additional elements here if needed */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;