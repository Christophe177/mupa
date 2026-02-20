import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createPortal } from 'react-dom';

const FloatingWhatsApp = () => {
    return createPortal(
        <a
            href="https://wa.me/250782591895"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[10000] flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 sm:px-5 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
        >
            <MessageCircle size={20} fill="white" className="text-white sm:w-6 sm:h-6" />
            <span className="font-semibold text-base sm:text-lg">WhatsApp</span>
        </a>,
        document.body
    );
};

export default FloatingWhatsApp;
