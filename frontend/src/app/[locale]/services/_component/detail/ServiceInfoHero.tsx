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
}

export const ServiceInfoHero = ({
                                    title,
                                    description,
                                    duration = "14-21 gün",
                                    priceRange = "1500₼ - 5000₼",
                                    consultation = "30 dəqiqə",
                                    primaryCta = {label: "Təklif Al", href: "#contact"},
                                    secondaryCta = {label: "WhatsApp", href: "https://wa.me/994501234567"}
                                }: ServiceInfoHeroProps) => {
    const infoCards = [
        {
            icon: FaClock,
            label: "Müddət",
            value: duration,
        },
        {
            icon: FaMoneyBill,
            label: "Qiymət aralığı",
            value: priceRange,
        },
        {
            icon: FaCalendarCheck,
            label: "Pulsuz konsultasiya",
            value: consultation,
        }
    ];

    return (
        <section className="w-full bg-white py-10">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            {title}
                        </h1>

                        <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                            {description}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button type={"button"}
                                    className="group cursor-pointer inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25"
                            >
                                <span>{primaryCta.label}</span>
                                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                            </button>

                            <a
                                href={secondaryCta.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 transition-all duration-300"
                            >
                                <FaWhatsapp className="w-5 h-5 text-green-500"/>
                                <span>{secondaryCta.label}</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                        {infoCards.map((card, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300 group"
                            >
                                <div
                                    className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                                    <card.icon className="w-6 h-6 text-blue-600"/>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 mb-1">{card.label}</div>
                                    <div className="text-lg font-bold text-slate-900">{card.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};