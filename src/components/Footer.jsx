import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronRight, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[#020617] text-white pt-16 pb-8">
            {/* Multi-colored Top Border */}
            <div className="absolute top-0 left-0 w-full h-[3px] flex">
                <div className="w-1/3 h-full bg-[#8b5cf6]"></div> {/* Purple */}
                <div className="w-1/3 h-full bg-[#f59e0b]"></div> {/* Yellow */}
                <div className="w-1/3 h-full bg-[#06b6d4]"></div> {/* Cyan */}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
                    {/* Connect With Us */}
                    <div className="lg:col-span-1">
                        <h4 className="text-xl font-bold mb-8">Connect With Us</h4>
                        <div className="flex flex-wrap gap-3">
                            <a href="https://www.facebook.com/patrick.schwarzinneger" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-cyan-400 hover:text-white transition-all transform hover:scale-110">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/mr_cool_patrick_?igsh=eWp2ejBhb2IxYjVn" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-cyan-400 hover:text-white transition-all transform hover:scale-110">
                                <Instagram size={20} />
                            </a>
                            <a href="https://x.com/muhirepatron?t=gyzAm276LQE24of38RbyDA&s=09" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-cyan-400 hover:text-white transition-all transform hover:scale-110">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/patrick-muhire-3b301b374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-cyan-400 hover:text-white transition-all transform hover:scale-110">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCYexqyEZc6SpnYrIbtQEOmg" target="_blank" rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 hover:bg-cyan-400 hover:text-white transition-all transform hover:scale-110">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 text-white">Explore</h4>
                        <ul className="space-y-4">
                            <li><a href="#home" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors group">
                                <ChevronRight size={16} className="text-cyan-500 mr-2 group-hover:translate-x-1 transition-transform" />
                                Home
                            </a></li>
                            <li><a href="#about" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors group">
                                <ChevronRight size={16} className="text-cyan-500 mr-2 group-hover:translate-x-1 transition-transform" />
                                About
                            </a></li>
                            <li><a href="#services" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors group">
                                <ChevronRight size={16} className="text-cyan-500 mr-2 group-hover:translate-x-1 transition-transform" />
                                Services
                            </a></li>
                            <li><a href="#projects" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors group">
                                <ChevronRight size={16} className="text-cyan-500 mr-2 group-hover:translate-x-1 transition-transform" />
                                Projects
                            </a></li>
                            <li><a href="#activities" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors group">
                                <ChevronRight size={16} className="text-cyan-500 mr-2 group-hover:translate-x-1 transition-transform" />
                                Experiences
                            </a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 text-white">Services</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-400 group cursor-default">
                                <ChevronRight size={16} className="text-cyan-500 mr-2" />
                                Photography
                            </li>
                            <li className="flex items-center text-gray-400 group cursor-default">
                                <ChevronRight size={16} className="text-cyan-500 mr-2" />
                                Videography
                            </li>
                            <li className="flex items-center text-gray-400 group cursor-default">
                                <ChevronRight size={16} className="text-cyan-500 mr-2" />
                                Graphic Design
                            </li>
                            <li className="flex items-center text-gray-400 group cursor-default">
                                <ChevronRight size={16} className="text-cyan-500 mr-2" />
                                Motion Graphics
                            </li>
                            <li className="flex items-center text-gray-400 group cursor-default">
                                <ChevronRight size={16} className="text-cyan-500 mr-2" />
                                Video Editing
                            </li>
                        </ul>
                    </div>

                    {/* Locations / Experience */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 text-white">Experience</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-400 group cursor-default">
                                <ChevronRight size={16} className="text-cyan-500 mr-2" />
                                2025 Lead Creative
                            </li>
                            <li className="flex items-center text-gray-400 group cursor-default">
                                <ChevronRight size={16} className="text-cyan-500 mr-2" />
                                2024 Production Dir.
                            </li>
                            <li className="flex items-center text-gray-400 group cursor-default">
                                <ChevronRight size={16} className="text-cyan-500 mr-2" />
                                2023 Multimedia Spcl.
                            </li>
                            <li className="flex items-center text-gray-400 group cursor-default">
                                <ChevronRight size={16} className="text-cyan-500 mr-2" />
                                Freelance Work
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 text-white">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#contact" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors group">
                                <ChevronRight size={16} className="text-cyan-500 mr-2 group-hover:translate-x-1 transition-transform" />
                                Contact
                            </a></li>
                            <li><a href="mailto:patrickmuhireofficial@gmail.com" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors group">
                                <ChevronRight size={16} className="text-cyan-500 mr-2 group-hover:translate-x-1 transition-transform" />
                                Official Email
                            </a></li>
                            <li><a href="https://wa.me/250782591895" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors group">
                                <ChevronRight size={16} className="text-cyan-500 mr-2 group-hover:translate-x-1 transition-transform" />
                                WhatsApp Support
                            </a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p className="mb-4 md:mb-0">
                        Copyright {new Date().getFullYear()} - All right reserved
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-slate-800 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-110"
                        title="Back to top"
                    >
                        <ArrowUp size={20} />
                    </button>

                    <p className="mt-4 md:mt-0 font-medium text-gray-400">
                        MUHIRE Patrick Portfolio
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
