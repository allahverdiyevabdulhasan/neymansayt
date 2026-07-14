// components/services/ServiceDetail/ServiceInfoHero.tsx
import {
    FaArrowRight,
    FaClock,
    FaMoneyBill,
    FaCalendarCheck,
    FaWhatsapp
} from 'react-icons/fa6';

interface ServiceInfoHeroProps {
    title: string;
    description: string;
    duration?: string;
    priceRange?: string;
    consultation?: string;
    primaryCta?: {
        label: string;
        href: string;
    };
    secondaryCta?: {
        label: string;
        href: string;
    };
    locale?: string;
}

export const ServiceInfoHero = ({
                                    title,
                                    description,
                                    duration,
                                    priceRange,
                                    consultation,
                                    primaryCta,
                                    secondaryCta,
                                    locale = "az"
                                }: ServiceInfoHeroProps) => {
    const t = {
        az: { duration: "Müddət", price: "Qiymət aralığı", consult: "Pulsuz konsultasiya", cta1: "Təklif Al", cta2: "WhatsApp", defDuration: "14-21 gün", defPrice: "1500₼ - 5000₼", defConsult: "30 dəqiqə" },
        en: { duration: "Duration", price: "Price Range", consult: "Free Consultation", cta1: "Get Offer", cta2: "WhatsApp", defDuration: "14-21 days", defPrice: "1500₼ - 5000₼", defConsult: "30 mins" },
        ru: { duration: "Срок", price: "Диапазон цен", consult: "Бесплатная консультация", cta1: "Получить предложение", cta2: "WhatsApp", defDuration: "14-21 дней", defPrice: "1500₼ - 5000₼", defConsult: "30 минут" },
        tr: { duration: "Süre", price: "Fiyat aralığı", consult: "Ücretsiz danışmanlık", cta1: "Teklif Al", cta2: "WhatsApp", defDuration: "14-21 gün", defPrice: "1500₼ - 5000₼", defConsult: "30 dakika" }
    }[locale as 'az'|'en'|'ru'|'tr'] || { duration: "Müddət", price: "Qiymət aralığı", consult: "Pulsuz konsultasiya", cta1: "Təklif Al", cta2: "WhatsApp", defDuration: "14-21 gün", defPrice: "1500₼ - 5000₼", defConsult: "30 dəqiqə" };

    const dispDuration = duration || t.defDuration;
    const dispPrice = priceRange || t.defPrice;
    const dispConsult = consultation || t.defConsult;
    const dispCta1 = primaryCta || {label: t.cta1, href: "#contact"};
    const dispCta2 = secondaryCta || {label: t.cta2, href: "https://wa.me/994501234567"};

    const infoCards = [
        {
            icon: FaClock,
            label: t.duration,
            value: dispDuration,
        },
        {
            icon: FaMoneyBill,
            label: t.price,
            value: dispPrice,
        },
        {
            icon: FaCalendarCheck,
            label: t.consult,
            value: dispConsult,
        }
    ];

    return (
        <section className="w-full bg-white py-16 lg:py-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />
            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-7">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-950 leading-tight mb-8">
                            {title}
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl font-medium">
                            {description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button type={"button"}
                                    className="group cursor-pointer inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_40px_rgba(37,99,235,0.3)] hover:-translate-y-0.5"
                            >
                                <span>{dispCta1.label}</span>
                                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform"/>
                            </button>

                            <a
                                href={dispCta2.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl border-2 border-slate-100 hover:border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <FaWhatsapp className="w-5 h-5 text-green-500"/>
                                <span>{dispCta2.label}</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Info Cards */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5">
                        {infoCards.map((card, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-5 p-6 lg:p-8 bg-slate-50/80 backdrop-blur-sm rounded-[2rem] border border-white hover:border-blue-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] hover:bg-white transition-all duration-300 group"
                            >
                                <div
                                    className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 transition-colors">
                                    <card.icon className="w-6 h-6 text-blue-600"/>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-500 mb-1 uppercase tracking-wider">{card.label}</div>
                                    <div className="text-xl font-bold text-slate-900">{card.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};