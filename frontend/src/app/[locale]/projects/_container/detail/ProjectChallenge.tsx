// components/portfolio/ProjectChallenge.tsx
import {FaLightbulb} from 'react-icons/fa6';
import {FaBullseye} from "react-icons/fa";

interface ProjectChallengeProps {
    problem: string;
    solution: string;
}

export const ProjectChallenge = ({problem, solution}: ProjectChallengeProps) => {
    return (
        <section className="w-full bg-white py-16 relative">
            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Problem Card */}
                    <div className="bg-slate-50 rounded-[2rem] p-10 lg:p-12 border border-slate-100/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                                <FaBullseye className="w-6 h-6 text-slate-700"/>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Hədəf və Problem</h2>
                        </div>
                        <p className="text-slate-600 leading-loose text-lg">
                            {problem}
                        </p>
                    </div>

                    {/* Solution Card */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2rem] p-10 lg:p-12 shadow-[0_10px_40px_rgba(37,99,235,0.2)] text-white relative overflow-hidden transition-all hover:shadow-[0_15px_50px_rgba(37,99,235,0.3)] hover:-translate-y-1">
                        {/* Abstract background blobs for solution card */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-inner">
                                    <FaLightbulb className="w-6 h-6 text-blue-100"/>
                                </div>
                                <h2 className="text-2xl font-bold text-white tracking-tight">Təklif Edilən Həll</h2>
                            </div>
                            <p className="text-blue-50 leading-loose text-lg">
                                {solution}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};