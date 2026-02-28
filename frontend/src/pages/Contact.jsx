import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub, FaWhatsapp, FaPaperPlane } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setFormData({ name: '', email: '', subject: '', message: '' })
            alert('Message sent successfully!')
        }, 2000)
    }

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: "Email",
            value: "gauravgautam9865@gmail.com",
            href: "mailto:gauravgautam9865@gmail.com",
            color: "#0b7def"
        },
        {
            icon: <FaPhone />,
            label: "Phone",
            value: "+91 9557799584",
            href: "tel:+91955779584",
            color: "#00bf8f"
        },
        {
            icon: <FaMapMarkerAlt />,
            label: "Location",
            value: "India",
            href: "#",
            color: "#f08409"
        }
    ]

    const socialLinks = [
        { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/gauravgautam", color: "#0077B5" },
        { icon: <FaGithub />, label: "GitHub", href: "https://github.com/gauravgautam2003", color: "#ffffff" },
        { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://whatsapp.com/channel/0029VbBj5b5GehEPNFo3nT2d", color: "#25D366" }
    ]

    const inputVariants = {
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
        <section id='contact' className='w-full min-h-screen bg-black relative overflow-hidden py-20'>
            {/* Background Effects */}
            
            <div className='absolute inset-0 pointer-events-none'>
                <div className='absolute top-40 -right-32 w-[50vw] h-[50vh] rounded-full bg-gradient-to-r from-[#4b3aff] via-[#00bf8f] to-[#1cd8d2] opacity-15 blur-[120px]' />
                <div className='absolute bottom-40 -left-32 w-[50vw] h-[50vh] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px]' />
            </div>
            <div className='absolute inset-0'>
                <div className='absolute top-32 left-32 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vh] sm:h-[50vh] md:h-[40vh] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse' />
                <div className='absolute bottom-20 right-10 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vh] sm:h-[50vh] md:h-[40vh] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#4b3aff] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500' />
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
                        Get In <span className='bg-clip-text text-white'>Touch</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className='max-w-42 h-1 bg-gradient-to-r from-[#0b7def] to-[#00bf8f] mx-auto rounded-full' 
                    />
                    <motion.p 
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className='text-gray-400 mt-4 max-w-2xl mx-auto'
                    >
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </motion.p>
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className='text-2xl font-bold text-white mb-8'>Let's talk about everything!</h3>
                        <p className='text-gray-400 mb-8 leading-relaxed'>
                            Don't like forms? Send me an email. 👋 Alternatively, feel free to reach out to me using any of the social links below. I'll get back to you as soon as possible.
                        </p>

                        {/* Contact Information Cards */}
                        <div className='space-y-4 mb-8'>
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.label}
                                    href={info.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className='flex items-center  gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-[#0b7def]/30 transition-all'
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className='w-12 h-12 rounded-full flex items-center justify-center'
                                        style={{ backgroundColor: `${info.color}20`, color: info.color }}
                                    >
                                        {info.icon}
                                    </motion.div>
                                    <div>
                                        <p className='text-gray-400 text-sm'>{info.label}</p>
                                        <p className='text-white text-sm font-medium '>{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className='text-gray-400 mb-4'>Follow me on:</p>
                            <div className='flex gap-4'>
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.15, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className='w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:border-white/30 transition-all'
                                        style={{ color: social.color }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <motion.form
                            onSubmit={handleSubmit}
                            className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h3 
                                variants={inputVariants}
                                className='text-xl font-bold text-white mb-6'
                            >
                                Send a Message
                            </motion.h3>

                            <div className='space-y-2'>
                                <motion.div variants={inputVariants}>
                                    <label className='block text-gray-400 text-sm mb-2'>Name</label>
                                    <input
                                        type='text'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder='John Doe'
                                        className='w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#0b7def]/50 focus:outline-none focus:ring-2 focus:ring-[#0b7def]/20 transition-all'
                                    />
                                </motion.div>

                                <motion.div variants={inputVariants}>
                                    <label className='block text-gray-400 text-sm mb-2'>Email</label>
                                    <input
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder='john@example.com'
                                        className='w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#0b7def]/50 focus:outline-none focus:ring-2 focus:ring-[#0b7def]/20 transition-all'
                                    />
                                </motion.div>

                                <motion.div variants={inputVariants}>
                                    <label className='block text-gray-400 text-sm mb-2'>Subject</label>
                                    <input
                                        type='text'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder='Project Inquiry'
                                        className='w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#0b7def]/50 focus:outline-none focus:ring-2 focus:ring-[#0b7def]/20 transition-all'
                                    />
                                </motion.div>

                                <motion.div variants={inputVariants}>
                                    <label className='block text-gray-400 text-sm mb-2'>Message</label>
                                    <textarea
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        className='w-full px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#0b7def]/50 focus:outline-none focus:ring-2 focus:ring-[#0b7def]/20 transition-all resize-none'
                                    />
                                </motion.div>

                                <motion.button
                                    type='submit'
                                    disabled={isSubmitting}
                                    variants={inputVariants}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className='w-full py-3 bg-gradient-to-r from-[#0b7def] to-[#00bf8f] text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#0b7def]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className='w-5 h-5 border-2 border-white border-t-transparent rounded-full'
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <FaPaperPlane />
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </motion.form>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className='mt-16 text-center'
                >
                    <p className='text-gray-500 text-sm'>
                        © {new Date().getFullYear()} Gaurav Gautam. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
