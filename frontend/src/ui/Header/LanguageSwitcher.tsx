"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const languages = [
    { code: "az", name: "Az", fullName: "Azərbaycanca" },
    { code: "tr", name: "Tr", fullName: "Türkçe" },
    { code: "en", name: "En", fullName: "English" },
    { code: "ru", name: "Ru", fullName: "Русский" },
];

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleLanguageChange = (newLocale: string) => {
        // usePathname from next-intl already strips the locale prefix
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
                className="flex items-center gap-2 text-slate-800 hover:text-blue-600 font-semibold text-[15px] transition-colors py-2 px-3 rounded-lg hover:bg-gray-100/50"
            >
                <span className="uppercase">{activeLanguage.name}</span>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <FaChevronDown size={12} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden z-50"
                    >
                        <div className="flex flex-col py-1">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    className={`flex items-center px-4 py-2.5 text-[14px] text-left transition-colors ${
                                        currentLocale === lang.code
                                            ? "bg-blue-50 text-blue-600 font-bold"
                                            : "text-slate-700 hover:bg-gray-50 hover:text-blue-600 font-medium"
                                    }`}
                                >
                                    <span className="w-6 opacity-70 text-[12px] uppercase">{lang.code}</span>
                                    <span>{lang.fullName}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
