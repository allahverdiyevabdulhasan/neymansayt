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
import { getTranslated } from "@/lib/api";

interface FooterProps {
    contact?: any;
    socials?: any[];
    locale: string;
}

const Footer: React.FC<FooterProps> = ({ contact, socials, locale }) => {
    const currentYear = new Date().getFullYear();
    const t = useTranslations('Footer');
    const navT = useTranslations('Navigation');

    const footerLinks = {
        services: [
            { name: t('webDev'), href: `/${locale}/services` },
            { name: t('saas'), href: `/${locale}/services` },
            { name: t('mobile'), href: `/${locale}/services` },
            { name: t('crm'), href: `/${locale}/services` },
            { name: t('seo'), href: `/${locale}/services` },
        ],
        company: [
            { name: navT('about'), href: `/${locale}/about` },
            { name: navT('products'), href: `/${locale}/products` },
            { name: navT('projects'), href: `/${locale}/projects` },
            { name: navT('blogs'), href: `/${locale}/blogs` },
            { name: navT('contact'), href: `/${locale}/contact` },
        ],
    };

    const getSocialIcon = (platform: string) => {
        const p = (platform || '').toLowerCase();
        if (p.includes('facebook')) return <IoLogoFacebook size={20} />;
        if (p.includes('instagram')) return <IoLogoInstagram size={20} />;
        if (p.includes('linkedin')) return <IoLogoLinkedin size={20} />;
        if (p.includes('twitter')) return <IoLogoFacebook size={20} />; // fallback
        return <IoSend size={18} />;
    };

    const dynamicSocials = socials ? socials.map(s => ({
        icon: getSocialIcon(s.platform_name || s.platform),
        href: s.url,
        label: s.platform_name || s.platform || 'Social'
    })) : [];

    const tel = contact?.phone || "+994 77 331 26 53 / +90 552 153 23 28";
    const email = contact?.email || "info@neymantech.com";
    const address = getTranslated(contact, 'address', locale) || "Bakı, Azərbaycan";

    const tLocal = {
        az: {
            desc: "Startup və korporasiyalar üçün innovativ texniki həllər. Biznesinizi növbəti səviyyəyə qaldırmaq üçün yüksək texnologiya xidmətləri təqdim edirik.",
            subscribe: "Abunə Ol",
            subDesc: "Ən son texnologiya xəbərləri, yeniliklər və şirkətimiz haqqında məlumatlardan ilk siz xəbərdar olun.",
            placeholder: "Email ünvanınız",
            rights: "Bütün hüquqlar qorunur."
        },
        en: {
            desc: "Innovative technical solutions for startups and corporations. We offer high-tech services to take your business to the next level.",
            subscribe: "Subscribe",
            subDesc: "Be the first to know about the latest tech news, updates, and information about our company.",
            placeholder: "Your email address",
            rights: "All rights reserved."
        },
        ru: {
            desc: "Инновационные технические решения для стартапов и корпораций. Мы предлагаем высокотехнологичные услуги, чтобы вывести ваш бизнес на новый уровень.",
            subscribe: "Подписаться",
            subDesc: "Узнавайте первыми о последних новостях в мире технологий, обновлениях и информации о нашей компании.",
            placeholder: "Ваш адрес электронной почты",
            rights: "Все права защищены."
        },
        tr: {
            desc: "Girişimler ve şirketler için yenilikçi teknik çözümler. İşinizi bir sonraki seviyeye taşımak için yüksek teknoloji hizmetleri sunuyoruz.",
            subscribe: "Abone Ol",
            subDesc: "En son teknoloji haberleri, güncellemeler ve şirketimiz hakkındaki bilgilerden ilk siz haberdar olun.",
            placeholder: "E-posta adresiniz",
            rights: "Tüm hakları saklıdır."
        }
    }[locale as 'az' | 'en' | 'ru' | 'tr'] || {
        desc: "Startup və korporasiyalar üçün innovativ texniki həllər. Biznesinizi növbəti səviyyəyə qaldırmaq üçün yüksək texnologiya xidmətləri təqdim edirik.",
        subscribe: "Abunə Ol",
        subDesc: "Ən son texnologiya xəbərləri, yeniliklər və şirkətimiz haqqında məlumatlardan ilk siz xəbərdar olun.",
        placeholder: "Email ünvanınız",
        rights: "Bütün hüquqlar qorunur."
    };

    return (
        <footer className="relative bg-[#FAFAFC] pt-20 border-t border-blue-50 overflow-hidden">
            {/* Background Subtle Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            {/* Main Footer Container */}
            <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    
                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-white p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(37,99,235,0.04)] border border-blue-50/50 inline-block w-full">
                            <div className="mb-6">
                                <Logo />
                            </div>
                            <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
                                {tLocal.desc}
                            </p>
                            
                            {/* Contact Info Grid */}
                            <div className="space-y-4">
                                <a
                                    href={`tel:${tel.split('/')[0].trim().replace(/\s/g, '')}`}
                                    className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-all duration-300 text-[15px] group"
                                >
                                    <span className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.2)]">
                                        <IoCall size={20} />
                                    </span>
                                    <span className="font-bold tracking-wide">{tel}</span>
                                </a>
                                <a
                                    href={`mailto:${email}`}
                                    className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-all duration-300 text-[15px] group"
                                >
                                    <span className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.2)]">
                                        <IoMail size={20} />
                                    </span>
                                    <span className="font-bold tracking-wide">{email}</span>
                                </a>
                                <div className="flex items-center gap-4 text-slate-700 text-[15px]">
                                    <span className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                        <IoLocation size={20} />
                                    </span>
                                    <span className="font-medium tracking-wide leading-snug">{address}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns Container */}
                    <div className="lg:col-span-4 lg:ml-8 grid grid-cols-2 gap-8 pt-4">
                        {/* Services Links */}
                        <div>
                            <h4 className="font-black text-blue-950 mb-8 text-lg flex items-center gap-3">
                                <span className="w-6 h-1 bg-blue-600 rounded-full" />
                                {t('services')}
                            </h4>
                            <ul className="space-y-4">
                                {footerLinks.services.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-600 hover:text-blue-600 transition-colors text-[15px] flex items-center gap-3 group font-medium"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600 group-hover:scale-150 transition-all duration-300" />
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="font-black text-blue-950 mb-8 text-lg flex items-center gap-3">
                                <span className="w-6 h-1 bg-blue-600 rounded-full" />
                                {t('company')}
                            </h4>
                            <ul className="space-y-4">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-slate-600 hover:text-blue-600 transition-colors text-[15px] flex items-center gap-3 group font-medium"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600 group-hover:scale-150 transition-all duration-300" />
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Container */}
                    <div className="lg:col-span-4 pt-4">
                        <div className="bg-white rounded-[2.5rem] p-8 border border-blue-50 shadow-[0_20px_50px_rgba(37,99,235,0.06)] relative overflow-hidden h-full">
                            {/* Decorative element */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-50 rounded-full blur-[40px] pointer-events-none" />
                            
                            <h4 className="font-black text-blue-950 mb-4 text-2xl relative z-10">
                                {tLocal.subscribe}
                            </h4>
                            <p className="text-slate-600 text-[15px] mb-8 leading-relaxed relative z-10">
                                {tLocal.subDesc}
                            </p>
                            
                            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                        <IoMail className="text-slate-400" size={20} />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder={tLocal.placeholder}
                                        className="w-full pl-12 pr-5 py-4 bg-[#FAFAFC] border-2 border-slate-100 rounded-2xl text-[15px] font-medium text-blue-950 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-[0_8px_30px_rgba(37,99,235,0.2)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
                                >
                                    <span>{tLocal.subscribe}</span>
                                    <IoArrowForward size={20} className="group-hover:translate-x-1.5 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-blue-100/50 bg-white">
                <div className="container mx-auto px-4 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Copyright */}
                        <p className="text-slate-500 text-[15px] font-medium text-center md:text-left">
                            &copy; {currentYear} <span className="font-bold text-blue-950">Neyman Enterprise Technologies</span>. {tLocal.rights}
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {dynamicSocials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-2xl bg-[#FAFAFC] border border-blue-50 flex items-center justify-center text-slate-500 hover:text-white hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(37,99,235,0.2)] transition-all duration-300"
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