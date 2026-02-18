import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Briefcase, MapPin } from 'lucide-react';

const Activities = () => {
    const activities = [
        {
            id: 0,
            type: 'experience',
            title: 'Lead Creative Director',
            organization: 'International Media Group',
            date: '2025 - Future',
            description: 'Overseeing global multimedia strategy and pioneering AI-driven visual storytelling.',
            icon: <Briefcase size={20} />,
        },
        {
            id: 0.5,
            type: 'experience',
            title: 'Lead Multimedia Production',
            organization: 'Regional Tech Hub',
            date: '2024',
            description: 'Directed large-scale digital content production and managed cross-functional creative teams.',
            icon: <Briefcase size={20} />,
        },
        {
            id: 1,
            type: 'experience',
            title: 'Senior Multimedia Specialist',
            organization: 'Creative Agency XYZ',
            date: '2023 - Present',
            description: 'Leading a team of creatives to deliver high-impact multimedia campaigns for global brands.',
            icon: <Briefcase size={20} />,
        },
        {
            id: 2,
            type: 'award',
            title: 'Best Cinematography',
            organization: 'National Film Festival',
            date: 'Nov 2023',
            description: 'Awarded for exceptional visual storytelling in the short film category.',
            icon: <Award size={20} />,
        },
        {
            id: 3,
            type: 'workshop',
            title: 'Advanced Motion Graphics Workshop',
            organization: 'Design Institute',
            date: 'Aug 2023',
            description: 'Intensive 2-week workshop focusing on 3D integration in After Effects.',
            icon: <Calendar size={20} />,
        },
        {
            id: 4,
            type: 'experience',
            title: 'Freelance Photographer',
            organization: 'Self-Employed',
            date: '2020 - 2023',
            description: 'Provided photography services for weddings, events, and corporate portraits.',
            icon: <Briefcase size={20} />,
        },
        {
            id: 5,
            type: 'event',
            title: 'Tech Summit 2022 Coverage',
            organization: 'TechDaily',
            date: 'May 2022',
            description: 'Official media partner covering keynotes and interviews.',
            icon: <MapPin size={20} />,
        },
    ];

    return (
        <section id="activities" className="py-20 backdrop-blur-sm text-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
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
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
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
