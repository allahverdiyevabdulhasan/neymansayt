import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaDatabase,
    FaJava,
    FaPhp,
    FaLaravel,
    FaVuejs,
    FaAngular,
    FaDocker,
    FaAws
} from 'react-icons/fa6';
import {
    SiNextdotjs,
    SiTailwindcss,
    SiPostgresql,
    SiTypescript,
    SiJavascript,
    SiMongodb,
    SiRedis,
    SiFirebase,
    SiFlutter,
    SiSwift
} from 'react-icons/si';

const ICON_MAP: Record<string, { icon: React.ElementType, color: string }> = {
    "react": { icon: FaReact, color: "text-blue-500" },
    "next.js": { icon: SiNextdotjs, color: "text-slate-900" },
    "nextjs": { icon: SiNextdotjs, color: "text-slate-900" },
    "django": { icon: FaPython, color: "text-green-600" },
    "python": { icon: FaPython, color: "text-blue-500" },
    "postgresql": { icon: SiPostgresql, color: "text-blue-700" },
    "tailwind": { icon: SiTailwindcss, color: "text-cyan-500" },
    "tailwindcss": { icon: SiTailwindcss, color: "text-cyan-500" },
    "node.js": { icon: FaNodeJs, color: "text-green-500" },
    "nodejs": { icon: FaNodeJs, color: "text-green-500" },
    "typescript": { icon: SiTypescript, color: "text-blue-600" },
    "javascript": { icon: SiJavascript, color: "text-yellow-400" },
    "mongodb": { icon: SiMongodb, color: "text-green-500" },
    "redis": { icon: SiRedis, color: "text-red-500" },
    "firebase": { icon: SiFirebase, color: "text-yellow-500" },
    "flutter": { icon: SiFlutter, color: "text-blue-400" },
    "swift": { icon: SiSwift, color: "text-orange-500" },
    "java": { icon: FaJava, color: "text-red-600" },
    "php": { icon: FaPhp, color: "text-blue-500" },
    "laravel": { icon: FaLaravel, color: "text-red-500" },
    "vue": { icon: FaVuejs, color: "text-green-500" },
    "angular": { icon: FaAngular, color: "text-red-500" },
    "docker": { icon: FaDocker, color: "text-blue-500" },
    "aws": { icon: FaAws, color: "text-orange-500" },
};

interface TechStackProps {
    techStack?: string;
}

export const TechStack = ({ techStack }: TechStackProps) => {
    const techNames = techStack ? techStack.split('\n').filter(t => t.trim() !== '') : [];

    if (techNames.length === 0) return null;

    return (
        <section className="w-full bg-white py-10">
            <div className="container">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">
                    İstifadə etdiyimiz texnologiyalar
                </h2>
                <div className="flex flex-wrap gap-3">
                    {techNames.map((name, index) => {
                        const cleanName = name.trim().toLowerCase();
                        const tech = ICON_MAP[cleanName] || { icon: FaDatabase, color: "text-slate-500" };
                        const Icon = tech.icon;

                        return (
                            <div
                                key={index}
                                className="group flex items-center gap-2 px-5 py-3 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-medium rounded-full border border-slate-200 hover:border-blue-200 transition-all duration-300 cursor-default"
                            >
                                <Icon className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform`} />
                                <span>{name.trim()}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
