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
}

export const ServiceCTA = ({
                               title = "Xidmətdən yararlanmaq istəyirsən?",
                               subtitle = "Pulsuz konsultasiya əldə edin və layihəniz haqqında danışaq.",
                               buttonText = "Müraciət et",
                               href = "#contact"
                           }: ServiceCTAProps) => {
    return (
        <section className="w-full bg-white py-10 pb-20">
            <div className="container">
                <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-16 text-center overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-3xl mx-auto leading-tight">
                            {title}
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            {subtitle}
                        </p>

                        <a
                            href={href}
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg mb-8"
                        >
                            <span>{buttonText}</span>
                            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        {/* Contact info */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100">
                            <a href="tel:+994501234567" className="flex items-center gap-2 hover:text-white transition-colors">
                                <FaPhone className="w-4 h-4" />
                                <span>+994 50 123 45 67</span>
                            </a>
                            <span className="hidden sm:block w-1 h-1 bg-blue-300 rounded-full" />
                            <a href="mailto:info@neyman.az" className="flex items-center gap-2 hover:text-white transition-colors">
                                <FaEnvelope className="w-4 h-4" />
                                <span>info@neyman.az</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};