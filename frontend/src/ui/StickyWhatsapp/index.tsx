// app/components/WhatsAppWidget.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaWhatsapp,
    FaTimes,
    FaArrowRight,
    FaHeadset
} from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const WhatsAppWidget: React.FC<{ phone?: string }> = ({ phone }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasNewMessage, setHasNewMessage] = useState(true);
    const whatsappNumber = phone ? phone.replace(/\s/g, '').replace('+', '') : "994501234567";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <div className="fixed bottom-20 lg:bottom-6 right-6 z-50 flex flex-col items-end">

            {/* Modal - Button üstündə */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop - yalnız modal bağlamaq üçün */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 25
                            }}
                            className="absolute bottom-20 right-0 z-50 w-80"
                        >
                            <div
                                className="bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden border border-gray-100">

                                {/* Header - WhatsApp rəngi */}
                                <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 relative">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="absolute cursor-pointer top-3 right-3 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                                    >
                                        <FaTimes size={16} className="text-white" />
                                    </button>

                                    <div className="flex items-center gap-3 pr-8">
                                        <div
                                            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <FaHeadset size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg">
                                                Dəstək
                                            </h3>
                                            <p className="text-white/80 text-sm">
                                                Adətən 2 dəqiqədə cavab
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-4">
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        Salam! 👋 Sizə necə kömək edə bilərik? WhatsApp-dan yazın, komandamız sizinlə
                                        əlaqə saxlasın.
                                    </p>

                                    {/* Chat Button */}
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 group"
                                    >
                                        <FaWhatsapp size={22} className="group-hover:scale-110 transition-transform" />
                                        <span>WhatsApp-da yaz</span>
                                        <FaArrowRight size={16}
                                            className="group-hover:translate-x-1 transition-transform" />
                                    </a>

                                    {/* Info */}
                                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        <span>İndi onlayn</span>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow - buttona doğru */}
                            <div
                                className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100" />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Sticky WhatsApp Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    delay: 0.5,
                    type: 'spring',
                    stiffness: 260,
                    damping: 20
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-16 h-16 rounded-full cursor-pointer flex items-center justify-center shadow-2xl transition-all duration-300 relative
                    ${isOpen
                        ? 'bg-gray-700 rotate-45'
                        : 'bg-[#25D366] hover:bg-[#128C7E] shadow-[#25D366]/40'
                    }
                `}
                aria-label="WhatsApp ilə əlaqə"
            >
                {isOpen ? (
                    <FaTimes size={28} className="text-white" />
                ) : (
                    <>
                        <FaWhatsapp size={32} className="text-white" />
                        {/* Pulse animation */}
                        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
                    </>
                )}

                {/* Notification dot */}
                {!isOpen && hasNewMessage && (
                    <span
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">1</span>
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;