import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Play } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ['All', 'Photography', 'Videography', 'Graphic Design', 'Motion Graphics'];

    const projects = [
        {
            id: 1,
            title: 'Tour du Rwanda Coverage',
            category: 'Photography',
            image: '/photo1.png',
            description: 'Action sports photography capturing the high-intensity moments of the Tour du Rwanda.',
            tools: ['Canon R5', 'Telephoto Lens'],
        },
        {
            id: 2,
            title: 'Lakeside Architecture',
            category: 'Photography',
            image: '/photo2.png',
            description: 'Architectural photography showcasing a stunning lakeside castle resort.',
            tools: ['Sony A7IV', 'Wide Angle'],
        },
        {
            id: 3,
            title: 'Urban Nightlife',
            category: 'Photography',
            image: '/photo3.png',
            description: 'Long exposure street photography capturing the vibrant night energy of the city.',
            tools: ['Fujifilm X-T4', 'Tripod'],
        },
        {
            id: 4,
            title: 'Cinematic Event Highlight',
            category: 'Videography',
            image: 'https://img.youtube.com/vi/5cLt0LdQeEI/maxresdefault.jpg',
            video: 'https://www.youtube.com/embed/5cLt0LdQeEI',
            description: 'A cinematic highligh capturing special moments with professional editing and storytelling.',
            tools: ['Sony A7SIII', 'Drone', 'Premiere Pro'],
        },
        {
            id: 5,
            title: 'Serene Island Landscapes',
            category: 'Photography',
            image: '/photo4.png',
            description: 'Nature photography capturing the peaceful atmosphere of Lake Kivu islands.',
            tools: ['DJI Mavic 3', 'Lightroom'],
        },
        {
            id: 6,
            title: 'The Winding Road',
            category: 'Photography',
            image: '/photo5.png',
            description: 'Scenic landscape photography emphasizing leading lines and natural beauty.',
            tools: ['Canon R5', '24-70mm'],
        },
        {
            id: 7,
            title: 'Product Launch 3D Animation',
            category: 'Motion Graphics',
            image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1364&q=80',
            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            description: '3D motion graphics revealing features of a new smartwatch.',
            tools: ['Blender', 'After Effects'],
        },

        {
            id: 9,
            title: 'Portrait / Lifestyle',
            category: 'Photography',
            image: '/photo6.png',
            description: 'Capturing authentic moments and portraits with style.',
            tools: ['Canon R5', '85mm f/1.2'],
        },
        {
            id: 10,
            title: 'Wild Nature Capture',
            category: 'Photography',
            image: '/photo7.png',
            description: 'Stunning wildlife photography capturing the essence of the natural world.',
            tools: ['Canon R5', '600mm Lens'],
        },
        {
            id: 11,
            title: 'Modern Architecture',
            category: 'Photography',
            image: '/photo8.png',
            description: 'Sleek architectural lines and modern structures captured in perfect light.',
            tools: ['Sony A7IV', '16-35mm'],
        },
        {
            id: 12,
            title: 'Cultural Heritage',
            category: 'Photography',
            image: '/photo9.png',
            description: 'Documenting the rich cultural heritage and traditions through a modern lens.',
            tools: ['Fujifilm X-T4', '35mm'],
        },
        {
            id: 13,
            title: 'Landscape Serenity',
            category: 'Photography',
            image: '/photo10.png',
            description: 'Breathtaking landscapes that evoke a sense of peace and wonder.',
            tools: ['DJI Mavic 3', 'Wide Angle'],
        },
        {
            id: 14,
            title: 'Street Perspectives',
            category: 'Photography',
            image: '/photo11.png',
            description: 'Unique angles and perspectives on daily urban life.',
            tools: ['Sony A7IV', '35mm'],
        },
        {
            id: 15,
            title: 'Event Highlights',
            category: 'Photography',
            image: '/photo12.png',
            description: 'Capturing the energy and emotion of live events and celebrations.',
            tools: ['Canon R5', '24-70mm'],
        },
        {
            id: 16,
            title: 'Product Narrative',
            category: 'Photography',
            image: '/photo13.png',
            description: 'Storytelling through detailed product photography and lighting.',
            tools: ['Fujifilm X-T4', '90mm Macro'],
        },
        {
            id: 17,
            title: 'Urban Exploration',
            category: 'Photography',
            image: '/photo14.png',
            description: 'Discovering hidden gems and unique textures in urban environments.',
            tools: ['Sony A7IV', '24mm'],
        },
        {
            id: 18,
            title: 'Golden Hour Portraits',
            category: 'Photography',
            image: '/photo16.png',
            description: 'Warm, emotional portraits captured during the perfect golden hour.',
            tools: ['Canon R5', '50mm f/1.2'],
        },
        {
            id: 19,
            title: 'Nature Perspective',
            category: 'Photography',
            image: '/photo17.png',
            description: 'Detailed close-ups and unique angles of flora and fauna.',
            tools: ['Sony A7IV', '90mm Macro'],
        },
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="py-20 backdrop-blur-sm text-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full mb-8"></div>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                  ${filter === cat
                                        ? 'bg-cyan-600 text-white shadow-lg scale-105'
                                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-50px" }}
                                key={project.id}
                                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="aspect-w-16 aspect-h-9 h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {project.video && (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="bg-white/30 backdrop-blur-md p-3 rounded-full shadow-lg">
                                                <Play size={24} className="text-white fill-white" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-cyan-400 text-sm font-semibold mb-1">{project.category}</span>
                                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-64 md:h-96 bg-black">
                                {selectedProject.video ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={selectedProject.video}
                                        title={selectedProject.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                ) : (
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                    <div>
                                        <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400 mb-2">
                                            {selectedProject.category}
                                        </span>
                                        <h2 className="text-3xl font-bold dark:text-white">{selectedProject.title}</h2>
                                    </div>
                                    <div className="flex gap-3 mt-4 md:mt-0">
                                        <a href="#" className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                                            <ExternalLink size={18} />
                                            Live Preview
                                        </a>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="md:col-span-2">
                                        <h3 className="text-xl font-semibold mb-3 dark:text-white">About Project</h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {selectedProject.description}
                                            <br /><br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3 dark:text-white">Tools Used</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tools.map((tool) => (
                                                <span key={tool} className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-md text-sm border border-gray-200 dark:border-slate-700">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
