import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function Logo() {
    return (
        <Link href={"/"} className="flex items-center shrink-0 group">
            <div className="relative transition-transform group-hover:scale-[1.03]">
                <Image
                    src="/logo.png"
                    alt="Neyman Logo"
                    width={400}
                    height={120}
                    className="w-auto h-12 md:h-16 lg:h-20 mix-blend-multiply object-contain"
                    priority
                />
            </div>
        </Link>
    );
}
