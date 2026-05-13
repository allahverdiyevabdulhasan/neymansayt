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
        white: "bg-white border-b border-gray-100",
        blue: "bg-[#2563eb]",
        gradient: "bg-gradient-to-br from-[#2563eb] to-blue-700",
    };

    const textStyles = {
        white: {
            title: "text-gray-900",
            subtitle: "text-gray-600",
            breadcrumb: "text-gray-500",
            breadcrumbActive: "text-gray-900",
        },
        blue: {
            title: "text-white",
            subtitle: "text-blue-100",
            breadcrumb: "text-blue-200",
            breadcrumbActive: "text-white",
        },
        gradient: {
            title: "text-white",
            subtitle: "text-blue-100",
            breadcrumb: "text-blue-200",
            breadcrumbActive: "text-white",
        },
    };

    const currentText = textStyles[background];

    return (
        <section
            className={`relative py-10 overflow-hidden ${bgStyles[background]}`}
        >
            {/* Background Pattern (for colored backgrounds) */}
            {(background === "blue" || background === "gradient") && (
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: "40px 40px",
                        }}
                    />
                </div>
            )}

            <div
                className={`relative z-10 container ${
                    align === "center" ? "text-center" : ""
                }`}
            >
                {/* Breadcrumbs */}
                {breadcrumbs.length > 0 && (
                    <motion.nav
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.4}}
                        className={`flex items-center gap-2 text-sm ${title ? "mb-6" : ""} ${
                            align === "center" ? "justify-center" : ""
                        }`}
                    >
                        <Link
                            href="/"
                            className={`flex items-center gap-1 hover:opacity-70 transition-opacity ${currentText.breadcrumb}`}
                        >
                            <IoHome size={14}/>
                            <span className="hidden sm:inline">Ana səhifə</span>
                        </Link>

                        {breadcrumbs.map((item) => (
                            <React.Fragment key={item.label}>
                                <IoChevronForward
                                    size={14}
                                    className={currentText.breadcrumb}
                                />
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className={`hover:opacity-70 transition-opacity ${currentText.breadcrumb}`}
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

                {title &&
                    <motion.strong
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${
                            align === "center" ? "max-w-3xl mx-auto" : "max-w-2xl"
                        } ${currentText.title}`}
                    >
                        {title}
                    </motion.strong>
                }
                {/* Subtitle */}
                {subtitle && (
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className={`mt-4 text-lg lg:text-xl ${
                            align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"
                        } ${currentText.subtitle}`}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    )
        ;
};

export default PageHero;
