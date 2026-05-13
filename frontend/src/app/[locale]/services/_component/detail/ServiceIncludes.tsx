// components/services/ServiceDetail/ServiceIncludes.tsx
import {
    FaListCheck
} from 'react-icons/fa6';
import { FaCheckCircle } from "react-icons/fa";

interface ServiceIncludesProps {
    deliverables?: string;
}

export const ServiceIncludes = ({
    deliverables
}: ServiceIncludesProps) => {
    const items = deliverables ? deliverables.split('\n').filter(i => i.trim() !== '') : [];

    if (items.length === 0) return null;

    return (
        <section className="w-full bg-slate-50 py-10">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    {/* Deliverables */}
                    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-100">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <FaListCheck className="w-5 h-5 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">
                                Nələr daxildir?
                            </h2>
                        </div>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {items.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <FaCheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};