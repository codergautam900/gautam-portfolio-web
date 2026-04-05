import React, { useEffect, useRef, useState } from 'react'

import Logo from "../assets/Logo.png"
import { FiMenu, FiSettings } from "react-icons/fi"
import { Link } from 'react-router-dom'
import OverlayMenu from './OverlayMenu'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [forceVisible, setForceVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false)

    const lastScrollY = useRef(0);
    const timerId = useRef(null);

    useEffect(() => {
        // Check if mobile on mount and resize
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [])

    useEffect(() => {
        const homeSection = document.querySelector("#home");
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setForceVisible(true);
                } else {
                    setForceVisible(false);
                }
            }, { threshold: 0.1 }
        )
        if (homeSection) observer.observe(homeSection);
        return () => {
            if (homeSection) observer.unobserve(homeSection);
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (forceVisible) {
                setVisible(true);
                return
            }
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current) {
                setVisible(false);
            } else {
                setVisible(true);
                if (timerId.current) clearTimeout(timerId.current);
            }
            lastScrollY.current = currentScrollY;
        }
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (timerId.current) clearTimeout(timerId.current);
        }
    }, [forceVisible])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 py-3 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`} style={{background: "rgba(0, 0, 0, 0)", backdropFilter: "blur(10px)"}}>
                <div className='flex items-center w-full justify-between px-4 sm:px-8'>

                    <div className='flex items-center space-x-2'>
                        <img src={Logo} alt="logo" className='w-8 h-8' />
                        <div className='text-xl sm:text-2xl font-bold text-white hidden sm:block'>Gaurav Gautam</div>
                    </div>

                    {/* Desktop Menu - Hidden on mobile/tablet */}
                    <ul className='hidden lg:flex items-center space-x-8 font-semibold cursor-pointer text-white' >
                        <li><Link to="/" className='hover:text-gray-300 transition-colors'>Home</Link></li>
                        <li><Link to="/about" className='hover:text-gray-300 transition-colors'>About</Link></li>
                        <li><Link to="/experience" className='hover:text-gray-300 transition-colors'>Experience</Link></li>
                        <li><Link to="/skills" className='hover:text-gray-300 transition-colors'>Skills</Link></li>
                        <li><Link to="/projects" className='hover:text-gray-300 transition-colors'>Projects</Link></li>
                        <li><Link to="/contact" className='hover:text-gray-300 transition-colors'>Contact</Link></li>
                        <li>
                            <Link to="/admin" title="Admin Panel"
                                className='flex items-center justify-center w-8 h-8 rounded-lg border border-white/20 bg-white/5 hover:bg-[#0b7def]/20 hover:border-[#0b7def]/50 transition-all'>
                                <FiSettings className='w-4 h-4 text-gray-300 hover:text-[#0b7def]' />
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Hamburger Button - Hidden on desktop */}
                    <button 
                        className='lg:hidden text-white p-2 cursor-pointer'
                        onClick={toggleMenu}
                        aria-label="Open menu"
                    >
                        <FiMenu className="w-7 h-7" />
                    </button>
                </div>

            </nav>

            {/* Overlay Menu for Mobile */}
            <OverlayMenu isOpen={menuOpen} onClose={closeMenu} />
        </>
    )
}

export default Navbar

