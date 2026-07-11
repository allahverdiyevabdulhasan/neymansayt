"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCheckmark, IoChevronForward } from "react-icons/io5";
import { MotionButton, MotionDiv, MotionP } from "@/lib/motion";

// Types
interface Step {
    number: string;
    title: string;
    description: string;
    duration: string;
    deliverables: string[];
}

interface ProcessStepProps {
    step: Step;
    isActive: boolean;
    onClick: () => void;
    index: number;
}

interface ProcessDetailProps {
    step: Step;
    totalSteps: number;
    currentIndex: number;
}

// Step Card Component
const ProcessStep: React.FC<ProcessStepProps> = ({ step, isActive, onClick, index }) => {
    return (
        <MotionButton
            onClick={onClick}
            className={`relative w-full cursor-pointer text-left transition-all duration-300 ${isActive ? "z-10" : "z-0"}`}
            whileHover={{ x: isActive ? 0 : 4 }}
            whileTap={{ scale: 0.98 }}
        >
            <div
                className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 ${isActive
                    ? "bg-white border-blue-200 shadow-[0_10px_30px_-15px_rgba(37,99,235,0.15)]"
                    : "bg-white/50 border-transparent hover:bg-white hover:border-slate-200"
                    }`}
            >
                {/* Timeline Connector */}
                <div className="relative flex flex-col items-center">
                    <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${isActive
                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                            : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                            }`}
                    >
                        {step.number}
                    </div>
                    {index < 4 && (
                        <div
                            className={`w-0.5 h-full min-h-[40px] mt-2 transition-colors duration-300 ${isActive ? "bg-blue-200" : "bg-slate-200"
                                }`}
                        />
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                    <div className="flex items-center justify-between mb-1">
                        <h3
                            className={`font-semibold transition-colors ${isActive ? "text-blue-950" : "text-slate-600"
                                }`}
                        >
                            {step.title}
                        </h3>
                        <IoChevronForward
                            className={`transition-all duration-300 ${isActive
                                ? "text-blue-600 rotate-90"
                                : "text-slate-300 -rotate-0"
                                }`}
                            size={18}
                        />
                    </div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                        {step.duration}
                    </p>
                </div>
            </div>
        </MotionButton>
    );
};

// Detail Card Component
const ProcessDetail: React.FC<ProcessDetailProps> = ({ step, totalSteps, currentIndex }) => {
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-blue-50 h-full relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            
            {/* Header */}
            <div className="flex items-start justify-between mb-8 relative z-10">
                <div>
                    <MotionDiv
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3"
                    >
                        Mərhələ {step.number} / 0{totalSteps}
                    </MotionDiv>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="text-3xl font-black text-blue-950"
                    >
                        {step.title}
                    </motion.h3>
                </div>

                {/* Duration Badge */}
                <MotionDiv
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100"
                >
                    <span className="text-xs text-slate-500 uppercase tracking-wider block font-bold">Müddət</span>
                    <span className="text-sm font-black text-blue-950">{step.duration}</span>
                </MotionDiv>
            </div>

            {/* Description */}
            <MotionP
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-slate-600 text-lg leading-relaxed mb-8 font-medium relative z-10"
            >
                {step.description}
            </MotionP>

            {/* Deliverables Grid */}
            <div className="mb-8 relative z-10">
                <h4 className="text-sm font-bold text-blue-950 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    Əldə edəcəkləriniz
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                    {step.deliverables.map((item, idx) => (
                        <MotionDiv
                            key={item}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.05 }}
                            className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100/50 hover:bg-blue-50 hover:border-blue-100 transition-colors group"
                        >
                            <div
                                className="w-5 h-5 rounded-full bg-white border border-blue-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-600 transition-all">
                                <IoCheckmark className="text-blue-500 group-hover:text-white" size={12} />
                            </div>
                            <span className="text-slate-700 text-sm font-semibold group-hover:text-blue-950">{item}</span>
                        </MotionDiv>
                    ))}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="pt-6 border-t border-slate-100 relative z-10">
                <div className="flex items-center justify-between text-sm mb-3">
                    <span className="text-slate-500 font-bold">Ümumi proqres</span>
                    <span className="font-black text-blue-600">
                        {Math.round(((currentIndex + 1) / totalSteps) * 100)}%
                    </span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <MotionDiv
                        className="h-full bg-blue-600 rounded-full relative"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentIndex + 1) / totalSteps) * 100}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30" />
                    </MotionDiv>
                </div>

                {/* Step Indicators */}
                <div className="flex justify-between mt-4">
                    {Array.from({ length: totalSteps }).map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-8 h-1 rounded-full transition-colors duration-300 ${idx <= currentIndex ? "bg-blue-600" : "bg-slate-200"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </MotionDiv>
    );
};

// Header Component
const SectionHeader: React.FC = () => (
    <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
    >
        <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-blue-100 text-blue-600 text-sm font-bold tracking-wide uppercase mb-6">
            İş Prosesimiz
        </span>
        <strong className="text-3xl block sm:text-5xl font-black text-blue-950 mb-4 leading-tight tracking-tight">
            Necə <span className="text-blue-600">Çalışırıq?</span>
        </strong>
        <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Şəffaf və strukturlaşdırılmış prosesimiz ilə layihənizi uğurla sona çatdırırıq.
        </p>
    </MotionDiv>
);

// Main Component
interface ProcessProps {
    steps: Step[];
    locale: string;
}

const ProcessSection: React.FC<ProcessProps> = ({ steps, locale }) => {
    const [activeStep, setActiveStep] = useState(0);

    const displaySteps = steps && steps.length > 0 ? steps : [
        {
            number: "01",
            title: "Kəşf və Analiz",
            description: "Layihənin hədəfini, auditoriyasını və texniki tələblərini dərindən analiz edirik.",
            duration: "1-2 həftə",
            deliverables: ["Tələblər sənədi", "Texniki spesifikasiya"],
        }
    ];

    return (
        <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-slate-50 to-transparent" />
            </div>

            <div className="relative z-10 container">
                <SectionHeader />

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Steps List */}
                    <div className="lg:col-span-5 space-y-3">
                        {displaySteps.map((step, index) => (
                            <ProcessStep
                                key={step.number}
                                step={step}
                                isActive={activeStep === index}
                                onClick={() => setActiveStep(index)}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Detail View */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            <ProcessDetail
                                key={activeStep}
                                step={displaySteps[activeStep]}
                                totalSteps={displaySteps.length}
                                currentIndex={activeStep}
                            />
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;