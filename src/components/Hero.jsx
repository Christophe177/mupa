import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen py-12 md:py-0 flex items-center justify-center overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop&v=9"
                    alt="Professional Production Studio"
                    className="w-full h-full object-cover scale-105 animate-slow-zoom brightness-125 contrast-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 z-20" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center justify-center gap-6 md:gap-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="relative w-32 h-32 xs:w-36 xs:h-36 sm:w-48 md:w-56 sm:h-48 md:h-56 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-2xl">
                        <img
                            src="/patrick-profile.jpg"
                            alt="MUHIRE Patrick"
                            className="w-full h-full object-cover rounded-full border-4 border-slate-900"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h2 className="text-xl md:text-2xl font-light tracking-wider mb-4 text-cyan-400">
                        HELLO, I'M
                    </h2>
                    <h1 className="text-4xl xs:text-5xl md:text-7xl font-bold mb-4 md:mb-6">
                        <span className="text-white">MUHIRE </span>
                        <span className="text-cyan-500">PATRICK</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-light">
                        Creative Multimedia Specialist
                        <span className="block mt-2 text-lg text-gray-400">
                            Photography • Videography • Graphic Design • Motion Graphics
                        </span>
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/#projects"
                            className="group px-8 py-3 rounded-full bg-white text-black font-bold flex items-center justify-center transition-all hover:bg-gray-200 hover:scale-105 shadow-xl"
                        >
                            View Projects
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                        <a
                            href="/#contact"
                            className="group px-8 py-3 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center transition-all hover:bg-cyan-600 hover:scale-105 shadow-xl"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator - hidden on short screens to avoid overlap */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden tall:block"
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-3 bg-cyan-400 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
