"use client";

import React from "react";
import Link from "next/link";
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoSend,
    IoCall,
    IoMail,
    IoLocation,
    IoArrowForward
} from "react-icons/io5";
import Logo from "@/globalComponent/Logo";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { getTranslated } from "@/lib/api";

interface FooterProps {
    contact?: any;
    socials?: any[];
    locale: string;
}

const Footer: React.FC<FooterProps> = ({ contact, socials, locale }) => {
    const currentYear = new Date().getFullYear();
    const t = useTranslations();


    const footerLinks = {
        services: [
            { name: "Web İnkişaf", href: `/${locale}/services` },
            { name: "SaaS Modelləri", href: `/${locale}/services` },
            { name: "Mobil Tətbiqlər", href: `/${locale}/services` },
            { name: "CRM Sistemləri", href: `/${locale}/services` },
            { name: "SEO və Dəstək", href: `/${locale}/services` },
        ],
        company: [
            { name: "Haqqımızda", href: `/${locale}/about` },
            { name: "Məhsullar", href: `/${locale}/products` },
            { name: "İşlərimiz", href: `/${locale}/projects` },
            { name: "Bloq", href: `/${locale}/blogs` },
            { name: "Əlaqə", href: `/${locale}/contact` },
        ],
    };

    const getSocialIcon = (platform: string) => {
        const p = platform.toLowerCase();
        if (p.includes('facebook')) return <IoLogoFacebook size={22} />;
        if (p.includes('instagram')) return <IoLogoInstagram size={22} />;
        if (p.includes('linkedin')) return <IoLogoLinkedin size={22} />;
        if (p.includes('twitter')) return <IoLogoFacebook size={22} />; // fallback
        return <IoSend size={20} />;
    };

    const dynamicSocials = socials ? socials.map(s => ({
        icon: getSocialIcon(s.platform),
        href: s.url,
        label: s.platform
    })) : [];

    const tel = contact?.phone || "+90 552 153 23 28";
    const email = contact?.email || "info@neymantech.com";
    const address = getTranslated(contact, 'address', locale) || "Bakı, Azərbaycan";

    return (
        <footer className="relative bg-white text-gray-900 border-t border-gray-100 overflow-hidden">
            {/* Background Subtle Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/60 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50/40 blur-[120px] rounded-full pointer-events-none" />

            {/* Main Footer */}
            <div className="relative z-10 container py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="mb-4">
                            <Logo />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                            Startup və korporasiyalar üçün innovativ texniki həllər. Biznesinizi növbəti səviyyəyə qaldırmaq üçün yüksək texnologiya xidmətləri təqdim edirik.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4 pt-4">
                            <a
                                href={`tel:${tel.replace(/\s/g, '')}`}
                                className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-all duration-300 text-sm group w-fit"
                            >
                                <span className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100/50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_4px_15px_rgba(37,99,235,0.2)] transition-all">
                                    <IoCall size={18} />
                                </span>
                                <span className="font-medium tracking-wide">{tel}</span>
                            </a>
                            <a
                                href={`mailto:${email}`}
                                className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition-all duration-300 text-sm group w-fit"
                            >
                                <span className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100/50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_4px_15px_rgba(37,99,235,0.2)] transition-all">
                                    <IoMail size={18} />
                                </span>
                                <span className="font-medium tracking-wide">{email}</span>
                            </a>
                            <div className="flex items-center gap-4 text-gray-600 text-sm">
                                <span className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-100/50 flex items-center justify-center text-blue-600">
                                    <IoLocation size={18} />
                                </span>
                                <span className="font-medium tracking-wide leading-snug max-w-[200px]">{address}</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-widest relative inline-block">
                            Xidmətlər
                            <span className="absolute -bottom-2 left-0 w-1/2 h-[3px] bg-blue-600 rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-3 group font-medium"
                                    >
                                        <span className="w-0 h-[2px] bg-blue-600 group-hover:w-4 transition-all duration-300 ease-out" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-widest relative inline-block">
                            Şirkət
                            <span className="absolute -bottom-2 left-0 w-1/2 h-[3px] bg-blue-600 rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center gap-3 group font-medium"
                                    >
                                        <span className="w-0 h-[2px] bg-blue-600 group-hover:w-4 transition-all duration-300 ease-out" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Container */}
                    <div className="lg:col-span-3">
                        <div className="bg-gray-50/50 backdrop-blur-md rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                            <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                                Yeniliklər
                            </h4>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                Ən son xəbər və yeniliklərdən xəbərdar olun.
                            </p>
                            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Email ünvanınız"
                                        className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.2)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                                >
                                    Abunə Ol
                                    <IoArrowForward size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-gray-100 bg-gray-50/80 backdrop-blur-lg">
                <div className="container py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Copyright */}
                        <p className="text-gray-500 text-sm text-center md:text-left font-medium">
                            &copy; {currentYear} Neyman Enterprise Technologies.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {dynamicSocials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-600 hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(37,99,235,0.15)] transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;