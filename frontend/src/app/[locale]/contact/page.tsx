import PageHero from "@/ui/NavigationBar";
import React, { Suspense } from "react";
import ContactInfo from "@/app/[locale]/contact/_container/ContactInfo";
import ContactForm from "@/app/[locale]/contact/_container/ContactForm";
import MyMapContainer from "@/app/[locale]/contact/_container/ContactMap";
import ContactFAQSection from "@/app/[locale]/contact/_container/ContactFAQSection";
import { fetchData, getTranslated } from "@/lib/api";

export default async function ContactPage({ params: { locale } }: { params: { locale: string } }) {
    const contactData = await fetchData('contact/info');
    const socialData = await fetchData('contact/socials');
    const faqData = await fetchData('about/faqs');

    const info = contactData?.[0] || {};
    const socials = socialData || [];
    const faqs = faqData || [];

    const title = locale === 'az' ? 'Əlaqə' : locale === 'ru' ? 'Контакты' : 'Contact';
    const subtitle = locale === 'az' ? 'Layihəniz haqqında danışmaq üçün bizimlə əlaqə saxlayın'
        : locale === 'ru' ? 'Свяжитесь с нами, чтобы обсудить ваш проект'
            : 'Contact us to discuss your project';

    return (
        <>
            <PageHero
                title={title}
                subtitle={subtitle}
                breadcrumbs={[{ label: title }]}
                background="blue"
                align="center"
            />

            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        <ContactInfo info={info} socials={socials} locale={locale} />
                        <ContactForm />
                    </div>
                </div>
            </section>
            <Suspense fallback={null}>
                <MyMapContainer lng={info.lng || "49.9349841"} lat={info.lat || "40.417211"} adress={getTranslated(info, 'address', locale) || "Baku,Azerbaycan"} />
            </Suspense>
            <ContactFAQSection faqs={faqs} locale={locale} />
        </>
    );
}
