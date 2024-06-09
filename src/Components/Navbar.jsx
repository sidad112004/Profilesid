import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsOpen(false);
    };

    return (
        <nav className="p-3 text-white">
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
                        <a href="#" onClick={() => handleLinkClick('Home')}>Home</a>
                    </div>
                    <div
                        className={`p-2 m-2 md:mr-9 w-full md:w-auto flex justify-center items-center font-bold font-serif ${activeLink === 'About' ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-400 hover:border-b-2 border-blue-400'}`}
                    >
                        <a href="#" onClick={() => handleLinkClick('About')}>About</a>
                    </div>
                    <div
                        className={`p-2 m-2 md:mr-9 w-full md:w-auto flex justify-center items-center font-bold font-serif ${activeLink === 'Skills' ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-400 hover:border-b-2 border-blue-400'}`}
                    >
                        <a href="#" onClick={() => handleLinkClick('Skills')}>Skills</a>
                    </div>
                    <div
                        className={`p-2 m-2 md:mr-9 w-full md:w-auto flex justify-center items-center font-bold font-serif ${activeLink === 'Achievement' ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-400 hover:border-b-2 border-blue-400'}`}
                    >
                        <a href="#" onClick={() => handleLinkClick('Achievement')}>Achievement</a>
                    </div>
                    <div
                        className={`p-2 m-2 md:mr-9 w-full md:w-auto flex justify-center items-center font-bold font-serif ${activeLink === 'Contact' ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-blue-400 hover:border-b-2 border-blue-400'}`}
                    >
                        <a href="#" onClick={() => handleLinkClick('Contact')}>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
