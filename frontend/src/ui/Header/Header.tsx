"use client";

import React, { useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaInstagram,
    FaArrowRight,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "@/globalComponent/Logo";
import { MotionDiv, MotionHeader, MotionLink } from "@/lib/motion";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileSidebar from "@/ui/Sidebar";
import { navLinks } from "@/data/constant";
import { NavLink } from "@/data/interface";
import { usePathname } from "next/navigation";

interface HeaderProps {
    contact?: any;
    socials?: any[];
    locale: string;
}

const Header: React.FC<HeaderProps> = ({ contact, socials, locale }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { scrollY } = useScroll();
    const headerTopHeight = useTransform(scrollY, [0, 100], [40, 0]);
    const headerTopOpacity = useTransform(scrollY, [0, 50], [1, 0]);
    const headerBg = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"],
    );
    const headerShadow = useTransform(
        scrollY,
        [0, 100],
        ["0 0 0 rgba(0,0,0,0)", "0 4px 20px rgba(0,0,0,0.1)"],
    );

    // Dynamic social icons mapping
    const getSocialIcon = (platform: string) => {
        const p = platform.toLowerCase();
        if (p.includes('facebook')) return <FaFacebookF size={14} />;
        if (p.includes('linkedin')) return <FaLinkedinIn size={14} />;
        if (p.includes('twitter')) return <FaTwitter size={14} />;
        if (p.includes('instagram')) return <FaInstagram size={14} />;
        return <FaFacebookF size={14} />;
    };

    const dynamicSocials = socials ? socials.map(s => ({
        icon: getSocialIcon(s.platform),
        href: s.url,
        label: s.platform
    })) : [];

    const handleClose = () => {
        setIsMobileMenuOpen(false);
    };

    const tel = contact?.phone || "+90 552 153 23 28";
    const email = contact?.email || "info@neymantech.com";

    return (
        <>
            <MotionHeader
                className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md"
                style={{
                    backgroundColor: headerBg,
                    boxShadow: headerShadow,
                }}
            >
                <MotionDiv
                    className="border-b border-gray-200/20 hidden lg:block overflow-hidden bg-gray-50/50"
                    style={{
                        height: headerTopHeight,
                        opacity: headerTopOpacity,
                    }}
                >
                    <div className="container h-full">
                        <div className="flex items-center justify-between h-full text-xs font-medium">
                            <div className="flex items-center gap-6">
                                <MotionLink
                                    href={`tel:${tel.replace(/\s/g, '')}`}
                                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                                    aria-label="Call Us"
                                >
                                    <FaPhoneAlt className="text-blue-600" />
                                    <span className="hidden sm:inline">{tel}</span>
                                </MotionLink>

                                <MotionLink
                                    href={`mailto:${email}`}
                                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                                    aria-label="Email Us"
                                >
                                    <FaEnvelope className="text-blue-600" />
                                    <span className="hidden sm:inline">{email}</span>
                                </MotionLink>
                            </div>

                            <div className="flex items-center gap-4">
                                {dynamicSocials.map((social, index) => (
                                    <MotionLink
                                        key={index}
                                        href={social.href}
                                        className="text-gray-600 hover:text-blue-600 transition-colors"
                                        aria-label={social.label}
                                        whileHover={{ y: -2 }}
                                    >
                                        {social.icon}
                                    </MotionLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </MotionDiv>

                {/* Main Nav */}
                <div className="container">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo - Left */}
                        <div className="lg:w-1/4 flex justify-start">
                            <Logo />
                        </div>

                        {/* Nav Links - Center */}
                        <nav className="hidden lg:flex items-center justify-center gap-8 lg:w-2/4">
                            {navLinks.map((link: NavLink) => (
                                <Link
                                    key={link.name}
                                    href={`/${locale}${link.href}`}
                                    className="text-slate-800 hover:text-blue-600 font-semibold text-[15px] capitalize tracking-wide transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA & Language - Right */}
                        <div className="hidden lg:flex items-center justify-end lg:w-1/4 gap-4">
                            <LanguageSwitcher currentLocale={locale} />
                            <MotionLink
                                href={`/${locale}/contact`}
                                className="flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-xl font-bold text-[14px] capitalize tracking-wide hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Layihəni Müzakirə Edək
                                <FaArrowRight />
                            </MotionLink>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden p-2 text-gray-900"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle Menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                        </button>
                    </div>
                </div>
            </MotionHeader>
            <MobileSidebar isOpen={isMobileMenuOpen} onClose={handleClose} />
        </>
    );
};

export default Header;
