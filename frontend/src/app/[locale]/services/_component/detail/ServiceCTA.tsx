// components/services/ServiceDetail/ServiceCTA.tsx
import {
    FaArrowRight,
    FaPhone,
    FaEnvelope
} from 'react-icons/fa6';

interface ServiceCTAProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    href?: string;
    locale?: string;
}

export const ServiceCTA = ({
                               title,
                               subtitle,
                               buttonText,
                               href = "#contact",
                               locale = 'az'
                           }: ServiceCTAProps) => {
    const t = {
        az: {
            title: "Xidmətdən yararlanmaq istəyirsən?",
            subtitle: "Pulsuz konsultasiya əldə edin və layihəniz haqqında danışaq.",
            btn: "Müraciət et"
        },
        en: {
            title: "Want to use our service?",
            subtitle: "Get a free consultation and let's talk about your project.",
            btn: "Apply Now"
        },
        ru: {
            title: "Хотите воспользоваться нашими услугами?",
            subtitle: "Получите бесплатную консультацию и давайте обсудим ваш проект.",
            btn: "Подать заявку"
        },
        tr: {
            title: "Hizmetimizden yararlanmak ister misiniz?",
            subtitle: "Ücretsiz danışmanlık alın ve projeniz hakkında konuşalım.",
            btn: "Başvur"
        }
    }[locale as 'az'|'en'|'ru'|'tr'] || {
        title: "Xidmətdən yararlanmaq istəyirsən?",
        subtitle: "Pulsuz konsultasiya əldə edin və layihəniz haqqında danışaq.",
        btn: "Müraciət et"
    };

    const displayTitle = title || t.title;
    const displaySubtitle = subtitle || t.subtitle;
    const displayBtn = buttonText || t.btn;

    return (
        <section className="w-full bg-[#FAFAFC] py-16 lg:py-24">
            <div className="container">
                <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] lg:rounded-[3rem] p-10 lg:p-20 text-center overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.25)]">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/20 blur-[60px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 max-w-4xl mx-auto leading-tight tracking-tight">
                            {displayTitle}
                        </h2>
                        <p className="text-blue-100 text-xl lg:text-2xl mb-12 max-w-2xl mx-auto font-medium">
                            {displaySubtitle}
                        </p>

                        <a
                            href={href}
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 mb-12 text-lg"
                        >
                            <span>{displayBtn}</span>
                            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                        </a>

                        {/* Contact info */}
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-blue-100/90 font-medium text-lg bg-black/10 px-8 py-4 rounded-2xl backdrop-blur-sm">
                            <a href="tel:+994773312653" className="flex items-center gap-3 hover:text-white transition-colors">
                                <FaPhone className="w-5 h-5" />
                                <span>+994 77 331 26 53 / +90 552 153 23 28</span>
                            </a>
                            <span className="hidden sm:block w-1.5 h-1.5 bg-blue-400/50 rounded-full" />
                            <a href="mailto:info@neymantech.com" className="flex items-center gap-3 hover:text-white transition-colors">
                                <FaEnvelope className="w-5 h-5" />
                                <span>info@neymantech.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};