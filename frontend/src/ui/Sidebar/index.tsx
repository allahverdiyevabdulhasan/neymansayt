"use client";

import React, {useState, useEffect} from "react";
import {motion, AnimatePresence, type Variants, type Transition} from "framer-motion";
import {
    IoClose,
    IoArrowForward,
    IoCall,
    IoMail,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoSend
} from "react-icons/io5";
import Logo from "@/globalComponent/Logo";
import Link from "next/link";
import {navLinks} from "@/data/constant";
import {NavLink} from "@/data/interface";
import { useTranslations } from "next-intl";

interface SocialLink {
    icon: React.ReactNode;
    href: string;
    label: string;
}

interface MobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({isOpen, onClose}) => {
    const t = useTranslations('Sidebar');
    const navT = useTranslations('Navigation');
    const [activeLink, setActiveLink] = useState("/");

    // Lock body scroll when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);



    const socialLinks: SocialLink[] = [
        {icon: <IoLogoFacebook size={20}/>, href: "#", label: "Facebook"},
        {icon: <IoLogoInstagram size={20}/>, href: "#", label: "Instagram"},
        {icon: <IoLogoLinkedin size={20}/>, href: "#", label: "LinkedIn"},
        {icon: <IoSend size={18}/>, href: "#", label: "Telegram"},
    ];

    // Animation variants with proper types
    const overlayVariants: Variants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {duration: 0.3}
        },
        exit: {
            opacity: 0,
            transition: {duration: 0.3, delay: 0.2}
        }
    };

    const sidebarVariants: Variants = {
        hidden: {x: "100%"},
        visible: {
            x: 0,
            transition: {
                type: "spring" as const,
                damping: 30,
                stiffness: 300,
                delay: 0.1
            }
        },
        exit: {
            x: "100%",
            transition: {
                type: "spring" as const,
                damping: 30,
                stiffness: 300
            }
        }
    };

    const linkContainerVariants: Variants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3
            }
        }
    };

    const linkVariants: Variants = {
        hidden: {opacity: 0, x: 50},
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 100
            }
        }
    };

    const footerVariants: Variants = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.6,
                duration: 0.4
            }
        }
    };

    const springTransition: Transition = {
        type: "spring",
        damping: 20,
        stiffness: 100
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm overflow-hidden z-[90] lg:hidden"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                    />

                    {/* Sidebar - Ağ fon */}
                    <motion.div
                        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[100] lg:hidden flex flex-col shadow-2xl"
                        variants={sidebarVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <motion.div
                                initial={{opacity: 0, scale: 0.8}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{delay: 0.2}}
                            >
                                <Logo/>
                            </motion.div>

                            <motion.button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                                whileHover={{scale: 1.1, rotate: 90}}
                                whileTap={{scale: 0.9}}
                                initial={{opacity: 0, rotate: -90}}
                                animate={{opacity: 1, rotate: 0}}
                                transition={{delay: 0.3}}
                            >
                                <IoClose size={24}/>
                            </motion.button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 px-6 py-8 overflow-y-auto">
                            <motion.div
                                className="space-y-3"
                                variants={linkContainerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {navLinks.map((link:NavLink) => {
                                    const isActive = activeLink === link.href;

                                    return (
                                        <motion.div
                                            key={link.translationKey}
                                            variants={linkVariants}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => {
                                                    setActiveLink(link.href);
                                                    setTimeout(onClose, 200);
                                                }}
                                                className={`group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                                                    isActive
                                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                                                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600 border border-gray-100"
                                                }`}
                                            >
                                                <span className="text-lg font-semibold">{navT(link.translationKey)}</span>
                                                <motion.span
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                                        isActive
                                                            ? "bg-white/20"
                                                            : "bg-gray-100 group-hover:bg-blue-50"
                                                    }`}
                                                    whileHover={{rotate: 45}}
                                                    transition={{duration: 0.2}}
                                                >
                                                    <IoArrowForward
                                                        size={18}
                                                        className={isActive ? "text-white" : "text-gray-500 group-hover:text-blue-600"}
                                                    />
                                                </motion.span>
                                            </Link>
                                        </motion.div>
                                    );
                                })}

                                {/* CRM Demo Button - Special */}
                                <motion.div variants={linkVariants}>
                                    <Link
                                        href="/crm"
                                        onClick={onClose}
                                        className="group flex items-center justify-between p-4 mt-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/30 border border-blue-500/30"
                                    >
                                        <span className="text-lg font-bold">{t('crmDemo')}</span>
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="text-xs bg-white/20 px-2 py-1 rounded-full font-medium">{t('demoLabel')}</span>
                                            <motion.div
                                                className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"
                                                animate={{x: [0, 4, 0]}}
                                                transition={{repeat: Infinity, duration: 1.5}}
                                            >
                                                <IoArrowForward size={18}/>
                                            </motion.div>
                                        </div>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </nav>

                        {/* Footer Info */}
                        <motion.div
                            className="p-6 bg-gray-50 border-t border-gray-100"
                            variants={footerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {/* Contact Info */}
                            <div className="flex flex-col gap-5 mb-6">
                                <div>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-2 font-bold">
                                        {t('emailLabel')}
                                    </p>
                                    <a
                                        href="mailto:info@neymantech.com"
                                        className="text-gray-700 text-sm hover:text-blue-600 transition-colors flex items-center gap-2 font-medium"
                                    >
                                        <IoMail size={16} className="text-blue-600 flex-shrink-0"/>
                                        <span className="break-all">info@neymantech.com</span>
                                    </a>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-2 font-bold">
                                        {t('phoneLabel')}
                                    </p>
                                    <div className="flex items-start gap-2">
                                        <IoCall size={16} className="text-blue-600 flex-shrink-0 mt-0.5"/>
                                        <div className="flex flex-col gap-1">
                                            <a href="tel:+994773312653" className="text-gray-700 text-sm hover:text-blue-600 transition-colors font-medium">
                                                +994 77 331 26 53
                                            </a>
                                            <a href="tel:+905521532328" className="text-gray-700 text-sm hover:text-blue-600 transition-colors font-medium">
                                                +90 552 153 23 28
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-4 font-bold">
                                    {t('followUs')}
                                </p>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-sm"
                                            initial={{opacity: 0, scale: 0}}
                                            animate={{opacity: 1, scale: 1}}
                                            transition={{delay: 0.7 + index * 0.1}}
                                            whileHover={{y: -4, scale: 1.1}}
                                            whileTap={{scale: 0.9}}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileSidebar;