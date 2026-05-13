// components/educrm/EduFeatures.tsx
import {
    FaUsers,
    FaBookOpen,
    FaComments,
    FaChartLine
} from 'react-icons/fa6';
import { FaCalendarAlt, FaFileAlt, FaCheck } from "react-icons/fa";
import { getTranslated } from '@/lib/api';

const iconMap: Record<string, any> = {
    'FaUsers': FaUsers,
    'FaBookOpen': FaBookOpen,
    'FaCalendarAlt': FaCalendarAlt,
    'FaFileAlt': FaFileAlt,
    'FaComments': FaComments,
    'FaChartLine': FaChartLine
};

interface FeatureItem {
    id: number;
    title: string;
    description: string;
    icon_name: string;
}

interface EduFeaturesProps {
    features: FeatureItem[];
    locale: string;
}

export const EduFeatures = ({ features, locale }: EduFeaturesProps) => {
    const displayFeatures = features || [];

    return (
        <section className="w-full bg-slate-50 py-16 lg:py-24">
            <div className="container">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Əsas Xüsusiyyətlər
                    </h2>
                    <p className="text-lg text-slate-600">
                        Təhsil prosesini tam avtomatlaşdırmaq üçün lazım olan bütün alətlər
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayFeatures.map((feature: any, index: number) => {
                        const Icon = feature.icon_name ? (iconMap[feature.icon_name] || FaCheck) : (feature.icon || FaCheck);
                        return (
                            <div
                                key={feature.id || index}
                                className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                    <Icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    {getTranslated(feature, 'title', locale) || feature.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {getTranslated(feature, 'description', locale) || feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};