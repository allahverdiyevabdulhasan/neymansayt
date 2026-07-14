// app/[locale]/contact/_components/ContactInfo.tsx
'use client';

import { getTranslated } from '@/lib/api';
import React from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaExternalLinkAlt,
    FaWhatsapp,
    FaYoutube,
    FaTiktok,
} from 'react-icons/fa';

interface ContactItem {
    id: string;
    icon: React.ElementType;
    title: string;
    content: string;
    subContent?: string;
    href?: string;
    color: string;
    bgColor: string;
}

interface ContactInfoProps {
    info: any;
    socials: any[];
    locale: string;
}

export default function ContactInfo({ info, socials, locale }: ContactInfoProps) {
    const contactItems: ContactItem[] = [
        {
            id: 'address',
            icon: FaMapMarkerAlt,
            title: locale === 'az' ? 'Ofis Ünvanımız' : locale === 'ru' ? 'Наш Адрес' : 'Our Address',
            content: getTranslated(info, 'address', locale) || 'Bakı, Azərbaycan',
            subContent: info?.working_hours || (locale === 'az' ? 'Həftə içi 09:00 - 18:00' : 'Weekdays 09:00 - 18:00'),
            href: `https://maps.google.com/?q=${info?.lat || '40.417211'},${info?.lng || '49.9349841'}`,
            color: 'text-blue-600',
            bgColor: 'bg-blue-100',
        },
        {
            id: 'phone',
            icon: FaPhoneAlt,
            title: locale === 'az' ? 'Telefon Nömrəsi' : locale === 'ru' ? 'Номер Телефона' : 'Phone Number',
            content: info?.phone || '+994 77 331 26 53 / +90 552 153 23 28',
            href: `tel:${info?.phone?.split('/')[0].trim().replace(/\s/g, '') || '+994773312653'}`,
            color: 'text-blue-600',
            bgColor: 'bg-blue-100',
        },
        {
            id: 'email',
            icon: FaEnvelope,
            title: locale === 'az' ? 'Email Ünvanı' : locale === 'ru' ? 'Электронная почта' : 'Email Address',
            content: info?.email || 'info@neymantech.com',
            href: `mailto:${info?.email || 'info@neymantech.com'}`,
            color: 'text-blue-600',
            bgColor: 'bg-blue-100',
        },
    ];

    const t = {
        az: {
            badge: "Əlaqə",
            title: "Bizimlə Əlaqə Saxlayın",
            desc: "Aşağıdakı üsullarla bizimlə əlaqə saxlaya bilərsiniz. Sosial mediada da bizi izləyin!",
        },
        en: {
            badge: "Contact",
            title: "Contact Us",
            desc: "You can reach us through the following methods. Follow us on social media too!",
        },
        ru: {
            badge: "Контакты",
            title: "Свяжитесь с нами",
            desc: "Вы можете связаться с нами следующими способами. Подписывайтесь на нас в социальных сетях!",
        },
        tr: {
            badge: "İletişim",
            title: "Bizimle İletişime Geçin",
            desc: "Aşağıdaki yöntemlerle bizimle iletişime geçebilirsiniz. Bizi sosyal medyada da takip edin!",
        }
    }[locale] || {
        badge: "Əlaqə",
        title: "Bizimlə Əlaqə Saxlayın",
        desc: "Aşağıdakı üsullarla bizimlə əlaqə saxlaya bilərsiniz. Sosial mediada da bizi izləyin!",
    };

    return (
        <div className="space-y-12">
            {/* Başlıq */}
            <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-bold tracking-wider uppercase shadow-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    {t.badge}
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-blue-950 mb-6 leading-tight">
                    {t.title}
                </h2>
                <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-md">
                    {t.desc}
                </p>
            </div>

            {/* Əlaqə kartları */}
            <div className="space-y-6">
                {contactItems.map((item) => (
                    <div key={item.id} className="group">
                        {item.href ? (
                            <a
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="flex items-start gap-6 p-8 rounded-[2rem] bg-white border border-blue-50 hover:border-blue-100 hover:shadow-[0_20px_50px_rgba(37,99,235,0.06)] hover:-translate-y-1 transition-all duration-300"
                            >
                                <ContactIcon
                                    icon={item.icon}
                                    color={item.color}
                                    bgColor={item.bgColor}
                                />
                                <ContactContent item={item} isLink />
                            </a>
                        ) : (
                            <div
                                className="flex items-start gap-6 p-8 rounded-[2rem] bg-white border border-blue-50 shadow-sm">
                                <ContactIcon
                                    icon={item.icon}
                                    color={item.color}
                                    bgColor={item.bgColor}
                                />
                                <ContactContent item={item} />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Sosial media */}
            <SocialLinks socials={socials} locale={locale} />

            {/* Quick Action Buttons */}
            <QuickActions info={info} locale={locale} />
        </div>
    );
}

function ContactIcon({
    icon: Icon,
    color,
    bgColor,
}: {
    icon: React.ElementType;
    color: string;
    bgColor: string;
}) {
    return (
        <div className={`
            flex-shrink-0 w-16 h-16 ${bgColor} rounded-2xl 
            flex items-center justify-center ${color} 
            shadow-sm transition-all duration-500
            group-hover:scale-110 group-hover:rotate-3 group-hover:bg-blue-600 group-hover:text-white
            border border-white
        `}>
            <Icon size={24} />
        </div>
    );
}

function ContactContent({ item, isLink }: { item: ContactItem; isLink?: boolean }) {
    return (
        <div className="flex-1 min-w-0 pt-1">
            <h3 className="font-bold text-slate-500 mb-2 flex items-center gap-2 text-sm uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                {item.title}
                {isLink && (
                    <FaExternalLinkAlt
                        size={12}
                        className="text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                    />
                )}
            </h3>
            <p className="text-blue-950 font-black text-xl mb-1 group-hover:text-blue-700 transition-colors">
                {item.content}
            </p>
            {item.subContent && (
                <p className="text-sm text-slate-500 font-medium flex items-center gap-2 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                    {item.subContent}
                </p>
            )}
        </div>
    );
}

function getSocialIcon(iconName: string) {
    switch (iconName?.toLowerCase()) {
        case 'facebook': return FaFacebookF;
        case 'instagram': return FaInstagram;
        case 'twitter': return FaTwitter;
        case 'linkedin': return FaLinkedinIn;
        case 'youtube': return FaYoutube;
        case 'tiktok': return FaTiktok;
        case 'whatsapp': return FaWhatsapp;
        default: return FaExternalLinkAlt;
    }
}

function getSocialColors(iconName: string) {
    switch (iconName?.toLowerCase()) {
        case 'facebook': return { bgColor: 'bg-blue-600', hoverColor: 'hover:bg-blue-700' };
        case 'instagram': return { bgColor: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500', hoverColor: 'hover:opacity-90' };
        case 'twitter': return { bgColor: 'bg-sky-500', hoverColor: 'hover:bg-sky-600' };
        case 'linkedin': return { bgColor: 'bg-blue-700', hoverColor: 'hover:bg-blue-800' };
        case 'youtube': return { bgColor: 'bg-red-600', hoverColor: 'hover:bg-red-700' };
        case 'whatsapp': return { bgColor: 'bg-green-500', hoverColor: 'hover:bg-green-600' };
        default: return { bgColor: 'bg-slate-600', hoverColor: 'hover:bg-slate-700' };
    }
}

function SocialLinks({ socials, locale }: { socials: any[], locale: string }) {
    if (!socials || socials.length === 0) return null;

    const followText = locale === 'az' ? 'Sosial Şəbəkələrdə Bizi İzləyin' 
                     : locale === 'ru' ? 'Следите за нами в социальных сетях' 
                     : locale === 'tr' ? 'Bizi Sosyal Medyada Takip Edin' 
                     : 'Follow Us on Social Media';

    return (
        <div className="pt-10 border-t border-slate-200/60">
            <h4 className="font-bold text-blue-950 mb-6 flex items-center gap-3 text-lg">
                <span className="w-8 h-1 bg-blue-600 rounded-full" />
                {followText}
            </h4>
            <div className="flex flex-wrap gap-4">
                {socials.map((social) => {
                    const Icon = getSocialIcon(social.icon_name || social.platform_name);
                    const colors = getSocialColors(social.icon_name || social.platform_name);
                    return (
                        <a
                            key={social.id}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                w-14 h-14 ${colors.bgColor} ${colors.hoverColor} 
                                text-white rounded-2xl flex items-center justify-center 
                                shadow-lg hover:scale-110 hover:-translate-y-1 
                                transition-all duration-300
                            `}
                            aria-label={social.platform_name}
                            title={social.platform_name}
                        >
                            <Icon size={24} />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

function QuickActions({ info, locale }: { info: any, locale: string }) {
    const phone = info?.phone || '+994 50 123 45 67';
    const cleanPhone = phone.replace(/\s/g, '');
    const whatsappNum = cleanPhone.replace('+', '');
    const callText = locale === 'az' ? 'İndi Zəng Et' : locale === 'ru' ? 'Позвонить' : 'Call Now';
    return (
        <div className="grid grid-cols-2 gap-4 pt-4">
            <a
                href={`tel:${cleanPhone}`}
                className="flex items-center justify-center gap-3 px-6 py-5 bg-white border border-blue-100 text-blue-600 rounded-2xl font-bold hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 group"
            >
                <FaPhoneAlt size={18} className="group-hover:rotate-12 transition-transform" />
                <span>{callText}</span>
            </a>
            <a
                href={`https://wa.me/${whatsappNum}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-5 bg-[#25D366] border border-[#25D366] text-white rounded-2xl font-bold hover:shadow-[0_8px_30px_rgba(37,211,102,0.25)] hover:-translate-y-1 transition-all duration-300 group"
            >
                <FaWhatsapp size={22} className="group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
            </a>
        </div>
    );
}