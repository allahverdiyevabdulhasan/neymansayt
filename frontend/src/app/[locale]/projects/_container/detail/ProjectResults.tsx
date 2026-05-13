// components/portfolio/ProjectResults.tsx
interface ResultStat {
    value: string;
    label: string;
}

interface ProjectResultsProps {
    stats?: ResultStat[];
}

export const ProjectResults = ({
    stats = []
}: ProjectResultsProps) => {
    return (
        <section className="w-full bg-white py-12">
            <div className="container">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Nəticələr</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:border-blue-200 transition-colors"
                        >
                            <div className="text-4xl font-bold text-blue-600 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-slate-600">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};