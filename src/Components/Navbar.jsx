import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsOpen(false);
    };

    return (
        <nav className=" p-3 text-white fixed w-full z-10">
            <div className="flex justify-between items-center">
                <div className="font-bold text-lg">SIDDESH</div>
                <div className="block md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
                <div className={`flex-grow md:flex md:items-center md:justify-end ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <div
                        className={`p-2 m-2 md:mr-9 w-full md:w-auto flex justify-center items-center font-bold font-serif ${activeLink === 'Home' ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-400 hover:border-b-2 border-blue-400'}`}
                    >
                        <Link to="/" onClick={() => handleLinkClick('Home')}>Home</Link>
                    </div>
                    <div
                        className={`p-2 m-2 md:mr-9 w-full md:w-auto flex justify-center items-center font-bold font-serif ${activeLink === 'About' ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-400 hover:border-b-2 border-blue-400'}`}
                    >
                        <Link to="/about" onClick={() => handleLinkClick('About')}>About</Link>
                    </div>
                    <div
                        className={`p-2 m-2 md:mr-9 w-full md:w-auto flex justify-center items-center font-bold font-serif ${activeLink === 'Skills' ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-400 hover:border-b-2 border-blue-400'}`}
                    >
                        <Link to="/skill" onClick={() => handleLinkClick('Skills')}>Skills</Link>
                    </div>
                    <div
                        className={`p-2 m-2 md:mr-9 w-full md:w-auto flex justify-center items-center font-bold font-serif ${activeLink === 'Achivement' ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-400 hover:border-b-2 border-blue-400'}`}
                    >
                        <Link to="/achievement" onClick={() => handleLinkClick('Achivement')}>Achievement</Link>
                    </div>
                    <div
                        className={`p-2 m-2 md:mr-9 w-full md:w-auto flex justify-center items-center font-bold font-serif ${activeLink === 'Contact' ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-400 hover:border-b-2 border-blue-400'}`}
                    >
                        <Link to="/contact" onClick={() => handleLinkClick('Contact')}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
