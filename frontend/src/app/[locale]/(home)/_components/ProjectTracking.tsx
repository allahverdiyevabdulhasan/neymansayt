"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoSearchOutline, IoRocketOutline, IoTimeOutline, IoCheckmarkCircle } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MotionDiv } from "@/lib/motion";

import { fetchData, getTranslated } from "@/lib/api";

const ProjectTracking: React.FC<{ locale: string }> = ({ locale }) => {
    const [code, setCode] = useState("");
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const t = {
        az: {
            badge: "MÜŞTƏRİ PORTALI",
            title1: "Layihənizi",
            title2: "İzləyin",
            desc: "Sizə təqdim olunan xüsusi kodla layihənizin hansı mərhələdə olduğunu anlıq olaraq, şəffaf şəkildə yoxlayın.",
            placeholder: "İZLƏMƏ KODU (MƏS: NEY-12345)",
            btn: "Yoxla",
            loading: "Axtarış edilir...",
            notFound: "Kod tapılmadı",
            error: "Axtarış zamanı xəta baş verdi",
            stepText: "Cari Mərhələ",
            statusText: "Status",
            progressText: "Ümumi Tərəqqi"
        },
        en: {
            badge: "CLIENT PORTAL",
            title1: "Track Your",
            title2: "Project",
            desc: "Instantly check the current stage of your project transparently using your special tracking code.",
            placeholder: "TRACKING CODE (EX: NEY-12345)",
            btn: "Check",
            loading: "Searching...",
            notFound: "Code not found",
            error: "An error occurred during search",
            stepText: "Current Stage",
            statusText: "Status",
            progressText: "Overall Progress"
        },
        ru: {
            badge: "КЛИЕНТСКИЙ ПОРТАЛ",
            title1: "Отслеживайте",
            title2: "Проект",
            desc: "Мгновенно и прозрачно проверяйте этап вашего проекта с помощью предоставленного специального кода.",
            placeholder: "КОД ОТСЛЕДЖИВАНИЯ (НАПР: NEY-12345)",
            btn: "Проверить",
            loading: "Поиск...",
            notFound: "Код не найден",
            error: "Произошла ошибка при поиске",
            stepText: "Текущий этап",
            statusText: "Статус",
            progressText: "Общий прогресс"
        },
        tr: {
            badge: "MÜŞTERİ PORTALI",
            title1: "Projenizi",
            title2: "İzleyin",
            desc: "Size verilen özel kod ile projenizin hangi aşamada olduğunu anlık ve şeffaf bir şekilde kontrol edin.",
            placeholder: "TAKİP KODU (ÖRN: NEY-12345)",
            btn: "Sorgula",
            loading: "Aranıyor...",
            notFound: "Kod bulunamadı",
            error: "Arama sırasında bir hata oluştu",
            stepText: "Mevcut Aşama",
            statusText: "Durum",
            progressText: "Genel İlerleme"
        }
    }[locale as 'az' | 'en' | 'ru' | 'tr'] || {
        badge: "MÜŞTƏRİ PORTALI",
        title1: "Layihənizi",
        title2: "İzləyin",
        desc: "Sizə təqdim olunan xüsusi kodla layihənizin hansı mərhələdə olduğunu anlıq olaraq, şəffaf şəkildə yoxlayın.",
        placeholder: "İZLƏMƏ KODU (MƏS: NEY-12345)",
        btn: "Yoxla",
        loading: "Axtarış edilir...",
        notFound: "Kod tapılmadı",
        error: "Axtarış zamanı xəta baş verdi",
        stepText: "Cari Mərhələ",
        statusText: "Status",
        progressText: "Ümumi Tərəqqi"
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!code.trim()) return;

        setLoading(true);
        setError("");
        setResult(null);

        try {
            const data = await fetchData(`tracking/${code}`);
            if (data && !data.error) {
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
                setError(t.notFound);
            }
        } catch (err) {
            setError(t.error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />
            
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-bold tracking-wide uppercase mb-6 shadow-sm">{t.badge}</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                            {t.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t.title2}</span>
                        </h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                            {t.desc}
                        </p>
                    </div>

                    <div className="relative mb-12 max-w-3xl mx-auto">
                        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-4 p-2 sm:p-3 bg-white rounded-3xl border border-slate-200/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)] transition-shadow duration-500">
                            <div className="flex-1 flex items-center px-4 w-full">
                                <IoSearchOutline className="text-blue-500 mr-4" size={24} />
                                <input
                                    type="text"
                                    placeholder={t.placeholder}
                                    className="w-full py-4 bg-transparent border-none focus:ring-0 text-slate-800 text-lg font-bold placeholder:text-slate-400 placeholder:font-medium uppercase outline-none tracking-wide"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading || !code}
                                className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-bold text-lg rounded-2xl hover:bg-blue-700 hover:shadow-[0_10px_20px_rgba(37,99,235,0.2)] transition-all duration-300 disabled:opacity-50 active:scale-95 whitespace-nowrap"
                            >
                                {loading ? t.loading : t.btn}
                            </button>
                        </form>

                        {/* Error Message */}
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute -bottom-8 left-0 right-0 text-center text-red-500 font-bold text-sm"
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
                                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden"
                            >
                                {/* Result Ambient Glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32" />

                                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                    {/* Project Info */}
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                                                <IoRocketOutline size={28} />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-black text-slate-900">{result.project}</h3>
                                                <p className="text-slate-500 font-bold text-sm tracking-wide uppercase mt-1">{result.client}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                            <div className="flex justify-between items-end">
                                                <span className="text-slate-500 uppercase tracking-wider font-bold text-xs">{t.progressText}</span>
                                                <span className="text-blue-600 font-black text-3xl">{result.progress}%</span>
                                            </div>
                                            <div className="h-3 bg-slate-200/60 rounded-full overflow-hidden p-[2px]">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${result.progress}%` }}
                                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)] relative overflow-hidden"
                                                >
                                                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-[200%] animate-[shimmer_2s_infinite]" />
                                                </motion.div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 p-2 bg-indigo-50 rounded-xl text-indigo-600">
                                                <IoTimeOutline size={22} />
                                            </div>
                                            <div>
                                                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">{t.stepText}</div>
                                                <div className="text-lg font-bold text-slate-900 mb-1">{result.step}</div>
                                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{result.status}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline */}
                                    <div className="relative pl-8 lg:pl-12 lg:border-l border-slate-100 py-4">
                                        <div className="absolute left-[31px] lg:left-[47px] top-6 bottom-6 w-[2px] bg-slate-100" />
                                        <div className="space-y-8 relative">
                                            {result.steps.map((step: any, idx: number) => {
                                                const isActive = step.completed === "active";
                                                const isDone = step.completed === true;
                                                
                                                return (
                                                    <div key={idx} className="relative flex items-center gap-6 group">
                                                        <div
                                                            className={`absolute left-[-21px] lg:left-[-21px] w-11 h-11 rounded-full border-[3px] flex items-center justify-center z-10 transition-colors duration-300
                                                                ${isDone ? "bg-blue-600 border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.2)]" :
                                                                  isActive ? "bg-white border-blue-500" : "bg-white border-slate-200"}
                                                            `}
                                                        >
                                                            {isDone && <IoCheckmarkCircle className="text-white" size={24} />}
                                                            {isActive && <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />}
                                                        </div>
                                                        <div className="pl-8">
                                                            <span className={`text-base font-bold transition-colors duration-300 ${
                                                                isDone ? "text-slate-900" :
                                                                isActive ? "text-blue-600" : "text-slate-400"
                                                            }`}>
                                                                {step.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </MotionDiv>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            
            <style jsx global>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(50%); }
                }
            `}</style>
        </section>
    );
};

export default ProjectTracking;
