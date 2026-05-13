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
            className={`relative w-full cursor-pointer text-left transition-all duration-300 ${isActive ? "z-10" : "z-0"
                }`}
            whileHover={{ x: isActive ? 0 : 4 }}
            whileTap={{ scale: 0.98 }}
        >
            <div
                className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 ${isActive
                    ? "bg-white border-blue-200 shadow-lg shadow-blue-900/5"
                    : "bg-white/50 border-transparent hover:bg-white hover:border-gray-200"
                    }`}
            >
                {/* Timeline Connector */}
                <div className="relative flex flex-col items-center">
                    <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${isActive
                            ? "bg-[#2563eb] text-white"
                            : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                            }`}
                    >
                        {step.number}
                    </div>
                    {index < 4 && (
                        <div
                            className={`w-0.5 h-full min-h-[40px] mt-2 transition-colors duration-300 ${isActive ? "bg-blue-200" : "bg-gray-200"
                                }`}
                        />
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                    <div className="flex items-center justify-between mb-1">
                        <h3
                            className={`font-semibold transition-colors ${isActive ? "text-gray-900" : "text-gray-600"
                                }`}
                        >
                            {step.title}
                        </h3>
                        <IoChevronForward
                            className={`transition-all duration-300 ${isActive
                                ? "text-[#2563eb] rotate-90"
                                : "text-gray-300 -rotate-0"
                                }`}
                            size={18}
                        />
                    </div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">
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
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 h-full"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
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
                        className="text-3xl font-bold text-gray-900"
                    >
                        {step.title}
                    </motion.h3>
                </div>

                {/* Duration Badge */}
                <MotionDiv
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-100"
                >
                    <span className="text-xs text-gray-500 uppercase tracking-wider block">Müddət</span>
                    <span className="text-sm font-semibold text-gray-900">{step.duration}</span>
                </MotionDiv>
            </div>

            {/* Description */}
            <MotionP
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-gray-600 text-lg leading-relaxed mb-8"
            >
                {step.description}
            </MotionP>

            {/* Deliverables Grid */}
            <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                    Əldə edəcəkləriniz
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                    {step.deliverables.map((item, idx) => (
                        <MotionDiv
                            key={item}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.05 }}
                            className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group"
                        >
                            <div
                                className="w-5 h-5 rounded-full bg-white border-2 border-green-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <IoCheckmark className="text-green-500" size={10} />
                            </div>
                            <span className="text-gray-700 text-sm font-medium">{item}</span>
                        </MotionDiv>
                    ))}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm mb-3">
                    <span className="text-gray-500">Ümumi proqres</span>
                    <span className="font-semibold text-[#2563eb]">
                        {Math.round(((currentIndex + 1) / totalSteps) * 100)}%
                    </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <MotionDiv
                        className="h-full bg-[#2563eb] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentIndex + 1) / totalSteps) * 100}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                </div>

                {/* Step Indicators */}
                <div className="flex justify-between mt-4">
                    {Array.from({ length: totalSteps }).map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-8 h-1 rounded-full transition-colors duration-300 ${idx <= currentIndex ? "bg-[#2563eb]" : "bg-gray-200"
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
            İş Prosesimiz
        </span>
        <strong className="text-2xl  block sm:text-4xl font-bold text-gray-900 mb-4">
            Necə <span className="text-[#2563eb]">Çalışırıq?</span>
        </strong>
        <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
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
        <section className="relative bg-white py-24 overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-gray-50 to-transparent" />
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