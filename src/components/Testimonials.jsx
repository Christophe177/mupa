import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Edubridge Rwanda',
            role: 'Education & Technology Partner',
            content: 'Patrick transformed our digital presence. His technical skills and creative eye helped us showcase our training programs effectively to the Rwandan youth.',
            rating: 5,
            image: '/edubrige.png',
        },
        {
            id: 2,
            name: 'Marchal Real Estate',
            role: 'Property & Development',
            content: 'The promotional video Patrick created for our new estate development was stunning. It captured the luxury and comfort we wanted to convey perfectly.',
            rating: 5,
            image: '/marchal.png',
        },
        {
            id: 3,
            name: 'NSHUTI Chris',
            role: 'Creative Director',
            content: 'A highly talented multimedia specialist. Patrick delivered our project on time and exceeded our expectations with his professional editing and photography.',
            rating: 5,
            image: '/chris.png',
        },
    ];

    return (
        <section id="testimonials" className="py-20 backdrop-blur-sm text-slate-100 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full mb-6"></div>
                    <p className="max-w-2xl mx-auto text-xl text-gray-300">
                        Hear what my clients have to say about working with me.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="backdrop-blur-md p-8 rounded-xl shadow-md relative border border-white/10"
                        >
                            <Quote className="absolute top-6 right-6 text-cyan-900/30 w-12 h-12" />

                            <div className="flex items-center mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-cyan-500"
                                />
                                <div>
                                    <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-300 italic leading-relaxed text-lg">
                                "{testimonial.content}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
