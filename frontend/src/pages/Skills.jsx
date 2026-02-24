import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJs, FaHtml5, FaCss3Alt, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiFramer, SiVercel } from "react-icons/si";

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <FaReact className="text-3xl text-[#61DAFB]" />,
            skills: [
                { name: "React.js", icon: <FaReact className="text-4xl" />, color: "#61DAFB" },
                { name: "Next.js", icon: <SiNextdotjs className="text-4xl" />, color: "#ffffff" },
                { name: "JavaScript", icon: <FaJs className="text-4xl" />, color: "#F7DF1E" },
                { name: "TypeScript", icon: <SiTypescript className="text-4xl" />, color: "#3178C6" },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl" />, color: "#06B6D4" },
                { name: "Framer Motion", icon: <SiFramer className="text-4xl" />, color: "#0055FF" },
                { name: "HTML", icon: <FaHtml5 className="text-4xl" />, color: "#E34F26" },
                { name: "CSS", icon: <FaCss3Alt className="text-4xl" />, color: "#1572B6" },
            ]
        },
        {
            title: "Backend Development",
            icon: <FaNodeJs className="text-3xl text-[#339933]" />,
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-4xl" />, color: "#339933" },
                { name: "Express.js", icon: <SiExpress className="text-4xl" />, color: "#ffffff" },
                { name: "MongoDB", icon: <SiMongodb className="text-4xl" />, color: "#47A248" },
                { name: "REST APIs", icon: <SiVercel className="text-4xl" />, color: "#ffffff" },
            ]
        },
        {
            title: "Tools & Technologies",
            icon: <FaGitAlt className="text-3xl text-[#F05032]" />,
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-4xl" />, color: "#F05032" },
                { name: "GitHub", icon: <FaGithub className="text-4xl" />, color: "#ffffff" },
                { name: "Figma", icon: <FaFigma className="text-4xl" />, color: "#F24E1E" },
                { name: "VS Code", icon: <SiVercel className="text-4xl" />, color: "#007ACC" },
            ]
        }
    ]

    return (
        <section id='skills' className='w-full min-h-screen bg-black relative overflow-hidden py-20'>
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
                        My <span className='bg-clip-text text-white'>Skills</span>
                    </h2>
                    <div className='w-3 h-1 bg-gradient-to-r from-[#0b7def] to-[#00bf8f] mx-auto rounded-full' />
                    <p className='text-gray-400 mt-4 max-w-2xl mx-auto'>
                        Technologies and tools I work with to build modern, scalable applications
                    </p>
                </motion.div>

                {/* Skills Categories */}
                <div className='space-y-12'>
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className='flex items-center gap-3 mb-6'>
                                {category.icon}
                                <h3 className='text-2xl font-bold text-white'>{category.title}</h3>
                            </div>

                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center cursor-default'
                                    >
                                        <div style={{ color: skill.color }} className='mb-3'>
                                            {skill.icon}
                                        </div>
                                        <span className='text-white font-medium'>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16'
                >
                    {[
                        { number: "2+", label: "Years Experience", color: "#0b7def" },
                        { number: "20+", label: "Projects Completed", color: "#00bf8f" },
                        { number: "10+", label: "Happy Clients", color: "#f08409" }
                    ].map((stat, index) => (
                        <div
                            key={stat.label}
                            className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center'
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className='text-4xl font-bold mb-2'
                                style={{ color: stat.color }}
                            >
                                {stat.number}
                            </motion.div>
                            <p className='text-gray-400'>{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
