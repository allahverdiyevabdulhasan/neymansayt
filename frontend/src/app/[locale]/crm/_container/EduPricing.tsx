// components/educrm/EduPricing.tsx
import { FaCheck, FaBolt } from 'react-icons/fa6';
import { getTranslated } from '@/lib/api';

interface CRMFeature {
    [key: string]: string[];
}

interface APIPricingPlan {
    id: number;
    name: string;
    subtitle: string;
    price: string;
    period: string;
    is_popular: boolean;
    cta_text: string;
    features: CRMFeature | string; // Could be JSON object or stringified JSON
}

interface EduPricingProps {
    plans: APIPricingPlan[];
    locale: string;
}

export const EduPricing = ({ plans, locale }: EduPricingProps) => {
    const displayPlans = plans || [];

    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="container">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Qiymətləndirmə
                    </h2>
                    <p className="text-lg text-slate-600">
                        Müəssisənizin ölçüsünə uyğun paket seçin
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {displayPlans.map((plan: any, index: number) => {
                        // Parse features safely
                        let featuresList: string[] = [];
                        if (Array.isArray(plan.features)) {
                            featuresList = plan.features;
                        } else if (plan.features) {
                            if (typeof plan.features === 'string') {
                                try {
                                    const parsed = JSON.parse(plan.features);
                                    featuresList = parsed[locale] || parsed['az'] || (parsed && Object.values(parsed)[0]) || [];
                                } catch (e) {
                                    featuresList = [];
                                }
                            } else {
                                featuresList = plan.features[locale] || plan.features['az'] || (plan.features && Object.values(plan.features)[0]) || [];
                            }
                        }

                        if (!Array.isArray(featuresList)) {
                            featuresList = [];
                        }

                        return (
                            <div
                                key={plan.id || index}
                                className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${plan.is_popular || plan.popular
                                    ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-200/50 scale-105 z-10'
                                    : 'bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg'
                                    }`}
                            >
                                {/* Popular Badge */}
                                {(plan.is_popular || plan.popular) && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <div className="inline-flex items-center gap-1 px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full">
                                            <FaBolt className="w-3.5 h-3.5" />
                                            <span>Ən Populyar</span>
                                        </div>
                                    </div>
                                )}

                                {/* Plan Header */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{getTranslated(plan, 'name', locale) || plan.name}</h3>
                                    <p className="text-sm text-slate-500">{getTranslated(plan, 'subtitle', locale) || plan.subtitle}</p>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl lg:text-5xl font-bold text-slate-900">
                                            {plan.price}
                                        </span>
                                        <span className="text-slate-500">{plan.period}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {featuresList.map((feature: string, fIndex: number) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <FaCheck className={`w-5 h-5 flex-shrink-0 mt-0.5 ${(plan.is_popular || plan.popular) ? 'text-blue-600' : 'text-green-500'}`} />
                                            <span className="text-slate-600 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button
                                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${(plan.is_popular || plan.popular)
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25'
                                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                                        }`}
                                >
                                    {getTranslated(plan, 'cta_text', locale) || plan.cta || plan.cta_text}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};