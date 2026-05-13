// components/educrm/EduCTA.tsx
import { FaArrowRight } from 'react-icons/fa6';
import {FaShieldAlt} from "react-icons/fa";

export const EduCTA = () => {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="container">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Təhsil Müəssisənizi Rəqəmsallaşdırın
                        </h2>
                        <p className="text-blue-100 text-lg mb-8">
                            Pulsuz demo əldə edin və EduCRM-in imkanlarını kəşf edin.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg">
                                <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                <span>Demo Gör</span>
                            </button>

                            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white/60 transition-all duration-300">
                                <span>Əlaqə Saxla</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <FaShieldAlt className="w-4 h-4" />
                        <span>GDPR uyğun</span>
                    </div>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span>SSL şifrələmə</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span>Gündəlik backup</span>
                </div>
            </div>
        </section>
    );
};