import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, PenTool, MonitorPlay, Share2, Edit3, Film, Users, Aperture } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Photography',
            description: 'Portrait, Event, Product, and Landscape photography delivering high-quality visual content.',
            icon: <Camera size={40} />,
            color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400'
        },
        {
            title: 'Videography',
            description: 'Cinematic video production for events, commercials, and documentaries.',
            icon: <Video size={40} />,
            color: 'bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400'
        },
        {
            title: 'Graphic Design',
            description: 'Creative branding, logo design, social media graphics, and print media.',
            icon: <PenTool size={40} />,
            color: 'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400'
        },
        {
            title: 'Motion Graphics',
            description: 'Engaging 2D/3D animations and motion design for brand storytelling.',
            icon: <MonitorPlay size={40} />,
            color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400'
        },
        {
            title: 'Social Media Management',
            description: 'Strategic content creation and management to grow your online presence.',
            icon: <Share2 size={40} />,
            color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
        },
        {
            title: 'Video Editing',
            description: 'Professional post-production services including color grading and sound design.',
            icon: <Edit3 size={40} />,
            color: 'bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400'
        }
    ];

    return (
        <section id="services" className="py-20 backdrop-blur-sm text-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">My Services</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full mb-6"></div>
                    <p className="max-w-2xl mx-auto text-xl text-gray-300">
                        I offer a wide range of creative services tailored to meet your specific needs and help you stand out.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-white/10"
                        >
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${service.color} transition-transform hover:scale-110`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
