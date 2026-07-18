"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = "hidden";
        
        // Total animation time: 1.2s for line + 0.2s pause = 1.4s
        const timer = setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                document.body.style.overflow = "unset";
            }, 800); // Wait for exit animation to finish
        }, 1600); 

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <div className="fixed inset-0 z-[99999] pointer-events-none flex flex-col overflow-hidden">
                    {/* Top Panel */}
                    <motion.div
                        initial={{ y: "0%" }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                        className="flex-1 bg-[#FAFAFC] w-full flex items-end justify-center pb-3"
                    >
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="text-blue-600 font-black text-5xl md:text-6xl tracking-tighter"
                        >
                            NEYMAN
                        </motion.div>
                    </motion.div>

                    {/* The Progress Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                        className="h-[2px] md:h-[3px] w-full bg-blue-600 origin-left z-10"
                    />

                    {/* Bottom Panel */}
                    <motion.div
                        initial={{ y: "0%" }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                        className="flex-1 bg-[#FAFAFC] w-full flex items-start justify-center pt-4"
                    >
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            className="text-slate-400 font-medium text-[10px] md:text-xs tracking-[0.4em] uppercase"
                        >
                            Enterprise Technologies
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
