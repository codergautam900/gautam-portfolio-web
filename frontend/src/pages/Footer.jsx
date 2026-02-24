import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"
import { FiArrowUp } from "react-icons/fi"
import ParticlesBackground from "../components/ParticlesBackground"

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const socialLinks = [
        { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/gauravgautam", color: "#0077B5" },
        { icon: <FaGithub />, label: "GitHub", href: "https://github.com/gauravgautam2003", color: "#ffffff" },
        { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://whatsapp.com/channel/0029VbBj5b5GehEPNFo3nT2d", color: "#25D366" }
    ]

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    }

    return (
        <footer className='w-full bg-black relative overflow-hidden'>
          <ParticlesBackground />
            {/* Background Gradient */}
            <div className='absolute inset-0 pointer-events-none'>
                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#0b7def]/30 to-transparent' />
                <div className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00bf8f]/30 to-transparent' />
            </div>
            <div className='absolute inset-0'>
                <div className='absolute top-12 left-32 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vh] sm:h-[50vh] md:h-[40vh] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse' />
                <div className='absolute bottom-0 right-0 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vh] sm:h-[50vh] md:h-[40vh] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#4b3aff] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500' />
            </div>

            <div className='relative z-10 max-w-6xl mx-auto px-4 py-16'>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'
                >
                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className='lg:col-span-2'>
                        <motion.h3 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className='text-3xl font-bold text-white mb-4'
                        >
                            Gaurav <span className='text-[#0b7def]'>Gautam</span>
                        </motion.h3>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className='text-gray-400 mb-6 max-w-md'
                        >
                            A passionate MERN Stack Developer dedicated to building modern, scalable, and user-friendly web applications. Let's create something amazing together.
                        </motion.p>
                        
                        {/* Social Links */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                            className='flex gap-4'
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-white/30 transition-all'
                                    style={{ color: social.color }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <motion.h4 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className='text-lg font-bold text-white mb-4'
                        >
                            Quick Links
                        </motion.h4>
                        <ul className='space-y-3'>
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <a 
                                        href={link.href}
                                        className='text-gray-400 hover:text-[#0b7def] transition-colors flex items-center gap-2 group'
                                    >
                                        <span className='w-1.5 h-1.5 rounded-full bg-[#0b7def] opacity-0 group-hover:opacity-100 transition-opacity' />
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <motion.h4 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className='text-lg font-bold text-white mb-4'
                        >
                            Contact Info
                        </motion.h4>
                        <ul className='space-y-3'>
                            <motion.li
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <a href="mailto:gauravgautam2003@gmail.com" className='text-gray-400 hover:text-[#0b7def] transition-colors'>
                                    gauravgautam2003@gmail.com
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.35, duration: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <a href="tel:+919876543210" className='text-gray-400 hover:text-[#0b7def] transition-colors'>
                                    +91 9557799584
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <span className='text-gray-400'>
                                    India
                                </span>
                            </motion.li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <motion.div 
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className='w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12' 
                />

                {/* Bottom Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                    className='flex flex-col md:flex-row justify-between items-center gap-4'
                >
                    <p className='text-gray-500 text-sm'>
                        © {new Date().getFullYear()} Gaurav Gautam. All rights reserved.
                    </p>
                    
                    <div className='flex items-center gap-4'>
                        <span className='text-gray-500 text-sm'>
                            Made with <span className='text-red-500'>❤</span> using MERN Stack
                        </span>
                    </div>
                </motion.div>

                {/* Scroll to Top Button */}
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className='fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-[#0b7def] to-[#00bf8f] text-white flex items-center justify-center shadow-lg shadow-[#0b7def]/30 z-50'
                >
                    <FiArrowUp size={20} />
                </motion.button>
            </div>
        </footer>
    )
}

export default Footer
