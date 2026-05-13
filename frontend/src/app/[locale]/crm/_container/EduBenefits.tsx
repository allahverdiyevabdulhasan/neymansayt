// components/educrm/EduBenefits.tsx
import { FaCheck } from 'react-icons/fa6';
import { getTranslated } from '@/lib/api';

interface CRMStat {
    main_percentage: string;
    label: string;
    school_count: string;
    student_count: string;
}

interface EduBenefitsProps {
    benefits: any[];
    locale: string;
    stats?: CRMStat;
}

export const EduBenefits = ({ benefits, locale, stats }: EduBenefitsProps) => {
    const displayBenefits = benefits || [];

    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Stats Card */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-12 border border-green-100">
                            <div className="text-center">
                                <div className="text-6xl mb-4">📊</div>
                                <div className="text-5xl font-bold text-green-600 mb-2">
                                    {stats?.main_percentage || "+40%"}
                                </div>
                                <div className="text-green-700 font-medium">
                                    {stats ? getTranslated(stats, 'label', locale) : "Effektivlik artımı"}
                                </div>
                            </div>

                            {/* Mini stats */}
                            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-green-200">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-slate-900">
                                        {stats?.school_count || "50+"}
                                    </div>
                                    <div className="text-sm text-slate-600">
                                        {getTranslated(null, 'school', locale) || "Məktəb"}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-slate-900">
                                        {stats?.student_count || "10K+"}
                                    </div>
                                    <div className="text-sm text-slate-600">
                                        {getTranslated(null, 'student', locale) || "Tələbə"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Benefits List */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
                            Niyə EduCRM?
                        </h2>

                        <ul className="space-y-4">
                            {displayBenefits.map((benefit: any, index: number) => (
                                <li key={benefit.id || index} className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <FaCheck className="w-3.5 h-3.5 text-green-600" />
                                    </div>
                                    <span className="text-slate-700">
                                        {typeof benefit === 'string' ? benefit : getTranslated(benefit, 'text', locale) || benefit.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};