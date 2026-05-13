// components/portfolio/ProjectChallenge.tsx
import {FaLightbulb} from 'react-icons/fa6';
import {FaExclamationTriangle} from "react-icons/fa";

interface ProjectChallengeProps {
    problem: string;
    solution: string;
}

export const ProjectChallenge = ({problem, solution}: ProjectChallengeProps) => {
    return (
        <section className="w-full bg-white py-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Problem Card */}
                    <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                <FaExclamationTriangle className="w-5 h-5 text-red-600"/>
                            </div>
                            <h2 className="text-xl font-bold text-slate-900">Problem / Məqsəd</h2>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                            {problem}
                        </p>
                    </div>

                    {/* Solution Card */}
                    <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <FaLightbulb className="w-5 h-5 text-green-600"/>
                            </div>
                            <h2 className="text-xl font-bold text-slate-900">Həll</h2>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                            {solution}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};