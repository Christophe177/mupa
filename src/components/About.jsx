import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, PenTool, MonitorPlay, Share2, Edit3, Download } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'Photography', icon: <Camera />, level: 95 },
        { name: 'Videography', icon: <Video />, level: 95 },
        { name: 'Graphic Design', icon: <PenTool />, level: 95 },
        { name: 'Motion Graphics', icon: <MonitorPlay />, level: 95 },
        { name: 'Social Media', icon: <Share2 />, level: 95 },
        { name: 'Video Editing', icon: <Edit3 />, level: 95 },
    ];

    return (
        <section id="about" className="py-20 backdrop-blur-sm text-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-6">I'm a Multimedia Specialist</h3>
                        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                            With a passion for visual storytelling, I specialize in creating compelling digital content that engages audiences.
                            My journey involves working with various brands to bring their vision to life through photography, videography, and dynamic motion graphics.
                        </p>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            I have 5 years of experience in the creative industry, constantly learning and adapting to new trends and technologies to deliver top-notch results.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <a
                                href="/MUHIRE%20PATRICK%20RESUME.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-cyan-500 text-white font-bold hover:bg-cyan-600 transition-all hover:scale-105 shadow-lg shadow-cyan-500/20"
                            >
                                <Download size={20} />
                                View Resume
                            </a>
                        </motion.div>


                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-6"
                    >
                        <h3 className="text-xl font-semibold mb-2">My Skills</h3>
                        <div className="space-y-6">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-cyan-500">{skill.icon}</span>
                                            <span className="font-medium">{skill.name}</span>
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5">
                                        <motion.div
                                            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                            viewport={{ once: true }}
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
