"use client";

import React, {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {IoArrowForward, IoClose} from "react-icons/io5";
import Link from "next/link";

const StickyCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200 && !isDismissed) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isDismissed]);

    const handleDismiss = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsDismissed(true);
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{y: 100, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    exit={{y: 100, opacity: 0}}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 200
                    }}
                    className="fixed bottom-0 left-0 right-0 z-20"
                >
                    <div className="max-w-full">
                        <div
                            className="bg-white shadow-blue-900/20 border border-gray-100 overflow-hidden">
                            <div className="container py-5">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    {/* Left Content */}
                                    <div className="flex-1">
                                        <h3 className="text-gray-900 font-bold text-lg sm:text-xl mb-1">
                                            Layihənizi başlamağa hazırsınız?
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            Pulsuz konsultasiya əldə edin
                                        </p>
                                    </div>

                                    {/* Right Content - Button & Close */}
                                    <div className="flex items-center gap-3 w-full sm:w-auto">
                                        <Link
                                            href="/contact"
                                            className="flex-1 sm:flex-none group inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2563eb] text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 whitespace-nowrap"
                                        >
                                            Əlaqə Saxla
                                            <IoArrowForward
                                                size={16}
                                                className="group-hover:translate-x-1 transition-transform"
                                            />
                                        </Link>

                                        {/* Close Button */}
                                        <button
                                            type={"button"}
                                            onClick={handleDismiss}
                                            className="w-10 cursor-pointer h-10 flex-shrink-0 flex items-center justify-center rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                                            aria-label="Bağla"
                                        >
                                            <IoClose size={20}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                className="h-1 bg-gradient-to-r from-[#2563eb] to-[#1e40af]"
                                initial={{scaleX: 0}}
                                animate={{scaleX: 1}}
                                transition={{duration: 0.5, delay: 0.2}}
                                style={{transformOrigin: "left"}}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyCTA;