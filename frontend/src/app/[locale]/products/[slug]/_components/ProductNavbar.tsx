"use client";

import React, { useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { getTranslated } from "@/lib/api";
import LanguageSwitcher from "@/ui/Header/LanguageSwitcher";

export const ProductNavbar = ({ product, locale }: { product: any, locale: string }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    const headerBg = useTransform(
        scrollY,
        [0, 50],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
    );
    const headerShadow = useTransform(
        scrollY,
        [0, 50],
        ["0 0 0 rgba(0,0,0,0)", "0 4px 20px rgba(0,0,0,0.1)"]
    );

    const themeColor = product.theme_color || 'blue';
    const ctaText = getTranslated(product, 'cta_text', locale) || 'Demo Sifariş Et';
    const ctaLink = product.cta_link || '#demo';

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors"
                style={{
                    backgroundColor: headerBg,
                    boxShadow: headerShadow,
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo / Title */}
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <Link href={`/${locale}/products`} className="text-gray-500 hover:text-gray-900 font-medium mr-4 hidden md:block">
                                ← {locale === 'en' ? 'All Products' : locale === 'ru' ? 'Все Продукты' : locale === 'tr' ? 'Tüm Ürünler' : 'Bütün Məhsullar'}
                            </Link>
                            {product.navbar_logo ? (
                                <img src={product.navbar_logo} alt={getTranslated(product, 'title', locale)} className="h-8" />
                            ) : (
                                <Link href="#" className="text-2xl font-black text-gray-900 tracking-tight">
                                    {getTranslated(product, 'title', locale)}
                                </Link>
                            )}
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {product.navbar_links?.map((link: any) => (
                                <a 
                                    key={link.id} 
                                    href={link.href}
                                    className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                                >
                                    {getTranslated(link, 'label', locale)}
                                </a>
                            ))}
                        </nav>

                        {/* CTA Button & Language */}
                        <div className="hidden md:flex items-center gap-4">
                            <LanguageSwitcher currentLocale={locale} />
                            <a 
                                href={ctaLink}
                                className={`px-6 py-2.5 rounded-xl font-bold text-white shadow-md shadow-${themeColor}-500/20 hover:-translate-y-0.5 transition-all`}
                                style={{ backgroundColor: themeColor === 'blue' ? '#2563eb' : themeColor === 'emerald' ? '#10b981' : themeColor === 'indigo' ? '#4f46e5' : themeColor }}
                            >
                                {ctaText}
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-gray-700 p-2"
                            >
                                {isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {product.navbar_links?.map((link: any) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {getTranslated(link, 'label', locale)}
                                </a>
                            ))}
                            <div className="py-3 flex justify-center border-t border-gray-100 mt-2 pt-4">
                                <LanguageSwitcher currentLocale={locale} />
                            </div>
                            <a 
                                href={ctaLink}
                                className="block w-full text-center mt-2 px-6 py-3 rounded-xl font-bold text-white shadow-md"
                                style={{ backgroundColor: themeColor === 'blue' ? '#2563eb' : themeColor === 'emerald' ? '#10b981' : themeColor === 'indigo' ? '#4f46e5' : themeColor }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {ctaText}
                            </a>
                        </div>
                    </div>
                )}
            </motion.header>
        </>
    );
};
