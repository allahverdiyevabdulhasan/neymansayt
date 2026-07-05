import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import HeroSection from "@/app/[locale]/(home)/_components/Hero";
import AboutSection from "@/app/[locale]/(home)/_components/About";
import ProcessSection from "@/app/[locale]/(home)/_components/WorkProcess";
import ProjectTracking from "@/app/[locale]/(home)/_components/ProjectTracking";
import ServicesSection from "@/app/[locale]/(home)/_components/ServicesSection";
import CTASection from "@/app/[locale]/(home)/_components/CTASection";
import PortfolioSection from "@/app/[locale]/(home)/_components/ProjectsSection";
import PartnersSection from "@/app/[locale]/(home)/_components/PartnersSection";
import NewsSection from "@/app/[locale]/(home)/_components/BlogSection";
import SystemsSlider from "@/app/[locale]/(home)/_components/SystemsSlider";


interface Props {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    // Fallback titles if translations are not fully loaded for metadata
    const titles: Record<string, string> = {
        az: "Ana Səhifə | Neyman Enterprise Technologies",
        en: "Home | Neyman Enterprise Technologies",
        ru: "Главная | Neyman Enterprise Technologies"
    };

    const descriptions: Record<string, string> = {
        az: "İnnovativ İT həlləri, proqram təminatı və qabaqcıl rəqəmsal xidmətlər.",
        en: "Innovative IT solutions, software development and advanced digital services.",
        ru: "Инновационные ИТ-решения, разработка программного обеспечения и передовые цифровые услуги."
    };

    return {
        title: titles[locale] || titles["az"],
        description: descriptions[locale] || descriptions["az"],
    };
}

import { fetchData, getTranslated, getColorizedTitle } from "@/lib/api";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    // Fetch data from modular API
    const heroData = await fetchData('home/home-hero');
    const statsData = await fetchData('home/home-stats');
    const servicesData = await fetchData('services/services');
    const projectsData = await fetchData('projects/projects');
    const stepsData = await fetchData('home/work-process-steps');
    const ctaData = await fetchData('home/global-ctas');
    const contactsData = await fetchData('contact/contact-info');
    const blogsData = await fetchData('blogs/posts');
    const aboutData = await fetchData('home/about');
    const partnersData = await fetchData('home/partners');

    // Process Hero Data
    const hero = heroData && heroData.length > 0 ? heroData[0] : null;
    const stats = statsData ? statsData.map((s: any) => ({
        value: s.value,
        label: getTranslated(s, 'label', locale)
    })) : [];

    const dynamicHeroData = {
        badge_text: getTranslated(hero, 'badge_text', locale),
        title: await getColorizedTitle(getTranslated(hero, 'title', locale), 'text-[#2563eb]'),
        description: getTranslated(hero, 'description', locale),
        hero_image: hero?.image || "https://i.pinimg.com/1200x/54/50/9e/54509e2a32823d2d8b4d773f3ea5c849.jpg",
        stats: stats
    };

    // Process Services Data
    const services = servicesData ? servicesData.map((s: any) => ({
        id: s.id,
        title: getTranslated(s, 'title', locale),
        description: getTranslated(s, 'description', locale),
        slug: s.slug
    })) : [];

    // Process Projects Data
    const projects = projectsData ? projectsData.map((p: any) => ({
        id: p.id,
        title: getTranslated(p, 'title', locale),
        category: getTranslated(p, 'category', locale),
        image: p.thumbnail,
        slug: p.slug
    })) : [];

    // Process Work Process Data
    const steps = stepsData ? stepsData.map((s: any) => ({
        number: s.order < 10 ? `0${s.order}` : `${s.order}`,
        title: getTranslated(s, 'title', locale),
        description: getTranslated(s, 'description', locale),
        duration: getTranslated(s, 'duration', locale),
        deliverables: s.deliverables ? s.deliverables.split('\n') : []
    })) : [];

    // Process CTA and Contact Data
    const cta = ctaData && ctaData.length > 0 ? ctaData[0] : null;
    const contact = contactsData && contactsData.length > 0 ? contactsData[0] : null;

    const dynamicCTAData = {
        badge_text: getTranslated(cta, 'badge_text', locale),
        title: await getColorizedTitle(getTranslated(cta, 'title', locale), 'text-blue-200'),
        description: getTranslated(cta, 'description', locale)
    };

    const contactInfo = {
        email: contact?.email,
        phone: contact?.phone
    };

    // Process About Data
    const about = aboutData && aboutData.length > 0 ? aboutData[0] : null;
    const dynamicAboutData = {
        title: await getColorizedTitle(getTranslated(about, 'title', locale), 'text-[#2563eb]'),
        description: getTranslated(about, 'description', locale) || "Neyman Enterprise Technologies olaraq, rəqəmsal transformasiyada tərəfdaşınızıq. Startuplardan korporasiyalara qədər hər ölçüdə layihədə uğur qazanmışıq.",
        quote: getTranslated(about, 'quote', locale) || "\"Mürəkkəb texnologiyaları sadə, effektiv və biznes dəyəri yaradan həllərə çeviririk.\""
    };

    // Process Partners Data
    const partners = partnersData ? partnersData.map((p: any) => ({
        id: p.id,
        name: getTranslated(p, 'name', locale),
        industry: getTranslated(p, 'industry', locale),
        description: getTranslated(p, 'description', locale),
        logo: p.logo,
        website: p.website,
        since: p.since_year
    })) : [];

    // Process Blogs Data
    const blogs = blogsData ? blogsData.slice(0, 4).map((b: any) => ({
        id: b.id,
        title: getTranslated(b, 'title', locale),
        description: getTranslated(b, 'excerpt', locale) || getTranslated(b, 'content', locale).substring(0, 150) + '...',
        category: getTranslated(b.category, 'name', locale),
        date: new Date(b.created_at).toLocaleDateString(locale === 'az' ? 'az-AZ' : locale === 'en' ? 'en-US' : 'ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }),
        image: b.image,
        slug: b.slug
    })) : [];

    return (
        <>
            <HeroSection data={dynamicHeroData} locale={locale} />
            <AboutSection stats={stats} data={dynamicAboutData} services={services} locale={locale} />
            <ProcessSection steps={steps} locale={locale} />
            <ProjectTracking locale={locale} />
            <SystemsSlider locale={locale} />
            <ServicesSection services={services} locale={locale} />
            <CTASection data={dynamicCTAData} contact={contactInfo} locale={locale} />
            <PortfolioSection projects={projects} locale={locale} />
            <PartnersSection partners={partners} locale={locale} />
            <NewsSection blogs={blogs} locale={locale} />
        </>
    );
}
