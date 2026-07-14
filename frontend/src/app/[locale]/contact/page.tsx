import PageHero from "@/ui/NavigationBar";
import React, { Suspense } from "react";
import ContactInfo from "@/app/[locale]/contact/_container/ContactInfo";
import ContactForm from "@/app/[locale]/contact/_container/ContactForm";
import ContactFAQSection from "@/app/[locale]/contact/_container/ContactFAQSection";
import GlobalReach from "@/app/[locale]/contact/_container/GlobalReach";
import { fetchData, getTranslated } from "@/lib/api";

export default async function ContactPage({ params }: { params: { locale: string } }) {
    const { locale } = await params;
    const contactData = await fetchData('contact/info');
    const socialData = await fetchData('contact/socials');
    const faqData = await fetchData('about/faqs');

    const info = contactData?.[0] || {};
    const socials = socialData || [];
    const faqs = faqData || [];

    const title = locale === 'az' ? 'Əlaqə' 
                : locale === 'ru' ? 'Контакты' 
                : locale === 'tr' ? 'İletişim' 
                : 'Contact';
                
    const subtitle = locale === 'az' ? 'Layihəniz haqqında danışmaq üçün bizimlə əlaqə saxlayın'
        : locale === 'ru' ? 'Свяжитесь с нами, чтобы обсудить ваш проект'
        : locale === 'tr' ? 'Projeniz hakkında konuşmak için bizimle iletişime geçin'
        : 'Contact us to discuss your project';

    return (
        <>
            <PageHero
                title={title}
                subtitle={subtitle}
                breadcrumbs={[{ label: title }]}
                background="white"
                align="left"
            />

            <section className="py-20 lg:py-32 bg-[#FAFAFC] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <ContactInfo info={info} socials={socials} locale={locale} />
                        <ContactForm />
                    </div>
                </div>
            </section>
            
            <GlobalReach locale={locale} />

            <ContactFAQSection faqs={faqs} locale={locale} />
        </>
    );
}
