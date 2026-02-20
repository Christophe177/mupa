import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Briefcase, MapPin, Video, PenTool } from 'lucide-react';

const Activities = () => {
    const activities = [
        {
            id: 1,
            type: 'experience',
            title: 'Content Creation',
            organization: 'Marchal Real Estate',
            date: '2024 - 2025',
            description: 'Leading video production and content creation for real estate marketing.',
            icon: <Briefcase size={20} />,
        },
        {
            id: 2,
            type: 'experience',
            title: 'Animator',
            organization: 'Rwanda Basic Education Board (REB)',
            date: '2024',
            description: 'Designing and animating educational content for national curriculum support.',
            icon: <PenTool size={20} />,
        },
        {
            id: 3,
            type: 'experience',
            title: 'Documentary Films Editor',
            organization: 'Document Africa Film Production Ltd',
            date: '2023',
            description: 'Professional editing of documentary films focusing on African narratives.',
            icon: <Video size={20} />,
        },
        {
            id: 4,
            type: 'award',
            title: 'Best Short Documentary Film',
            organization: 'Imitana Production & Kiruri MFN',
            date: '2023',
            description: 'Won the prestigious award during the filmmaking boot camp.',
            icon: <Award size={20} />,
        },
        {
            id: 5,
            type: 'experience',
            title: 'Jingles and Graphic Designs',
            organization: 'Isangano Radio 104.9FM',
            date: '2022 - 2023',
            description: 'Audio production for jingles and visual graphic design for radio branding.',
            icon: <Briefcase size={20} />,
        },
        {
            id: 6,
            type: 'experience',
            title: 'Commercial Ads',
            organization: 'MOPAS',
            date: '2022',
            description: 'Conceptualizing and producing high-converting commercial advertisements.',
            icon: <Video size={20} />,
        },
    ];

    return (
        <section id="activities" className="py-20 backdrop-blur-sm text-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience & Activities</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full mb-6"></div>
                    <p className="max-w-2xl mx-auto text-xl text-gray-300">
                        A journey through my professional career, workshops, and recognitions.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical line - hidden on mobile, visible on md+ */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-700"></div>

                    <div className="space-y-12">
                        {activities.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                    x: index % 2 === 0 ? 50 : -50
                                }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-50px" }}
                                className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="w-full md:w-5/12"></div>

                                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-cyan-600 text-white shadow-lg mb-4 md:mb-0">
                                    {item.icon}
                                </div>

                                <div className="w-full md:w-5/12 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/10 hover:shadow-lg transition-shadow">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                        <span className="text-sm font-medium text-cyan-400 bg-cyan-900/30 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                                            {item.date}
                                        </span>
                                    </div>
                                    <h4 className="text-md font-semibold text-gray-300 mb-2">{item.organization}</h4>
                                    <p className="text-gray-400 text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
