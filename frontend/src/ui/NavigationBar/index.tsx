"use client";

import React from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import {IoChevronForward, IoHome} from "react-icons/io5";

// Types
interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageHeroProps {
    title?: string;
    subtitle?: string;
    breadcrumbs?: BreadcrumbItem[];
    background?: "white" | "blue" | "gradient";
    align?: "left" | "center";
}

// Page Hero Component
const PageHero: React.FC<PageHeroProps> = ({
                                               title,
                                               subtitle,
                                               breadcrumbs = [],
                                               background = "white",
                                               align = "left",
                                           }) => {
    const bgStyles = {
        white: "bg-white border-b border-gray-100/80",
        blue: "bg-gradient-to-br from-blue-600 to-blue-700",
        gradient: "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900",
    };

    const textStyles = {
        white: {
            title: "text-blue-950",
            subtitle: "text-slate-600",
            breadcrumb: "text-slate-500 hover:text-blue-600",
            breadcrumbActive: "text-blue-950 font-semibold",
        },
        blue: {
            title: "text-white",
            subtitle: "text-blue-100",
            breadcrumb: "text-blue-200 hover:text-white",
            breadcrumbActive: "text-white font-semibold",
        },
        gradient: {
            title: "text-white",
            subtitle: "text-blue-100/90",
            breadcrumb: "text-blue-200/80 hover:text-white",
            breadcrumbActive: "text-white font-semibold",
        },
    };

    const currentText = textStyles[background];

    return (
        <section
            className={`relative py-16 lg:py-24 overflow-hidden ${bgStyles[background]}`}
        >
            {/* Ambient Background Glows */}
            {background === "white" ? (
                <>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/30 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3" />
                </>
            ) : (
                <>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />
                </>
            )}

            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />

            <div
                className={`relative z-10 container ${
                    align === "center" ? "text-center mx-auto" : ""
                }`}
            >
                {/* Breadcrumbs */}
                {breadcrumbs.length > 0 && (
                    <motion.nav
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.4}}
                        className={`flex items-center gap-2 text-[14px] font-medium ${title ? "mb-6" : ""} ${
                            align === "center" ? "justify-center" : ""
                        }`}
                    >
                        <Link
                            href="/"
                            className={`flex items-center gap-1.5 transition-colors ${currentText.breadcrumb}`}
                        >
                            <IoHome size={14}/>
                            <span>Ana səhifə</span>
                        </Link>

                        {breadcrumbs.map((item) => (
                            <React.Fragment key={item.label}>
                                <IoChevronForward
                                    size={12}
                                    className="opacity-50"
                                />
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className={`transition-colors ${currentText.breadcrumb}`}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className={currentText.breadcrumbActive}>
                                        {item.label}
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                    </motion.nav>
                )}

                {title && (
                    <motion.h1
                        initial={{opacity: 0, y: 15}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight ${
                            align === "center" ? "max-w-3xl mx-auto" : "max-w-2xl"
                        } ${currentText.title}`}
                    >
                        {title}
                    </motion.h1>
                )}
                
                {/* Subtitle */}
                {subtitle && (
                    <motion.p
                        initial={{opacity: 0, y: 15}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className={`mt-6 text-lg lg:text-xl font-medium leading-relaxed ${
                            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
                        } ${currentText.subtitle}`}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    );
};

export default PageHero;
