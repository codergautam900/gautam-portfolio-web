import React from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from "react-icons/fa"

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "CEO, TechStart Inc.",
            company: "TechStart Inc.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
            rating: 5,
            message: "Working with Gaurav was an absolute pleasure. He delivered our MERN stack application on time and exceeded our expectations. His attention to detail and problem-solving skills are remarkable."
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Product Manager",
            company: "Innovate Labs",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
            rating: 5,
            message: "Gaurav demonstrated excellent communication throughout the project. He transformed our outdated website into a modern, responsive platform that has significantly improved our user engagement."
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Founder",
            company: "Digital Dreams",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
            rating: 5,
            message: "His expertise in the MERN stack is outstanding. Gaurav built a scalable e-commerce platform that has doubled our sales. I highly recommend him for any web development project."
        },
        {
            id: 4,
            name: "David Kim",
            role: "CTO",
            company: "StartupHub",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
            rating: 5,
            message: "Gaurav's technical skills and professionalism are top-notch. He quickly understood our requirements and delivered a robust full-stack application that perfectly matched our vision."
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
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

    const starVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    return (
        <section id='testimonials' className='w-full min-h-screen bg-black relative overflow-hidden py-20'>
            {/* Background Effects */}
            <div className='absolute inset-0 pointer-events-none'>
                <div className='absolute top-40 -left-32 w-[50vw] h-[50vh] rounded-full bg-gradient-to-r from-[#4b3aff] via-[#00bf8f] to-[#1cd8d2] opacity-15 blur-[120px]' />
                <div className='absolute bottom-40 -right-32 w-[50vw] h-[50vh] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px]' />
            </div>
            <div className='absolute inset-0'>
                <div className='absolute top-15 left-16 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vh] sm:h-[50vh] md:h-[40vh] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse' />
                <div className='absolute bottom-0 right-0 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vh] sm:h-[50vh] md:h-[40vh] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#4b3aff] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500' />
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
                    <motion.h2 
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2'
                    >
                        My <span className='bg-clip-text text-white'>Testimonials</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className='w-80 h-1 bg-gradient-to-r from-[#0b7def] to-[#00bf8f] mx-auto rounded-full' 
                    />
                    <motion.p 
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className='text-gray-400 mt-4 max-w-2xl mx-auto'
                    >
                        What clients say about working with me
                    </motion.p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-8'
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            variants={cardVariants}
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className='relative'
                        >
                            <motion.div
                                className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full'
                                whileHover={{
                                    borderColor: "rgba(11, 125, 239, 0.3)",
                                    boxShadow: "0 0 30px rgba(11, 125, 239, 0.1)"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Quote Icon */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                    viewport={{ once: true }}
                                    className='absolute top-6 right-6 text-[#0b7def]/20'
                                >
                                    <FaQuoteLeft size={40} />
                                </motion.div>

                                {/* Star Ratings */}
                                <motion.div 
                                    variants={starVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className='flex gap-1 mb-4'
                                >
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.span
                                            key={i}
                                            variants={starVariants}
                                            className='text-[#F7DF1E]'
                                        >
                                            <FaStar size={16} />
                                        </motion.span>
                                    ))}
                                </motion.div>

                                {/* Message */}
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className='text-gray-300 mb-6 leading-relaxed italic'
                                >
                                    "{testimonial.message}"
                                </motion.p>

                                {/* Client Info */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className='flex items-center gap-4'
                                >
                                    <motion.div 
                                        whileHover={{ scale: 1.1 }}
                                        className='w-14 h-14 rounded-full overflow-hidden border-2 border-[#0b7def]/30'
                                    >
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.name}
                                            className='w-full h-full object-cover'
                                        />
                                    </motion.div>
                                    <div>
                                        <h4 className='text-white font-bold'>{testimonial.name}</h4>
                                        <p className='text-[#00bf8f] text-sm'>{testimonial.role}</p>
                                        <p className='text-gray-500 text-xs'>{testimonial.company}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Navigation Dots */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                    className='flex justify-center gap-2 mt-12'
                >
                    {[0, 1, 2, 3].map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                            viewport={{ once: true }}
                            className='w-3 h-3 rounded-full bg-gradient-to-r from-[#0b7def] to-[#00bf8f] cursor-pointer'
                            whileHover={{ scale: 1.3 }}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonial
