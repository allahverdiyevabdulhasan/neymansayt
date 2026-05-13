import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
    title: "Neyman Enterprise Technologies | İnnovativ İT Həllər",
    description: "Startup və korporasiyalar üçün innovativ texniki həllər, web inkişaf, mobil tətbiqlər, UX/UI dizayn və CRM sistemləri.",
    keywords: ["IT", "Web Development", "Mobile Apps", "UX/UI Design", "CRM", "Neyman", "Tech"],
    openGraph: {
        title: "Neyman Enterprise Technologies",
        description: "Biznesinizi növbəti səviyyəyə qaldırmaq üçün buradayıq.",
        url: "https://neyman.az",
        siteName: "Neyman Technology",
        locale: "az_AZ",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                suppressHydrationWarning={true}
                className={`${poppins.variable} font-sans antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
