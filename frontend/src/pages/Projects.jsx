import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Astra from "../assets/Astra.png"
import photo1 from "../assets/photo1.JPG"
import img1 from "../assets/img1.JPG"
import m1 from "../assets/m1.PNG"
import w1 from "../assets/w1.PNG"
import img2 from "../assets/img2.JPG"

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    
    const filterButtons = ["All", "Frontend", "Backend", "Full Stack", "Mobile"]

    const projects = [
        {
            id: 1,
            title: "Astra",
            description: "A modern web application built with cutting-edge technologies featuring real-time data visualization and seamless user experience.",
            image: Astra,
            category: "Full Stack",
            techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
            github: "https://github.com",
            liveDemo: "#"
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "Personal portfolio showcasing skills, projects, and experience with smooth animations and responsive design.",
            image: photo1,
            category: "Frontend",
            techStack: ["React", "Framer Motion", "CSS3"],
            github: "https://github.com",
            liveDemo: "#"
        },
        {
            id: 3,
            title: "E-commerce Platform",
            description: "Full-featured online store with shopping cart, payment integration, admin dashboard, and inventory management.",
            image: img1,
            category: "Full Stack",
            techStack: ["Next.js", "Stripe", "PostgreSQL", "Redux"],
            github: "https://github.com",
            liveDemo: "#"
        },
        {
            id: 4,
            title: "Dashboard Analytics",
            description: "Admin dashboard with interactive charts, data visualization, user management, and real-time updates.",
            image: m1,
            category: "Frontend",
            techStack: ["React", "Chart.js", "Tailwind", "Firebase"],
            github: "https://github.com",
            liveDemo: "#"
        },
        {
            id: 5,
            title: "Mobile Fitness App",
            description: "Cross-platform mobile application for tracking workouts, nutrition, and fitness goals with social features.",
            image: w1,
            category: "Mobile",
            techStack: ["React Native", "Expo", "Node.js"],
            github:"https://github.com",
            liveDemo: "#"
        },
        {
            id: 6,
            title: "REST API Service",
            description: "Scalable backend API with authentication, database integration, caching, and comprehensive documentation.",
            image: img2,
            category: "Backend",
            techStack: ["Node.js", "Express", "MongoDB", "Redis"],
            github: "https://github.com",
            liveDemo: "#"
        }
    ]

    const filteredProjects = activeFilter === "All" 
        ? projects 
        : projects.filter(project => project.category === activeFilter)

    // Reset current index when filter changes
    useEffect(() => {
        setCurrentIndex(0)
        setDirection(0)
    }, [activeFilter])

    const goToPrevious = () => {
        if (filteredProjects.length > 1) {
            setDirection(-1)
            setCurrentIndex(prev => prev === 0 ? filteredProjects.length - 1 : prev - 1)
        }
    }

    const goToNext = () => {
        if (filteredProjects.length > 1) {
            setDirection(1)
            setCurrentIndex(prev => prev === filteredProjects.length - 1 ? 0 : prev + 1)
        }
    }

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }

    // Animation variants
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8
        })
    }

    const lightGlowVariants = {
        initial: { opacity: 0, scale: 0.5 },
        animate: { 
            opacity: 1, 
            scale: 1,
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    }

    return (
        <section id='projects' className='w-full min-h-screen bg-black relative overflow-hidden py-20'>
            {/* Background Effects */}
            <div className='absolute inset-0 pointer-events-none'>
                <div className='absolute top-40 -right-32 w-[50vw] h-[50vh] rounded-full bg-gradient-to-r from-[#4b3aff] via-[#00bf8f] to-[#1cd8d2] opacity-15 blur-[120px]' />
                <div className='absolute bottom-40 -left-32 w-[50vw] h-[50vh] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px]' />
            </div>

            <div className='relative z-10 max-w-6xl mx-auto px-4'>
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2'>
                        My <span className='bg-clip-text text-white'>Projects</span>
                    </h2>
                    <div className='w-30 h-1 bg-gradient-to-r from-[#0b7def] to-[#00bf8f] mx-auto rounded-full' />
                    <p className='text-gray-400 mt-4 max-w-2xl mx-auto'>
                        Showcasing my work and side projects
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className='flex flex-wrap justify-center gap-4 mb-12'
                >
                    {filterButtons.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                                activeFilter === category 
                                    ? 'bg-gradient-to-r from-[#0b7def] to-[#00bf8f] border-transparent text-white' 
                                    : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/30'
                            }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Single Project Carousel */}
                <div className='relative max-w-4xl mx-auto'>
                    {/* Navigation Arrows */}
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={goToPrevious}
                        disabled={filteredProjects.length <= 1}
                        className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#0b7def]/50 hover:border-[#0b7def] transition-all disabled:opacity-30 disabled:cursor-not-allowed'
                    >
                        <FaChevronLeft size={20} />
                    </motion.button>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={goToNext}
                        disabled={filteredProjects.length <= 1}
                        className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#0b7def]/50 hover:border-[#0b7def] transition-all disabled:opacity-30 disabled:cursor-not-allowed'
                    >
                        <FaChevronRight size={20} />
                    </motion.button>

                    {/* Project Card with Animation */}
                    <div className='relative h-[500px] overflow-hidden'>
                        <AnimatePresence mode='wait' custom={direction}>
                            <motion.div
                                key={`${activeFilter}-${currentIndex}`}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 }
                                }}
                                className='absolute inset-0'
                            >
                                {/* Light Glow Effect */}
                                <motion.div
                                    variants={lightGlowVariants}
                                    initial="initial"
                                    animate="animate"
                                    className='absolute inset-0 pointer-events-none'
                                >
                                    {/* Animated glowing orbs */}
                                    <div className='absolute -top-20 -left-20 w-40 h-40 bg-[#0b7def] rounded-full blur-[80px] opacity-40' />
                                    <div className='absolute -bottom-20 -right-20 w-40 h-40 bg-[#00bf8f] rounded-full blur-[80px] opacity-40' />
                                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#1cd8d2] rounded-full blur-[100px] opacity-20' />
                                </motion.div>

                                {/* Project Card */}
                                <div className='relative h-full flex items-center justify-center p-4'>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className='w-full max-w-2xl bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden relative'
                                    >
                                        {/* Glowing Border Effect */}
                                        <div className='absolute inset-0 rounded-2xl pointer-events-none'>
                                            <div className='absolute inset-0 rounded-2xl border-2 border-transparent'>
                                                <motion.div
                                                    animate={{
                                                        background: [
                                                            "linear-gradient(45deg, transparent 0%, #0b7def 50%, transparent 100%)",
                                                            "linear-gradient(45deg, transparent 25%, #00bf8f 50%, transparent 75%)",
                                                            "linear-gradient(45deg, transparent 0%, #0b7def 50%, transparent 100%)"
                                                        ]
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    }}
                                                    className='absolute inset-0 rounded-2xl p-[2px]'
                                                >
                                                    <div className='absolute inset-[2px] bg-black/90 rounded-2xl' />
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Inner Content */}
                                        <div className='relative bg-black/90 rounded-2xl'>
                                            {/* Project Image */}
                                            <div className='relative h-56 overflow-hidden'>
                                                <motion.img 
                                                    src={filteredProjects[currentIndex]?.image} 
                                                    alt={filteredProjects[currentIndex]?.title}
                                                    className='w-full h-full object-cover'
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />
                                                
                                                {/* Floating badge */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 }}
                                                    className='absolute top-4 right-4'
                                                >
                                                    <span className='px-3 py-1 text-xs font-medium bg-[#0b7def]/30 backdrop-blur-sm text-[#0b7def] rounded-full border border-[#0b7def]/50'>
                                                        {filteredProjects[currentIndex]?.category}
                                                    </span>
                                                </motion.div>
                                            </div>

                                            <div className='p-6'>
                                                <motion.h3 
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                    className='text-2xl font-bold text-white mb-3 group-hover:text-[#0b7def] transition-colors'
                                                >
                                                    {filteredProjects[currentIndex]?.title}
                                                </motion.h3>
                                                
                                                <motion.p 
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 }}
                                                    className='text-gray-400 mb-4'
                                                >
                                                    {filteredProjects[currentIndex]?.description}
                                                </motion.p>

                                                {/* Tech Stack */}
                                                <motion.div 
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.4 }}
                                                    className='flex flex-wrap gap-2 mb-4'
                                                >
                                                    {filteredProjects[currentIndex]?.techStack.map((tech, index) => (
                                                        <motion.span 
                                                            key={tech}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.5 + index * 0.1 }}
                                                            className='px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-md border border-white/10'
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </motion.div>

                                                {/* Links */}
                                                <motion.div 
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.6 }}
                                                    className='flex gap-3'
                                                >
                                                    <motion.a
                                                        whileHover={{ scale: 1.1, y: -2 }}
                                                        href={filteredProjects[currentIndex]?.github}
                                                        target='_blank'
                                                        rel="noopener noreferrer"
                                                        className='w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#0b7def]/30 hover:border-[#0b7def] transition-colors'
                                                    >
                                                        <FaGithub />
                                                    </motion.a>
                                                    <motion.a
                                                        whileHover={{ scale: 1.1, y: -2 }}
                                                        href={filteredProjects[currentIndex]?.liveDemo}
                                                        target='_blank'
                                                        rel="noopener noreferrer"
                                                        className='w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#00bf8f]/30 hover:border-[#00bf8f] transition-colors'
                                                    >
                                                        <FaExternalLinkAlt />
                                                    </motion.a>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dot Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className='flex justify-center gap-2 mt-6'
                    >
                        {filteredProjects.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => goToSlide(index)}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className='relative'
                            >
                                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex 
                                        ? 'bg-gradient-to-r from-[#0b7def] to-[#00bf8f]' 
                                        : 'bg-white/20 hover:bg-white/40'
                                }`} />
                                {index === currentIndex && (
                                    <motion.div
                                        layoutId="activeDot"
                                        className='absolute -inset-1 rounded-full border border-[#0b7def]/50'
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Project Counter */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className='text-center mt-4'
                    >
                        <span className='text-gray-500 text-sm'>
                            {currentIndex + 1} / {filteredProjects.length}
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Projects
