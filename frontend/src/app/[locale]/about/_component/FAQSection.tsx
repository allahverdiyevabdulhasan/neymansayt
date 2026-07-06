"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { getTranslated } from "@/lib/api";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs: FAQItem[];
    locale: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs, locale }) => {
    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="py-20 bg-gray-50">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
                        FAQ
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">
                        Tez-tez verilən suallar
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={faq.id || index}
                            question={getTranslated(faq, 'question', locale)}
                            answer={getTranslated(faq, 'answer', locale)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/5 hover:border-blue-100">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
            >
                <span className="text-[17px] font-bold text-gray-900 pr-4">{question}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-600 shrink-0"
                >
                    <FiChevronDown size={24} />
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQSection;
