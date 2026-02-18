import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://formsubmit.co/ajax/patrickmuhireofficial@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Oops! Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Oops! Something went wrong. Please try again.');
        }
    };

    return (
        <section id="contact" className="py-20 backdrop-blur-sm text-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-300">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white text-left">Contact Information</h3>

                        <div className="flex items-start space-x-4">
                            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg text-green-600 dark:text-green-400">
                                <MessageSquare size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-cyan-400">WhatsApp Me</h4>
                                <a href="https://wa.me/250782591895" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-cyan-300 transition-colors block">
                                    +250 782 591 895
                                </a>
                                <p className="text-gray-400 text-sm">Available for quick chat</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg text-purple-600 dark:text-purple-400">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-cyan-400">Call Me</h4>
                                <p className="text-gray-200">+250 782 591 895</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-lg text-pink-600 dark:text-pink-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-cyan-400">Location</h4>
                                <p className="text-gray-200">Kigali, Rwanda</p>
                                <p className="text-gray-400 text-sm">Available for remote work worldwide</p>
                            </div>
                        </div>


                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New message from Portfolio!" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/50 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/50 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/50 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-colors resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
