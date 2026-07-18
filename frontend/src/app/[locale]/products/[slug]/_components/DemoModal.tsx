"use client";
import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { MotionDiv } from "@/lib/motion";
import { getTranslated } from "@/lib/api";

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: any;
    locale: string;
}

export const DemoModal = ({ isOpen, onClose, product, locale }: DemoModalProps) => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: ""
    });

    if (!isOpen) return null;

    const themeColor = product?.theme_color || 'blue';
    const mainColor = themeColor === 'blue' ? '#2563eb' : themeColor === 'emerald' ? '#10b981' : themeColor === 'indigo' ? '#4f46e5' : themeColor;
    const productName = getTranslated(product, 'title', locale);

    const t = {
        az: {
            title: "Demo Sifariş Et",
            desc: "Məlumatlarınızı daxil edin, sizinlə ən qısa zamanda əlaqə saxlayacağıq.",
            fname: "Ad",
            lname: "Soyad",
            phone: "Əlaqə nömrəsi",
            email: "E-poçt (istəyə bağlı)",
            submit: "Göndər",
            success: "Müraciətiniz qəbul olundu. Təşəkkür edirik!",
            error: "Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin."
        },
        en: {
            title: "Order Demo",
            desc: "Enter your details and we will contact you shortly.",
            fname: "First Name",
            lname: "Last Name",
            phone: "Phone Number",
            email: "Email (optional)",
            submit: "Submit",
            success: "Your request has been received. Thank you!",
            error: "An error occurred. Please try again."
        },
        ru: {
            title: "Запросить демо",
            desc: "Введите свои данные, и мы свяжемся с вами в ближайшее время.",
            fname: "Имя",
            lname: "Фамилия",
            phone: "Номер телефона",
            email: "E-mail (необязательно)",
            submit: "Отправить",
            success: "Ваша заявка принята. Спасибо!",
            error: "Произошла ошибка. Пожалуйста, попробуйте еще раз."
        },
        tr: {
            title: "Demo Talep Et",
            desc: "Bilgilerinizi girin, en kısa sürede sizinle iletişime geçeceğiz.",
            fname: "Ad",
            lname: "Soyad",
            phone: "Telefon",
            email: "E-posta (isteğe bağlı)",
            submit: "Gönder",
            success: "Talebiniz alındı. Teşekkür ederiz!",
            error: "Bir hata oluştu. Lütfen tekrar deneyin."
        }
    }[locale as 'az'|'en'|'ru'|'tr'] || {
            title: "Demo Sifariş Et",
            desc: "Məlumatlarınızı daxil edin, sizinlə ən qısa zamanda əlaqə saxlayacağıq.",
            fname: "Ad",
            lname: "Soyad",
            phone: "Əlaqə nömrəsi",
            email: "E-poçt",
            submit: "Göndər",
            success: "Müraciətiniz qəbul olundu. Təşəkkür edirik!",
            error: "Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin."
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const payload = {
                first_name: formData.first_name,
                last_name: formData.last_name || "-",
                phone: formData.phone,
                email: formData.email || "demo@neymantech.com",
                subject: `Demo Request: ${productName}`,
                message: `Müştəri məhsul üçün demo sifariş etdi: ${productName}`
            };

            const apiUrl = typeof window !== 'undefined' && window.location.hostname === 'localhost' 
                ? 'http://localhost:8000/api/contact/messages/' 
                : '/api/contact/messages/';

            const res = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setStatus("success");
                setTimeout(() => {
                    onClose();
                    setStatus("idle");
                    setFormData({ first_name: "", last_name: "", phone: "", email: "" });
                }, 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <MotionDiv
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative"
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors z-10"
                >
                    <HiX size={20} />
                </button>

                <div className="p-8 pb-6 border-b border-slate-100 bg-slate-50">
                    <h3 className="text-2xl font-bold text-slate-900">{t.title}</h3>
                    <p className="text-slate-500 mt-2 text-sm">{t.desc}</p>
                </div>

                <div className="p-8">
                    {status === "success" ? (
                        <div className="bg-emerald-50 text-emerald-600 p-6 rounded-2xl flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="font-bold text-lg">{t.success}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t.fname} *</label>
                                    <input 
                                        required
                                        type="text" 
                                        value={formData.first_name}
                                        onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors outline-none"
                                        placeholder={t.fname}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t.lname}</label>
                                    <input 
                                        type="text" 
                                        value={formData.last_name}
                                        onChange={(e) => setFormData({...formData, last_name: e.target.value})}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors outline-none"
                                        placeholder={t.lname}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t.phone} *</label>
                                <input 
                                    required
                                    type="tel" 
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors outline-none"
                                    placeholder="+994 (__) ___-__-__"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">{t.email}</label>
                                <input 
                                    type="email" 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors outline-none"
                                    placeholder="email@example.com"
                                />
                            </div>

                            {status === "error" && (
                                <p className="text-red-500 text-sm font-medium mt-2">{t.error}</p>
                            )}

                            <button 
                                type="submit" 
                                disabled={status === "loading"}
                                className="w-full py-4 mt-4 text-white font-bold rounded-xl transition-all shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
                                style={{ backgroundColor: mainColor, boxShadow: `0 10px 25px -5px ${mainColor}40` }}
                            >
                                {status === "loading" ? "..." : t.submit}
                            </button>
                        </form>
                    )}
                </div>
            </MotionDiv>
        </div>
    );
};
