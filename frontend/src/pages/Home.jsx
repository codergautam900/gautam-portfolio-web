import React, { useEffect, useMemo, useState } from 'react'
import ParticlesBackground from "../components/ParticlesBackground"
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import avator from "../assets/avator.png"


const socials = [
    { Icon: FaLinkedin, label: "LinkedIn", href: "https://linkedIn.com/in/" },
    { Icon: FaGithub, label: "Github", href: "https://github.com/gauravgautam2003" },
    { Icon: IoLogoWhatsapp, label: "WhatsApp", href: "https://whatsapp.com/channel/0029VbBj5b5GehEPNFo3nT2d" },
]

const glowVariants = {
    initial: {
        scale: 1, y: 0,
        filter: "drop-shadow(0 0 0 rgba(0, 0, 0, 0))"
    },
    hover: {
        scale: 1.02, y: -3,
        filter: "drop-shadow(0 0 8px rgba(13, 88, 204, 0.9)) drop-shadow(0 0 18px rgba(16, 185, 129, 0.8))",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15
        }
    },
    tap: {
        scale: 95,
        y: 0,
        transition: {
            duration: 0.08
        }
    }
}

const Home = () => {
    const roles = useMemo(() => ["Full Stack Developer", "MERN Stack Developer", "Software Engineer"], []);
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = roles[index];
        const timeout = setTimeout(() => {
            if (!deleting && subIndex < current.length) setSubIndex(val => val + 1);
            else if (!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1200);
            else if (deleting && subIndex > 0) setSubIndex(val => val - 1);
            else if (deleting && subIndex === 0) {
                setDeleting(false);
                setIndex(p => (p + 1) % roles.length);
            }

        }, deleting ? 40 : 60);

        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting, roles])


    return (
        <>
            <section id='home' className='w-full h-screen relative bg-black overflow-hidden'>
                <ParticlesBackground />
                <div className='absolute inset-0'>
                    <div className='absolute -top-32 -left-32 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vh] sm:h-[50vh] md:h-[40vh] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse' >

                    </div>
                    <div className='absolute bottom-0 right-0 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vh] sm:h-[50vh] md:h-[40vh] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#4b3aff] via-[#00bf8f] to-[#1cd8d2] opa opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500'>
                    </div>
                </div>

                <div className='relative z-10 h-full w-full max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2'>
                    <div className='flex flex-col justify-center h-full text-center lg:text-left relative'>
                        <div className='w-full lg:pr-24 mx-auto max-w-[48rem]'>
                            <motion.div className='mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-wide min-h-[1.6rem]'
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <span>
                                    {roles[index].substring(0, subIndex)}
                                </span>
                                <span className='inline-block w-[2px] ml-1 bg-white animate-pulse align-middle' style={{ height: "1em" }}>

                                </span>
                            </motion.div>
                            <motion.h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0b7def] via-[#f08409] to-[#39037b] drop-shadow-lg '
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                Hello, I'm
                                <br />
                                <span className='text-white  font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:whitespace-nowrap '>Gaurav Gautam</span>
                            </motion.h1>

                            <motion.p className='mt-6 text-base sm:text-md md:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0'
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                I turn complex ideas into seamless, high-impact web experiences - buiding modern, scalable and lightning-fast applications that make a difference.
                            </motion.p>

                            <motion.div className='mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            >
                                <a href="#projects" className='px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#295ef0] via-[#4488e2] to-[#ad8a63] shadow-lg hover:scale-105 transition-all'>View My Work</a>
                                <a href="/Resume.pdf" className='px-6 py-3 rounded-full font-medium text-lg text-black bg-white hover:bg-gray-300 shadow-lg hover:scale-105 transition-all'>My Resume</a>
                            </motion.div>

                            <div className='mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start'>
                                {socials.map(({ Icon, label, href }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target='_blank'
                                        aria-label={label}
                                        rel="noopener noreferrer"
                                        variants={glowVariants}
                                        initial="initial"
                                        whileHover="hover"
                                        whileTap="tab"
                                        className='text-gray-300'
                                    >
                                        <Icon />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='relative hidden lg:block'>
                        <div className='absolute top-1/2 -translate-y-1/2 pointer-events-none '
                            style={{
                                right: "10px", width: "min(22vw, 410px)", height: "min(40vw, 760px)", borderRadius: "50%", filter: "blur(38px)",
                                opacity: 0.32, background: "conic-gradient(from 0deg , #0b7def, #4488e2, #4488e2, #0b7def"
                            }} />
                        <motion.img src={avator} alt="gaurav gautam" className='absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none'
                            style={{ width: "min(45vw , 780px)", right: "-30px", maxHeight: "90vh" }}
                            initial={{ opacity: 0, y: 40, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home