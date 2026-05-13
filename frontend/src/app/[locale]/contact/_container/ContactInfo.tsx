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
            content: info?.phone || '+994 50 123 45 67',
            href: `tel:${info?.phone?.replace(/\s/g, '') || '+994501234567'}`,
            color: 'text-green-600',
            bgColor: 'bg-green-100',
        },
        {
            id: 'email',
            icon: FaEnvelope,
            title: locale === 'az' ? 'Email Ünvanı' : locale === 'ru' ? 'Электронная почта' : 'Email Address',
            content: info?.email || 'info@company.az',
            href: `mailto:${info?.email || 'info@company.az'}`,
            color: 'text-purple-600',
            bgColor: 'bg-purple-100',
        },
    ];

    return (
        <div className="space-y-8">
            {/* Başlıq */}
            <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                        Əlaqə
                    </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    Bizimlə Əlaqə Saxlayın
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                    Aşağıdakı üsullarla bizimlə əlaqə saxlaya bilərsiniz.
                    Sosial mediada da bizi izləyin!
                </p>
            </div>

            {/* Əlaqə kartları */}
            <div className="space-y-5">
                {contactItems.map((item) => (
                    <div key={item.id} className="group">
                        {item.href ? (
                            <a
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
                                className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
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
            <SocialLinks socials={socials} />

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
            flex-shrink-0 w-14 h-14 ${bgColor} rounded-2xl 
            flex items-center justify-center ${color} 
            shadow-lg transition-all duration-300
            group-hover:scale-110 group-hover:rotate-3
        `}>
            <Icon size={24} />
        </div>
    );
}

function ContactContent({ item, isLink }: { item: ContactItem; isLink?: boolean }) {
    return (
        <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-lg group-hover:text-blue-600 transition-colors">
                {item.title}
                {isLink && (
                    <FaExternalLinkAlt
                        size={14}
                        className="text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                    />
                )}
            </h3>
            <p className="text-gray-800 font-semibold text-lg mb-1">
                {item.content}
            </p>
            {item.subContent && (
                <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
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
        default: return { bgColor: 'bg-gray-600', hoverColor: 'hover:bg-gray-700' };
    }
}

function SocialLinks({ socials }: { socials: any[] }) {
    if (!socials || socials.length === 0) return null;

    return (
        <div className="pt-8 border-t border-gray-200">
            <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-3 text-lg">
                <span className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                Sosial Şəbəkələrdə Bizi İzləyin
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
                                w-12 h-12 ${colors.bgColor} ${colors.hoverColor} 
                                text-white rounded-xl flex items-center justify-center 
                                shadow-lg hover:scale-110 hover:-translate-y-1 
                                transition-all duration-300
                            `}
                            aria-label={social.platform_name}
                            title={social.platform_name}
                        >
                            <Icon size={20} />
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
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-green-600/30 hover:scale-[1.02] transition-all duration-300"
            >
                <FaPhoneAlt size={18} />
                <span>{callText}</span>
            </a>
            <a
                href={`https://wa.me/${whatsappNum}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-[#25D366]/30 hover:scale-[1.02] transition-all duration-300"
            >
                <FaWhatsapp size={20} />
                <span>WhatsApp</span>
            </a>
        </div>
    );
}