"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaGlobe } from "react-icons/fa";

const languages = [
    { code: "az", name: "AZ" },
    { code: "en", name: "EN" },
    { code: "ru", name: "RU" },
    { code: "tr", name: "TR" },
];

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleLanguageChange = (newLocale: string) => {
        router.replace(pathname as any, { locale: newLocale });
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const activeLanguage = languages.find((lang) => lang.code === currentLocale) || languages[0];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 font-bold text-sm transition-all py-2 px-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 shadow-sm"
            >
                <FaGlobe size={14} className="text-blue-600" />
                <span className="uppercase tracking-widest">{activeLanguage.name}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <FaChevronDown size={10} className="text-slate-400 ml-0.5" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-24 bg-white border border-blue-50 rounded-2xl shadow-[0_8px_30px_rgba(37,99,235,0.12)] overflow-hidden z-50 p-1.5"
                    >
                        <div className="flex flex-col gap-1">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    className={`flex items-center justify-center py-2 text-sm font-bold rounded-xl transition-all ${
                                        currentLocale === lang.code
                                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                                            : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                                    }`}
                                >
                                    <span className="tracking-widest">{lang.name}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
