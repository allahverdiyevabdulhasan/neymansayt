"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSearchOutline, IoRocketOutline, IoTimeOutline, IoCheckmarkCircle } from "react-icons/io5";
import { MotionDiv } from "@/lib/motion";

import { fetchData, getTranslated } from "@/lib/api";

const ProjectTracking: React.FC<{ locale: string }> = ({ locale }) => {
    const [code, setCode] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        if (!code) return;
        setIsSearching(true);
        setResult(null);
        setError(null);

        try {
            const data = await fetchData(`tracking/${code}`);
            if (data) {
                setResult({
                    client: data.client_name,
                    project: data.project_name,
                    progress: data.progress_percentage,
                    step: getTranslated(data, 'current_step', locale),
                    status: getTranslated(data, 'status_note', locale),
                    steps: data.steps_data.map((s: any) => ({
                        name: s.name,
                        completed: s.completed
                    }))
                });
            } else {
                setError(locale === 'az' ? "Kod tapılmadı" : locale === 'ru' ? "Код не найден" : "Code not found");
            }
        } catch (err) {
            setError("Error fetching status");
        } finally {
            setIsSearching(false);
        }
    };

    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Layihənizi <span className="text-blue-600">İzləyin</span>
                        </h2>
                        <p className="text-gray-600">
                            Sizə təqdim olunan xüsusi kodla layihənizin hansı mərhələdə olduğunu anlıq görün.
                        </p>
                    </div>

                    {/* Search Box */}
                    <div className="relative mb-12">
                        <div className="flex items-center gap-4 p-2 bg-white rounded-2xl shadow-xl shadow-blue-900/5 border border-gray-100">
                            <div className="flex-1 flex items-center px-4">
                                <IoSearchOutline className="text-gray-400 mr-3" size={20} />
                                <input
                                    type="text"
                                    placeholder="İzləmə kodu (məs: NEY-12345)"
                                    className="w-full py-3 bg-transparent border-none focus:ring-0 text-gray-900 font-medium placeholder:text-gray-400"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                                />
                            </div>
                            <button
                                onClick={handleSearch}
                                disabled={isSearching || !code}
                                className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50 active:scale-95 whitespace-nowrap"
                            >
                                {isSearching ? "Axtarılır..." : "Yoxla"}
                            </button>
                        </div>

                        {/* Error Message */}
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mt-4 text-center text-red-500 font-medium text-sm"
                                >
                                    {error}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Results Area */}
                    <AnimatePresence mode="wait">
                        {result && (
                            <MotionDiv
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl shadow-blue-900/10 border border-blue-50 relative overflow-hidden"
                            >
                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32" />

                                <div className="relative z-10">
                                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                                        {/* Project Info */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                                    <IoRocketOutline size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900">{result.project}</h3>
                                                    <p className="text-gray-500 text-sm">{result.client}</p>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-500 uppercase tracking-wider font-semibold">Ümumi Proqres</span>
                                                    <span className="text-blue-600 font-bold">{result.progress}%</span>
                                                </div>
                                                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${result.progress}%` }}
                                                        transition={{ duration: 1, ease: "easeOut" }}
                                                        className="h-full bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"
                                                    />
                                                </div>
                                            </div>

                                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                                <div className="flex items-start gap-3">
                                                    <IoTimeOutline className="text-blue-600 mt-1" size={18} />
                                                    <div>
                                                        <div className="text-xs text-gray-400 font-bold uppercase mb-1">Cari Vəziyyət</div>
                                                        <div className="text-sm font-semibold text-gray-900 mb-1">{result.step}</div>
                                                        <p className="text-xs text-gray-600 leading-relaxed">{result.status}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Timeline */}
                                        <div className="relative pl-8">
                                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-100 ml-[10px]" />
                                            <div className="space-y-8">
                                                {result.steps.map((step: any, idx: number) => (
                                                    <div key={idx} className="relative flex items-center gap-4">
                                                        <div
                                                            className={`absolute left-[-32px] w-[22px] h-[22px] rounded-full border-4 border-white flex items-center justify-center z-10 shadow-sm
                                ${step.completed === true ? "bg-green-500" :
                                                                    step.completed === "active" ? "bg-blue-600 animate-pulse" : "bg-gray-200"}
                              `}
                                                        >
                                                            {step.completed === true && <IoCheckmarkCircle className="text-white" size={14} />}
                                                        </div>
                                                        <span className={`text-sm font-bold ${step.completed === true ? "text-gray-900" :
                                                            step.completed === "active" ? "text-blue-600" : "text-gray-300"
                                                            }`}>
                                                            {step.name}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </MotionDiv>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ProjectTracking;
