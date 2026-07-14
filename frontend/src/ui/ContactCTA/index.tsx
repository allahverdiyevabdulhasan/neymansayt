"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoCall, IoMail, IoLogoWhatsapp, IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface ContactCTAProps {
  variant?: "light" | "dark" | "blue";
  showTitle?: boolean;
}

const ContactCTA: React.FC<ContactCTAProps> = ({
  variant = "blue",
  showTitle = true,
}) => {
    const t = useTranslations('ContactCTA');

    const contacts = [
        {
            icon: <IoCall size={24} />,
            title: t('call'),
            value: "+994 77 331 26 53 / +90 552 153 23 28",
            href: "tel:+994773312653",
            label: t('callDesc'),
        },
        {
            icon: <IoLogoWhatsapp size={24} />,
            title: t('whatsapp'),
            value: "+994 77 331 26 53",
            href: "https://wa.me/994773312653",
            label: t('whatsappDesc'),
        },
        {
            icon: <IoMail size={24} />,
            title: t('email'),
            value: "info@neymantech.com",
            href: "mailto:info@neymantech.com",
            label: t('emailDesc'),
        },
    ];

    return (
        <section className={`relative py-16 lg:py-24 overflow-hidden bg-[#FAFAFC]`}>
            {/* Background Ornaments */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-[#FAFAFC] to-[#FAFAFC] pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                {showTitle && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className={`text-3xl lg:text-5xl font-black text-blue-950 mb-6 leading-tight`}>
                            {t('title')}
                        </h2>
                        <p className={`text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed`}>
                            {t('desc')}
                        </p>
                    </motion.div>
                )}

                {/* Contact Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {contacts.map((contact) => (
                        <Link
                            key={contact.title}
                            href={contact.href}
                            target={contact.href.startsWith("http") ? "_blank" : undefined}
                            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={`group p-8 lg:p-10 rounded-[2.5rem] bg-white border border-blue-50/50 hover:border-blue-100 shadow-[0_20px_50px_rgba(37,99,235,0.04)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center`}
                        >
                            <div className={`w-16 h-16 rounded-[1.5rem] bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm`}>
                                {contact.icon}
                            </div>

                            <h3 className={`text-xl font-bold text-slate-500 mb-2`}>
                                {contact.title}
                            </h3>

                            <p className={`text-2xl lg:text-3xl font-black text-blue-950 mb-3 group-hover:text-blue-600 transition-colors`}>
                                {contact.value}
                            </p>

                            <p className={`text-[15px] text-slate-500 font-medium`}>{contact.label}</p>
                        </Link>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-16 text-center"
                >
                    <Link
                        href="/contact"
                        className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 shadow-[0_8px_30px_rgba(37,99,235,0.2)] hover:-translate-y-1 group`}
                    >
                        {t('fillFormBtn')}
                        <IoArrowForward
                            className="group-hover:translate-x-1.5 transition-transform"
                            size={20}
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactCTA;
