import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
    return (
        <motion.a
            href="https://wa.me/250782591895"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
        >
            <MessageCircle size={24} fill="white" className="text-white" />
            <span className="font-semibold text-lg">WhatsApp</span>
        </motion.a>
    );
};

export default FloatingWhatsApp;
