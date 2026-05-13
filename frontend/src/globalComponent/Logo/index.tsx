import { Link } from "@/i18n/navigation";

export default function Logo() {
    return (
        <Link href={"/"} className="flex items-center gap-3 shrink-0 group">
            <div className="relative flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 transition-transform group-hover:scale-[1.03]">
                <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* The Blue Gear Background */}
                    <path
                        fill="#002dd1"
                        d="M50 0c-2.8 0-5.5 1.5-6.9 3.9l-1.9 3.5c-1.3 2.3-4.1 3.4-6.6 2.5l-3.8-1.5C28.1 7.3 24.8 8.8 23 11.4l-2.2 3.2c-1.6 2.2-4.5 2.9-7 1.6L10.3 14.3c-2.4-1.2-5.4-.5-7 1.6l-2.2 3.2c-1.4 2-1.9 4.7-.9 7l1.5 3.8c1 2.5-.2 5.3-2.5 6.6L-4.3 38.3c-2.4 1.4-3.9 4.1-3.9 6.9s1.5 5.5 3.9 6.9l3.5 1.9c2.3 1.3 3.4 4.1 2.5 6.6l-1.5 3.8c-.9 2.5.6 5.8 3.2 7.7l3.2 2.2c2.2 1.6 5.1 2.3 7 1.6l3.8-1.5c2.5-1 5.3.2 6.6 2.5l1.9 3.5c1.4 2.4 4.1 3.9 6.9 3.9s5.5-1.5 6.9-3.9l1.9-3.5c1.3-2.3 4.1-3.4 6.6-2.5l3.8 1.5c2.7 1.1 6-.4 7.5-3l2.2-3.2c1.6-2.2 4.5-2.9 7-1.6l3.6 1.8c2.4 1.2 5.4.5 7-1.6l2.2-3.2c1.4-2 1.9-4.7.9-7l-1.5-3.8c-1-2.5.2-5.3 2.5-6.6l3.5-1.9c2.4-1.4 3.9-4.1 3.9-6.9s-1.5-5.5-3.9-6.9l-3.5-1.9c-2.3-1.3-3.4-4.1-2.5-6.6l1.5-3.8c.9-2.5-.6-5.8-3.2-7.7l-3.2-2.2c-2.2-1.6-5.1-2.3-7-1.6l-3.8 1.5c-2.5 1-5.3-.2-6.6-2.5l-1.9-3.5C55.5 1.5 52.8 0 50 0z"
                        transform="scale(0.95) translate(2.5, 2.5)"
                    />
                    {/* The White "N" - Perfect geometric N */}
                    <path
                        fill="#FFFFFF"
                        d="M28 25v48h10V42l18 31h10V25H56v31L38 25H28z"
                    />
                </svg>
            </div>

            {/* The text next to the logo */}
            <div className="flex flex-col justify-center translate-y-[2px]">
                <span className="text-[17px] lg:text-[20px] font-bold text-black leading-none tracking-tight">NEYMAN</span>
                <span className="text-[11px] lg:text-[13px] font-normal text-gray-800 mt-[3px] leading-none">Enterprise Technologies</span>
            </div>
        </Link>
    );
}
