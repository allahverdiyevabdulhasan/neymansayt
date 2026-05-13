import React from "react";
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "@/ui/Header/Header";
import StickyCTA from "@/ui/StickyCTA";
import Footer from "@/ui/Footer";
import WhatsAppWidget from "@/ui/StickyWhatsapp";

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
        <>
            <NextIntlClientProvider messages={messages}>
                <Header contact={contact} socials={socialData} locale={locale} />
                <StickyCTA />
                <main className="pt-17 lg:pt-32.5">{children}</main>
                <Footer contact={contact} socials={socialData} locale={locale} />
                <WhatsAppWidget phone={contact?.phone} />
            </NextIntlClientProvider>
        </>
    );
}