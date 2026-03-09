import React from 'react'
import {motion ,AnimatePresence} from "framer-motion"
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom';

const OverlayMenu = ({isOpen, onClose}) => {

    const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
    const origin = isMobile ? "95% 8%" : "50% 8%";

    const menuItems = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/experience", label: "Experience" },
        { to: "/skills", label: "Skills" },
        { to: "/projects/:id", label: "Project" },
        { to: "/contact", label: "Contact" },
    ];

    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + i * 0.1,
                duration: 0.4,
            }
        })
    };

  return (
    <AnimatePresence>
        {isOpen && (
            <motion.div className='fixed inset-0 flex items-center justify-center z-50'
            initial={{clipPath: `circle(0% at ${origin})`}}
            animate={{clipPath: `circle(1500% at ${origin})`}}
            exit={{clipPath: `circle(0% at ${origin})`}}
            transition={{duration: 0.7, ease: [0.4, 0, 0.2, 1]}}
            style={{backgroundColor : "rgba(0,0,0,0.95)"}} >
                <button className='absolute top-6 right-6 font-extrabold text-2xl cursor-pointer text-white hover:text-gray-400 transition-colors duration-300' onClick={onClose}>
                    <FiX />
                </button>
                <ul className='flex flex-col items-center space-y-8' >
                    {menuItems.map((item, i) => (
                        <motion.li 
                            key={item.to}
                            custom={i}
                            variants={linkVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <Link 
                                to={item.to} 
                                onClick={onClose}
                                className='text-xl font-bold text-white hover:text-amber-500 transition-colors duration-300'
                            >
                                {item.label}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default OverlayMenu

