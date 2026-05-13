"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoArrowForward, IoMail, IoCall } from "react-icons/io5";
import Link from "next/link";

interface CTAProps {
    data: any;
    contact: any;
    locale: string;
}

const CTASection: React.FC<CTAProps> = ({ data, contact, locale }) => {
    const badge = data?.badge_text || "Layihənizə Başlamağa Hazırsınız?";
    const title = data?.title || "Gəlin birlikdə möhtəşəm şeylər yaradaq";
    const description = data?.description || "İdeyanızı bizimlə bölüşün. Pulsuz konsultasiya ilə layihənizin ən yaxşı yol xəritəsini birlikdə çəkək.";

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background - NEYMAN Blue */}
            <div className="absolute inset-0 bg-[#2563eb]" />

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[80px]" />
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                              linear-gradient(to bottom, white 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8">
                        {badge}
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    dangerouslySetInnerHTML={{ __html: title }}
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    {description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <Link
                        href={`/${locale}/contact`}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#2563eb] font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-xl shadow-blue-900/20"
                    >
                        Pulsuz Konsultasiya Al
                        <IoArrowForward className="group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>

                    <Link
                        href={`/${locale}/projects`}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                    >
                        İşlərimizə Bax
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
                >
                    {contact?.email && (
                        <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <IoMail size={18} />
                            </div>
                            <span className="text-sm font-medium">{contact.email}</span>
                        </a>
                    )}

                    {contact?.phone && (
                        <>
                            <div className="hidden sm:block w-px h-8 bg-white/20" />
                            <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <IoCall size={18} />
                                </div>
                                <span className="text-sm font-medium">{contact.phone}</span>
                            </a>
                        </>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;