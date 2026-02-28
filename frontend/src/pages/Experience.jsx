import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from "react-icons/fa"

const Experience = () => {
    const experiences = [

        {
            id: 1,
            type: "work",
            title: "Full Stack Developer (MERM Stack)",
            company: "Self-Employed",
            location: "Remote",
            period: "2025 - 2026",
            description: "Built custom web applications for small businesses. Created e-commerce platforms, portfolio websites, and CMS solutions using modern technologies.",
            technologies: ["React", "Node.js", "MongoDB", "JavaScript", "HTML", "CSS", "Git", "REST APIs", "Authentication", "Deployment","Express.js"]
        },
    ]

    const education = [
        {
            id: 2,
            type: "education",
            title: "Bachelor of Technology in Computer Science",
            company: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
            location: "India",
            period: "2023 - 2027 (Expected)",
            description: "Pursuing B.Tech with focus on Software Engineering and Web Technologies. Completed coursework in Data Structures, Algorithms, Database Management, and Web Development.",
            technologies: ["Computer Science", "Data Structures", "Algorithms", "Database Systems", "Operating Systems"]
        },

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

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
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
        },
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.3
            }
        }
    }

    return (
        <section id='experience' className='w-full min-h-screen bg-black relative overflow-hidden'>
            <div className='absolute inset-0'>
                <div className='absolute -top-32 -left-32 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vh] sm:h-[50vh] md:h-[40vh] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse' />
                <div className='absolute bottom-0 right-0 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vh] sm:h-[50vh] md:h-[40vh] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#4b3aff] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500' />
            </div>

            <div className='relative z-10 max-w-5xl mx-auto px-4 py-20'>
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2'>
                        My <span className='bg-clip-text text-white'>Experience</span>
                    </h2>
                    <div className='max-w-50 h-1 bg-gradient-to-r from-[#0b7def] to-[#00bf8f] mx-auto rounded-full' />
                    <p className='text-gray-400 mt-4 max-w-2xl mx-auto'>
                        My professional journey and educational background
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className='relative'>
                    {/* Timeline Line */}
                    <div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0b7def] via-[#00bf8f] to-[#1cd8d2] opacity-30' />

                    {/* Work Experience */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className='mb-12'
                    >
                        <motion.div
                            variants={itemVariants}
                            className='flex items-center gap-3 mb-8'
                        >
                            <div className='w-10 h-10 rounded-full bg-gradient-to-r from-[#0b7def] to-[#00bf8f] flex items-center justify-center'>
                                <FaBriefcase className='text-white' size={18} />
                            </div>
                            <h3 className='text-2xl font-bold text-white'>Work Experience</h3>
                        </motion.div>

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={cardVariants}
                                whileHover="hover"
                                className={`relative flex flex-col md:flex-row gap-6 mb-8 ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Timeline Dot */}
                                <div className='absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#0b7def] to-[#00bf8f] -translate-x-1/2 mt-2 z-10'>
                                    <div className='absolute inset-0 rounded-full animate-ping bg-[#0b7def] opacity-30' />
                                </div>

                                {/* Content Card */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <motion.div
                                        className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#0b7def]/30 transition-colors'
                                    >
                                        {/* Period Badge */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className='inline-flex items-center gap-2 px-3 py-1 bg-[#0b7def]/10 border border-[#0b7def]/20 rounded-full mb-4'
                                        >
                                            <FaCalendarAlt className='text-[#0b7def]' size={12} />
                                            <span className='text-[#0b7def] text-sm font-medium'>{exp.period}</span>
                                        </motion.div>

                                        <h4 className='text-xl font-bold text-white mb-1'>{exp.title}</h4>
                                        <p className='text-[#00bf8f] font-medium mb-2'>{exp.company}</p>
                                        <p className='text-gray-400 text-sm mb-4'>{exp.location}</p>
                                        <p className='text-gray-400 mb-4 leading-relaxed'>{exp.description}</p>

                                        {/* Technologies */}
                                        <div className='flex flex-wrap gap-2'>
                                            {exp.technologies.map((tech, idx) => (
                                                <motion.span
                                                    key={tech}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                                    className='px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/10'
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className='hidden md:block md:w-1/2' />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.div
                            variants={itemVariants}
                            className='flex items-center gap-3 mb-8'
                        >
                            <div className='w-10 h-10 rounded-full bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] flex items-center justify-center'>
                                <FaGraduationCap className='text-white' size={18} />
                            </div>
                            <h3 className='text-2xl font-bold text-white'>Education</h3>
                        </motion.div>

                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                variants={cardVariants}
                                whileHover="hover"
                                className={`relative flex flex-col md:flex-row gap-6 mb-8 ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Timeline Dot */}
                                <div className='absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#00bf8f] to-[#1cd8d2] -translate-x-1/2 mt-2 z-10'>
                                    <div className='absolute inset-0 rounded-full animate-ping bg-[#00bf8f] opacity-30' />
                                </div>

                                {/* Content Card */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <motion.div
                                        className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#00bf8f]/30 transition-colors'
                                    >
                                        {/* Period Badge */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className='inline-flex items-center gap-2 px-3 py-1 bg-[#00bf8f]/10 border border-[#00bf8f]/20 rounded-full mb-4'
                                        >
                                            <FaCalendarAlt className='text-[#00bf8f]' size={12} />
                                            <span className='text-[#00bf8f] text-sm font-medium'>{edu.period}</span>
                                        </motion.div>

                                        <h4 className='text-xl font-bold text-white mb-1'>{edu.title}</h4>
                                        <p className='text-[#00bf8f] font-medium mb-2'>{edu.company}</p>
                                        <p className='text-gray-400 text-sm mb-4'>{edu.location}</p>
                                        <p className='text-gray-400 mb-4 leading-relaxed'>{edu.description}</p>

                                        {/* Technologies */}
                                        <div className='flex flex-wrap gap-2'>
                                            {edu.technologies.map((tech, idx) => (
                                                <motion.span
                                                    key={tech}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.4 + idx * 0.1 }}
                                                    className='px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/10'
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className='hidden md:block md:w-1/2' />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Experience
