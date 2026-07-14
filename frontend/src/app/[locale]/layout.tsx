import React from "react";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
export const dynamic = 'force-dynamic';
import { notFound } from "next/navigation";
import Header from "@/ui/Header/Header";
import Footer from "@/ui/Footer";
// Lazy load WhatsApp widget to avoid render blocking
import WhatsAppWidget from "@/ui/StickyWhatsapp";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    display: "swap",
    // Only load necessary font weights to prevent render blocking and heavy payload
    weight: ["400", "500", "600", "700"]
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return {
        title: "Neyman Enterprise Technologies | İnnovativ İT Həllər",
        description: "Startup və korporasiyalar üçün innovativ texniki həllər, web inkişaf, mobil tətbiqlər, UX/UI dizayn və CRM sistemləri.",
        keywords: [
            "IT", "Web Development", "Mobile Apps", "UX/UI Design", "CRM", "Neyman", "Tech",
            "Veb sayt yaradılması", "Süni İntellekt həlləri", "Aİ sistemləri", "SEO xidmətləri", 
            "Startap proqram təminatı", "QR Menyu", "Education CRM"
        ],
        openGraph: {
            title: "Neyman Enterprise Technologies",
            description: "Biznesinizi növbəti səviyyəyə qaldırmaq üçün buradayıq.",
            url: "https://neyman.az",
            siteName: "Neyman Technology",
            locale: locale === 'az' ? 'az_AZ' : locale === 'tr' ? 'tr_TR' : locale === 'ru' ? 'ru_RU' : 'en_US',
            type: "website",
        },
    };
}

interface LocalLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

import { fetchData } from "@/lib/api";

export default async function LocalLayout({
    children,
    params,
}: LocalLayoutProps) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages({ locale });
    setRequestLocale(locale);

    // Fetch Global Data
    const contactData = await fetchData('contact/info');
    const socialData = await fetchData('contact/socials');

    const contact = contactData && contactData.length > 0 ? contactData[0] : null;

    return (
        <html lang={locale}>
            <body
                suppressHydrationWarning={true}
                className={`${poppins.variable} font-sans antialiased`}
            >
                <NextIntlClientProvider messages={messages}>
                    <Header contact={contact} socials={socialData} locale={locale} />
                    <main className="pt-17 lg:pt-32.5">{children}</main>
                    <Footer contact={contact} socials={socialData} locale={locale} />
                    <WhatsAppWidget phone={contact?.phone} />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}